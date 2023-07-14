#ifndef OPERMODE_H
#define OPERMODE_H

#include <QMainWindow>
#include <QPlainTextEdit>

namespace Ui {
class OperMode;
}

class OperMode : public QMainWindow
{
    Q_OBJECT

public:
    explicit OperMode(QWidget *parent = nullptr);
    ~OperMode();


protected:
//    bool eventFilter(QObject *o, QEvent *e);

    void InitializeText();//设置文本

private slots:
    void on_Return_clicked();

    void on_System_btn_clicked();

    void on_Batter_btn_clicked();

    void on_Peak_btn_clicked();







private:
    Ui::OperMode *ui;

signals:
//    void Sent(int flag);
};

#endif // OPERMODE_H
