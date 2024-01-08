#include "LogicDiagram.h"
#include "ui_LogicDiagram.h"
#include <qdebug.h>

LogicDiagram::LogicDiagram(QWidget *parent,int LanguageType) :
    QMainWindow(parent),
    ui(new Ui::LogicDiagram)
{
    ui->setupUi(this);
//    setWindowState(Qt::WindowMaximized); // 最大化
    Language = LanguageType;

}


LogicDiagram::~LogicDiagram()
{
    delete ui;
}

//加载图像
void LogicDiagram::LogicDiagramBtn(int SizeType)
{
     //设置label为居中显式
     ui->label->setAlignment(Qt::AlignCenter);
     QString image_path;
     //读取并显示图像
     if(Language == 0)
        image_path = (":new_ui/UI/LogicDiagram.png");
     else
        image_path = (":new_ui/UI/LogicDiagram_En.png");

     //图片加载类型
     QImage image(image_path);
     if(SizeType == LOAD_RESTORE)
         image = image.scaled((ui->scrollArea->height()*0.7),ui->scrollArea->height(),Qt::IgnoreAspectRatio,Qt::SmoothTransformation);
     else
        image = image.scaled((ui->label->size().height()*0.7),ui->label->size().height(),Qt::IgnoreAspectRatio,Qt::SmoothTransformation);

     srcImage = QPixmap::fromImage(image);
     //重绘
     ui->label->setPixmap(srcImage);
}

//鼠标按键事件
void LogicDiagram::mousePressEvent(QMouseEvent *event)
{
    QRect paint = ui->scrollArea->geometry();//记录scrollArea的区域
    if (event->button() == Qt::LeftButton && paint.contains(event->pos()))//如果按的是鼠标左键且在scorllArea范围内
    {
        mousePress = true;
        this->setCursor(Qt::OpenHandCursor);//改变鼠标样式为手
        preDot = event->pos();//记录起点
    }
}

//鼠标移动事件
void LogicDiagram::mouseMoveEvent(QMouseEvent *event)
{
    if (mousePress)
    {
        //记录scorllArea的横纵滚动条
        QScrollBar *tmph = ui->scrollArea->horizontalScrollBar();
        QScrollBar *tmpv = ui->scrollArea->verticalScrollBar();
        //记录鼠标横纵偏移量
        offset.setX(event->x() - preDot.x());
        offset.setY(event->y() - preDot.y());

        if(tmph->value()<tmph->maximum()&&offset.x()<0)
        {
            tmph->setValue(tmph->value()-offset.x());
        }
        if(tmpv->value()<tmpv->maximum()&&offset.y()<0)
        {
            tmpv->setValue(tmpv->value()-offset.y());
        }
        if(tmph->value()>tmph->minimum()&&offset.x()>0)
        {
            tmph->setValue(tmph->value()-offset.x());
        }
        if(tmpv->value()>tmpv->minimum()&&offset.y()>0)
        {
            tmpv->setValue(tmpv->value()-offset.y());
        }
        preDot = event->pos();//重新记录起点
    }
}

//鼠标松开事件
void LogicDiagram::mouseReleaseEvent(QMouseEvent *event)
{
    if (event->button() == Qt::LeftButton)//如果松开鼠标左键
        {
            mousePress = false;
            this->setCursor(Qt::ArrowCursor);//恢复鼠标样式为箭头
        }
}

//滚轮事件
void LogicDiagram::wheelEvent(QWheelEvent *event)
{
    if (event->modifiers() == Qt::ControlModifier)
    {
        int normalWidth = ui->scrollArea->width();
        int normalHeight = ui->scrollArea->height();

        double scaleFactor = qPow(1.02, event->delta() / 102.0); // 根据滚轮滚动的距离计算缩放因子
        ratio *= scaleFactor;
        int w = ratio * srcImage.width();
        int h = ratio * srcImage.height();
        // 最小为图片完全展示的大小
        if (w < normalWidth && h < normalHeight)
        {
            changeImage = srcImage.scaled((normalHeight*0.7), normalHeight);
            ui->label->setPixmap(changeImage);
            ratio = ratio_t;
        }
        else
        {
            changeImage = srcImage.scaled(w, h);
            ui->label->setPixmap(changeImage);
            ratio_t = ratio;
        }
        event->accept();
    }
    //当滚轮远离使用者时：
}

//检测Ctrl键松开情况
void LogicDiagram::keyReleaseEvent(QKeyEvent *event)
{
    if (event->key() == Qt::Key_Control)
    {
        // Ctrl键被松开
        // 执行app()函数
        LogicDiagramBtn(ONLY_LOAD);//重新加载图片，使其更加清晰
        ratio = 1.0;
        event->accept();
    }
}

void LogicDiagram::showEvent(QShowEvent *event)
{
    QWidget::showEvent(event); // 调用基类的 showEvent
    if (event->isAccepted())
    {
        // 窗口显示后要调用的函数
        ratio = 1.0;
        LogicDiagramBtn(LOAD_RESTORE);
    }
}


void LogicDiagram::InitialLoadingImages()
{
    LogicDiagramBtn(LOAD_RESTORE);
    ratio = 1.0;
}

//重新加载恢复到标准大小
void LogicDiagram::on_pushButton_clicked()
{
    ratio = 1.0;
    LogicDiagramBtn(LOAD_RESTORE);
}

void LogicDiagram::on_pushButton_2_clicked()
{
    this->hide();
}
//表格宽度随窗口大小变化
void LogicDiagram::resizeEvent(QResizeEvent *event)
{
    Q_UNUSED(event);
    ratio = 1.0;
    LogicDiagramBtn(ONLY_LOAD);
}
