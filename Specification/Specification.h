#ifndef SPECIFICATION_H
#define SPECIFICATION_H

#include <QDialog>
#include "database.h"


class Specification : public QDialog
{
    Q_OBJECT

public:
    explicit Specification(QWidget *parent,QPushButton *button, QTableWidget *tableWidget,
                            int r, int col, QString val, QString title, QString text);
    ~Specification();

    bool connect_btn_Key;
    void add_Specification();
    void Opermode_btn_clicked(QPushButton *btn);
    void ModifyText(QString text);



public slots:
    void explain_btn_clicked();
//    void explain_btn_clicked();

private:
    TAB_SPECIFITION tab;
//    bool connect_btn_Key;
};

#endif // SPECIFICATION_H
