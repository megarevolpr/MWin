#include "Specification.h"
#include <QWidget>
#include <QMessageBox>


Specification::Specification(QWidget *parent,QPushButton *button, QTableWidget *tableWidget,
                             int r, int col, QString val, QString title, QString text)
{
    tab.parent = parent;
    tab.explain_btn = button;
    tab.target_tab = tableWidget;
    tab.row = r;
    tab.column = col;
    tab.value = val;
    tab.explain_title = title;
    tab.specification_text = text;
    connect_btn_Key = true;

    connect(tab.explain_btn,SIGNAL(clicked(bool)), this, SLOT(explain_btn_clicked()));
}

Specification::~Specification()
{
    disconnect(tab.explain_btn,SIGNAL(clicked(bool)), this, SLOT(explain_btn_clicked()));
}
//在表格添加点击控件
void Specification::add_Specification()
{
    tab.explain_btn->setText(tab.value);
    tab.explain_btn->setFont(QFont("宋体",12));
    tab.target_tab->setCellWidget(tab.row, tab.column, (QWidget *)tab.explain_btn);
}
//多button关联
void Specification::Opermode_btn_clicked(QPushButton *btn)
{
        if(connect_btn_Key)
        {
//            connect_btn_Key = false;
            btn->setText(tab.value);
            connect(btn,SIGNAL(clicked(bool)), this, SLOT(explain_btn_clicked()));
        }
}
//修改解释说明文本
void Specification::ModifyText(QString text)
{
    tab.specification_text = text;
}
//点击槽
void Specification::explain_btn_clicked()
{
    QMessageBox::question(tab.parent , tab.explain_title, tab.specification_text, "OK");
}



