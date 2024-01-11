#include "mywidget.h"

#include <QApplication>




int main (int argc, char *argv[])
{

    QApplication a(argc, argv);

    QFont font("Courier New", 13);  // 创建一个ourier New字体，字号为13
    QApplication::setFont(font);    // 设置应用程序的全局字体为宋体

    MyWidget w;
    w.setWindowTitle("MPS_V2.1.1");

    w.show();

    return a.exec();
}
