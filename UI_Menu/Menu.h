/*=================================================================================*
*
*                  ___====-_  _-====___
*            _--^^^#####//      \\#####^^^--_
*         _-^##########// (    ) \\##########^-_
*        -############//  |\^^/|  \\############-
*      _/############//   (@::@)   \\############\_
*     /#############((     \\//     ))#############\
*    -###############\\    (oo)    //###############-
*   -#################\\  / VV \  //#################-
*  -###################\\/      \//###################-
* _#/|##########/\######(   /\   )######/\##########|\#_
* |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
* `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
*    `   `  `      `   / | |  | | \   '      '  '   '
*                     (  | |  | |  )
*                    __\ | |  | | /__
*                   (vvv(VVV)(VVV)vvv)
*
*
*
*	PRODUCT  : MEGA-PCS
*	FILENAME : Energy.cpp
*	PURPOSE	:  电能管理模块
*
*  HISTORY :
*		DATE            VERSION        AUTHOR            NOTE
*	2019-05-29			V1.0		   Laoss			created
*
*	NOTE    :
*=================================================================================*/

#ifndef MENU_H
#define MENU_H

#include <QDialog>
#include <QMouseEvent>
#define HOSTPAGE        1
#define RTDATAPAGE      2
#define RECORDPAGE      3
#define SYSTEMPAGE      4
#define MACHINECLOSE    5
#define MACHINESTANDBY  6
#define MACHINEOPEN     7
#define MACHINESWITCH   8


namespace Ui {
class Menu;
}

class Menu : public QDialog
{
    Q_OBJECT

public:
    explicit Menu(QWidget *parent = 0);
    ~Menu();
    void focusOutEvent(QFocusEvent *e);
protected:
    void mousePressEvent(QMouseEvent *e);
    void mouseReleaseEvent(QMouseEvent *e);
    bool eventFilter(QObject *obj, QEvent *event);

private slots:
    void on_Host_bt_clicked();

    void on_RTDATA_bt_clicked();

    void on_Record_bt_clicked();

    void on_System_bt_clicked();

    void on_Open_bt_clicked();

    void on_Standby_bt_clicked();

//    void on_Close_bt_clicked();

signals:
    void Sent(int flag);

private:
    Ui::Menu *ui;
};

#endif // MENU_H
