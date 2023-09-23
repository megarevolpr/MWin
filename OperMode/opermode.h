#ifndef OPERMODE_H
#define OPERMODE_H

#include <QMainWindow>
#include <QPlainTextEdit>
#include <QDesktopWidget>

#include "Specification/Specification.h"

namespace Ui {
class OperMode;
}

class OperMode : public QMainWindow
{
    Q_OBJECT

public:
    explicit OperMode(QWidget *parent = nullptr,int MyLanguage = 0);

    QPushButton *Bat_Type_btn;
    QPushButton *Bat_Comm_btn;
    QPushButton *EMS_Comm_btn;
    QPushButton *Charge_SOC_btn;
    QPushButton *Discharge_SOC_btn;
    QPushButton *Energy_priority_btn;
    QPushButton *Anti_reflux_btn;
    QPushButton *ConstantPower_btn;
    QPushButton *Charge_upper_Limit;
    QPushButton *Charge_Limit_delta_btn;
    QPushButton *Disharge_Lower_Limit;
    QPushButton *Disharge_Limit_delta_btn;
    QPushButton *Charge_Current_btn;
    QPushButton *Discharge_Current_Limit_btn;
    QPushButton *DOD_OnGrid_btn;
    QPushButton *DOD_OffGrid_btn;
    QPushButton *Generator_turn_on_SOC_btn;
    QPushButton *Generator_turn_off_SOC_btn;
    QPushButton *Max_Bat_protection_btn;
    QPushButton *DG_ECP;
    QPushButton *DG_FCP;
    QPushButton *Grid_ECP;
    QPushButton *Grid_FCP;
    QPushButton *Grid_EDP;
    QPushButton *Grid_FDP;

    Specification *Bat_Type_btn_explain;
    Specification *Bat_Comm_btn_explain;
    Specification *EMS_Comm_btn_explain;
    Specification *Charge_SOC_btn_explain;
    Specification *Discharge_SOC_btn_explain;
    Specification *Energy_priority_btn_explain;
    Specification *Anti_reflux_btn_explain;
    Specification *ConstantPower_btn_explain;
    Specification *Charge_upper_Limit_explain;
    Specification *Charge_Limit_delta_btn_explain;
    Specification *Disharge_Lower_Limit_explain;
    Specification *Disharge_Limit_delta_btn_explain;
    Specification *Charge_Current_btn_explain;
    Specification *Discharge_Current_Limit_btn_explain;
    Specification *DOD_OnGrid_btn_explain;
    Specification *DOD_OffGrid_btn_explain;
    Specification *Generator_turn_on_SOC_btn_explain;
    Specification *Generator_turn_off_SOC_btn_explain;
    Specification *Max_Bat_protection_btn_explain;
    Specification *DG_ECP_explain;
    Specification *DG_FCP_explain;
    Specification *Grid_ECP_explain;
    Specification *Grid_FCP_explain;
    Specification *Grid_EDP_explain;
    Specification *Grid_FDP_explain;

    QPushButton *BatPri_Bat_Type_btn;
    QPushButton *BatPri_Bat_Comm_btn;
    QPushButton *BatPri_EMS_Comm_btn;
    QPushButton *BatPri_Charge_SOC_btn;
    QPushButton *BatPri_Discharge_SOC_btn;
    QPushButton *BatPri_Energy_priority_btn;
    QPushButton *BatPri_Anti_reflux_btn;
    QPushButton *BatPri_ConstantPower_btn;
    QPushButton *BatPri_Charge_upper_Limit;
    QPushButton *BatPri_Charge_Limit_delta_btn;
    QPushButton *BatPri_Disharge_Lower_Limit;
    QPushButton *BatPri_Disharge_Limit_delta_btn;
    QPushButton *BatPri_Charge_Current_btn;
    QPushButton *BatPri_Discharge_Current_Limit_btn;
    QPushButton *BatPri_DOD_OnGrid_btn;
    QPushButton *BatPri_DOD_OffGrid_btn;
    QPushButton *BatPri_Generator_turn_on_SOC_btn;
    QPushButton *BatPri_Generator_turn_off_SOC_btn;
    QPushButton *BatPri_Max_Bat_protection_btn;
    QPushButton *BatPri_DG_ECP;
    QPushButton *BatPri_DG_FCP;
    QPushButton *BatPri_Grid_ECP;
    QPushButton *BatPri_Grid_FCP;
    QPushButton *BatPri_Grid_EDP;
    QPushButton *BatPri_Grid_FDP;

    QPushButton *OptMod_Bat_Type_btn;
    QPushButton *OptMod_Bat_Comm_btn;
    QPushButton *OptMod_EMS_Comm_btn;
    QPushButton *OptMod_Charge_SOC_btn;
    QPushButton *OptMod_Discharge_SOC_btn;
    QPushButton *OptMod_Energy_priority_btn;
    QPushButton *OptMod_Anti_reflux_btn;
    QPushButton *OptMod_ConstantPower_btn;
    QPushButton *OptMod_Charge_upper_Limit;
    QPushButton *OptMod_Charge_Limit_delta_btn;
    QPushButton *OptMod_Disharge_Lower_Limit;
    QPushButton *OptMod_Disharge_Limit_delta_btn;
    QPushButton *OptMod_Charge_Current_btn;
    QPushButton *OptMod_Discharge_Current_Limit_btn;
    QPushButton *OptMod_DOD_OnGrid_btn;
    QPushButton *OptMod_DOD_OffGrid_btn;
    QPushButton *OptMod_Generator_turn_on_SOC_btn;
    QPushButton *OptMod_Generator_turn_off_SOC_btn;
    QPushButton *OptMod_Max_Bat_protection_btn;
    QPushButton *OptMod_DG_ECP;
    QPushButton *OptMod_DG_FCP;
    QPushButton *OptMod_Grid_ECP;
    QPushButton *OptMod_Grid_FCP;
    QPushButton *OptMod_Grid_EDP;
    QPushButton *OptMod_Grid_FDP;


    QString str,str2,str3,str4,str5,str6,str7,str8;

    QString Bat_Type_str;
    QString Bat_Comm_str;
    QString EMS_Comm_str;
    QString Charge_SOC_str;
    QString Discharge_SOC_str;
    QString Energy_priority_str;
    QString Anti_reflux_str;
    QString ConstantPower_str;
    QString Charge_upper_Limit_str;
    QString Charge_Limit_delta_str;
    QString Disharge_Lower_Limit_str;
    QString Disharge_Limit_delta_str;
    QString Charge_Current_str;
    QString Discharge_Current_Limit_str;
    QString DOD_OnGrid_str;
    QString DOD_OffGrid_str;
    QString Generator_turn_on_SOC_str;
    QString Generator_turn_off_SOC_str;
    QString Max_Bat_protection_str;
    QString DG_ECP_str;
    QString DG_FCP_str;
    QString Grid_ECP_str;
    QString Grid_FCP_str;
    QString Grid_EDP_str;
    QString Grid_FDP_str;

    QString Bat_Type_str_Content;
    QString Bat_Comm_str_Content;
    QString EMS_Comm_str_Content;
    QString Charge_SOC_str_Content;
    QString Discharge_SOC_str_Content;
    QString Energy_priority_str_Content;
    QString Anti_reflux_str_Content;
    QString ConstantPower_str_Content;
    QString Charge_upper_Limit_str_Content;
    QString Charge_Limit_delta_str_Content;
    QString Disharge_Lower_Limit_str_Content;
    QString Disharge_Limit_delta_str_Content;
    QString Charge_Current_str_Content;
    QString Discharge_Current_Limit_str_Content;
    QString DOD_OnGrid_str_Content;
    QString DOD_OffGrid_str_Content;
    QString Generator_turn_on_SOC_str_Content;
    QString Generator_turn_off_SOC_str_Content;
    QString Max_Bat_protection_str_Content;
    QString DG_ECP_str_Content;
    QString DG_FCP_str_Content;
    QString Grid_ECP_str_Content;
    QString Grid_FCP_str_Content;
    QString Grid_EDP_str_Content;
    QString Grid_FDP_str_Content;
    ~OperMode();


protected:
//    bool eventFilter(QObject *o, QEvent *e);

//    void InitializeText();//设置文本
    void InitializeMemorySpace();//初始化内存空间
    void InitializeChart(QTableWidget *myWidget);//初始化图表
    void InitializeChart_2(QTableWidget *myWidget);//初始化图表
    void Init_Tab_button();//初始化表格点击控件
    void Init_SysTab_button(QTableWidget *myWidget);//初始化表格点击控件
    void Init_BatTab_button(QTableWidget *myWidget);//初始化表格点击控件
    void Init_OptTab_button(QTableWidget *myWidget);//初始化表格点击控件
    void Init_MixdeTab_button(QTableWidget *myWidget);//初始化表格点击控件
    virtual void resizeEvent(QResizeEvent *event)override;//调整控件大小
    void SetExplain(QTableWidget *myWidget);
    void setAppSize(int remainH);//窗口大小

    int Language;

private slots:
    void on_Return_clicked();

    void on_System_btn_clicked();

    void on_Batter_btn_clicked();

    void on_Optimal_btn_clicked();

    void on_AreaDivision_btn_clicked();

    void on_Mixde_btn_clicked();

    void on_Manual_btn_clicked();

private:
    Ui::OperMode *ui;

signals:
//    void Sent(int flag);
};

#endif // OPERMODE_H
