#ifndef LOGIVDIAGRAM_H
#define LOGIVDIAGRAM_H

#include <QMainWindow>
#include <QDesktopWidget>
#include <QButtonGroup>
#include <QMessageBox>
#include <QMouseEvent>
#include <QScrollBar>
#include <QtMath>

namespace Ui {
class LogicDiagram;
}

class LogicDiagram : public QMainWindow
{
    Q_OBJECT

public:
    explicit LogicDiagram(QWidget *parent = nullptr,int LanguageType=0);
    ~LogicDiagram(); //析构函数，便于查看系统回收的过程

    QPixmap srcImage,changeImage,normal;   //原始图像以及缩放后的图像
    float ratio = 1.0;      //缩放的比例
    float ratio_t;

    int Language;

    void LogicDiagramBtn();//槽函数
    void on_tabWidget_currentChanged(int index);

    void InitialLoadingImages();

private slots:

    void on_pushButton_clicked();
    void on_pushButton_2_clicked();

protected:
   virtual void wheelEvent(QWheelEvent *event) override;    //滚轮事件
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    void mouseReleaseEvent(QMouseEvent *event) ;
    void keyReleaseEvent(QKeyEvent *event) override;

private:
    Ui::LogicDiagram *ui;

    QPoint preDot,offset;
    bool mousePress = false;//鼠标按压状态

//    virtual void resizeEvent(QResizeEvent *event)overr   ide;//调整控件大小
};

#endif // LOGIVDIAGRAM_H
