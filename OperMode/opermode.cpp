#include "opermode.h"
#include "ui_opermode.h"

OperMode::OperMode(QWidget *parent,int MyLanguage) :
    QMainWindow(parent),
    ui(new Ui::OperMode)
{
    ui->setupUi(this);
    Language = MyLanguage;
    setWindowState(Qt::WindowMaximized); // 最大化
    InitializeMemorySpace();//初始化内存空间

    Init_Tab_button();//绘表
    ui->AreaDivision_btn->click();
}

OperMode::~OperMode()
{
    delete ui;
}
//初始化内存空间
void OperMode::InitializeMemorySpace()
{
    Bat_Type_btn = new QPushButton;
    Bat_Comm_btn = new QPushButton;
    EMS_Comm_btn = new QPushButton;
    Charge_SOC_btn = new QPushButton;
    Discharge_SOC_btn = new QPushButton;
    Energy_priority_btn = new QPushButton;
    Anti_reflux_btn = new QPushButton;
    ConstantPower_btn = new QPushButton;
    Charge_upper_Limit = new QPushButton;
    Charge_Limit_delta_btn = new QPushButton;
    Disharge_Lower_Limit = new QPushButton;
    Disharge_Limit_delta_btn = new QPushButton;
    Charge_Current_btn = new QPushButton;
    Discharge_Current_Limit_btn = new QPushButton;
    DOD_OnGrid_btn = new QPushButton;
    DOD_OffGrid_btn = new QPushButton;
    Generator_turn_on_SOC_btn = new QPushButton;
    Generator_turn_off_SOC_btn = new QPushButton;
    Max_Bat_protection_btn = new QPushButton;
    DG_ECP = new QPushButton;
    DG_FCP = new QPushButton;
    Grid_ECP = new QPushButton;
    Grid_FCP = new QPushButton;
    Grid_EDP = new QPushButton;
    Grid_FDP = new QPushButton;

    BatPri_Bat_Type_btn = new QPushButton;
    BatPri_Bat_Comm_btn = new QPushButton;
    BatPri_EMS_Comm_btn = new QPushButton;
    BatPri_Charge_SOC_btn = new QPushButton;
    BatPri_Discharge_SOC_btn = new QPushButton;
    BatPri_Energy_priority_btn = new QPushButton;
    BatPri_Anti_reflux_btn = new QPushButton;
    BatPri_ConstantPower_btn = new QPushButton;
    BatPri_Charge_upper_Limit = new QPushButton;
    BatPri_Charge_Limit_delta_btn = new QPushButton;
    BatPri_Disharge_Lower_Limit = new QPushButton;
    BatPri_Disharge_Limit_delta_btn = new QPushButton;
    BatPri_Charge_Current_btn = new QPushButton;
    BatPri_Discharge_Current_Limit_btn = new QPushButton;
    BatPri_DOD_OnGrid_btn = new QPushButton;
    BatPri_DOD_OffGrid_btn = new QPushButton;
    BatPri_Generator_turn_on_SOC_btn = new QPushButton;
    BatPri_Generator_turn_off_SOC_btn = new QPushButton;
    BatPri_Max_Bat_protection_btn = new QPushButton;
    BatPri_DG_ECP = new QPushButton;
    BatPri_DG_FCP = new QPushButton;
    BatPri_Grid_ECP = new QPushButton;
    BatPri_Grid_FCP = new QPushButton;
    BatPri_Grid_EDP = new QPushButton;
    BatPri_Grid_FDP = new QPushButton;

    OptMod_Bat_Type_btn = new QPushButton;
    OptMod_Bat_Comm_btn = new QPushButton;
    OptMod_EMS_Comm_btn = new QPushButton;
    OptMod_Charge_SOC_btn = new QPushButton;
    OptMod_Discharge_SOC_btn = new QPushButton;
    OptMod_Energy_priority_btn = new QPushButton;
    OptMod_Anti_reflux_btn = new QPushButton;
    OptMod_ConstantPower_btn = new QPushButton;
    OptMod_Charge_upper_Limit = new QPushButton;
    OptMod_Charge_Limit_delta_btn = new QPushButton;
    OptMod_Disharge_Lower_Limit = new QPushButton;
    OptMod_Disharge_Limit_delta_btn = new QPushButton;
    OptMod_Charge_Current_btn = new QPushButton;
    OptMod_Discharge_Current_Limit_btn = new QPushButton;
    OptMod_DOD_OnGrid_btn = new QPushButton;
    OptMod_DOD_OffGrid_btn = new QPushButton;
    OptMod_Generator_turn_on_SOC_btn = new QPushButton;
    OptMod_Generator_turn_off_SOC_btn = new QPushButton;
    OptMod_Max_Bat_protection_btn = new QPushButton;
    OptMod_DG_ECP = new QPushButton;
    OptMod_DG_FCP = new QPushButton;
    OptMod_Grid_ECP = new QPushButton;
    OptMod_Grid_FCP = new QPushButton;
    OptMod_Grid_EDP = new QPushButton;
    OptMod_Grid_FDP = new QPushButton;

    str = tr("Click to view");
    str2 = tr("Invalid in this mode.");//该模式下无效
    str3 = tr("In this mode, the charging power of the AC side is limited.");//该模式下，限制交流侧的充电功率
    str4 = tr("Protection is not triggered in this mode.");//该模式下不会触发保护。
    str5 = tr("If the SOC is lower than this value, it is in the empty zone and FCP is executed.");//SOC低于该值，处于放空区，执行FCP
    str6 = tr("Disarm FCP point.");//解除FCP点
    str7 = tr("Control battery does not discharge.");//控制电池不放电
    str8 = tr("After DOD is triggered in this mode, it is not triggered in grid-connected mode and is shut down in off-network mode.");//该模式下触发DOD后，并网模式下，不会触发，离网情况下关机。

    Bat_Type_str = tr("Battery type");
    Bat_Comm_str = tr("BMS Comm.type");
    EMS_Comm_str = tr("EMS Comm.type");
    Charge_SOC_str = tr("Charge SOC");
    Discharge_SOC_str = tr("Discharge SOC");
    Energy_priority_str = tr("Energy priority");
    Anti_reflux_str = tr("Grid connected mode of lnv");
    ConstantPower_str = tr("Constant power(AC)");
    Charge_upper_Limit_str = tr("Charge Volt. upper Limit(V)");
    Charge_Limit_delta_str = tr("Charge Volt. upper Limit delta(V)");
    Disharge_Lower_Limit_str = tr("Discharge Volt. lower Limit(V)");
    Disharge_Limit_delta_str = tr("Discharge Volt. lower Limit delta(V)");
    Charge_Current_str = tr("Charge Current Limit(A)");
    Discharge_Current_Limit_str = tr("Discharge Current Limit(A)");
    DOD_OnGrid_str = tr("DOD OnGrid(%)");
    DOD_OffGrid_str = tr("DOD OffGrid(%)");
    Generator_turn_on_SOC_str = tr("Generator turn on SOC(A1)");
    Generator_turn_off_SOC_str = tr("Generator turn off SOC(B1)");
    Max_Bat_protection_str = tr("Maximum battery protection value(V)");
    DG_ECP_str = tr("DG ECP");
    DG_FCP_str = tr("DG FCP");
    Grid_ECP_str = tr("Grid ECP");
    Grid_FCP_str = tr("Grid FCP");
    Grid_EDP_str = tr("Grid EDP");
    Grid_FDP_str = tr("Grid FDP");

    Bat_Type_str_Content = tr("Currently, only lithium batteries are supported.");
    Bat_Comm_str_Content = tr("Set the communication mode with the battery.");
    EMS_Comm_str_Content = tr("This section describes how to set the communication mode with the EMS.");
    Charge_SOC_str_Content = tr("In this mode, if the SOC is smaller than the charging SOC, the AC test provides a small power to maintain the charging SOC.");
    Discharge_SOC_str_Content = tr("Invalid in this mode.");
    Energy_priority_str_Content = tr("In this mode, you can choose whether to preferentially use electricity from the grid or battery.");
    Anti_reflux_str_Content = tr("In this mode, you can choose whether to reverse the flow.");
    ConstantPower_str_Content = tr("Invalid in this mode.");
    Charge_upper_Limit_str_Content = tr("Battery charging voltage cut-off point.");
    Charge_Limit_delta_str_Content = tr("Battery charge voltage back almost.");
    Disharge_Lower_Limit_str_Content = tr("Battery discharge voltage cut-off point.");
    Disharge_Limit_delta_str_Content = tr("Battery discharge voltage back to almost.");
    Charge_Current_str_Content = tr("Limit the battery charging current point.");
    Discharge_Current_Limit_str_Content = tr("Limit the battery discharge current point.");
    DOD_OnGrid_str_Content = tr("In this mode, when the SOC is less than (100 - DOD), the battery does not discharge and does not draw power from the grid.");
    DOD_OffGrid_str_Content = tr("After DOD is triggered in this mode, no charge or shutdown is performed in grid-connected mode, and the device is shut down in off-network condition.");
    Generator_turn_on_SOC_str_Content = tr("When SOC is less than or equal to Chaifa, start Chaifa.");
    Generator_turn_off_SOC_str_Content = tr("When SOC is greater than or equal to Chaifa, turn off Chaifa.");
    Max_Bat_protection_str_Content = tr("Limit the maximum voltage of the battery charging cell.");
    DG_ECP_str_Content = tr("In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.");
    DG_FCP_str_Content = tr("Power reference value of AC side of the discharge area in Chai hair mode.");
    Grid_ECP_str_Content = tr("In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.");
    Grid_FCP_str_Content = tr("In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.");
    Grid_EDP_str_Content = tr("The equalization zone limits the discharge power of the system to the grid side.");
    Grid_FDP_str_Content = tr("The discharge zone limits the discharge power of the system to the power grid side.");
}
//初始化图表
void OperMode::InitializeChart(QTableWidget *myWidget)
{
    myWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    myWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    myWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->PVEidt->setReadOnly(true);//只读
    ui->PV_A_Edit->setReadOnly(true);
    ui->PV_B_Edit->setReadOnly(true);
    ui->PV_C_Edit->setReadOnly(true);

    ui->plainTextEdit->setReadOnly(true);//只读
    ui->BAT_A_Edit->setReadOnly(true);
    ui->BAT_B1_Edit->setReadOnly(true);
    ui->BAT_B2_Edit->setReadOnly(true);
    ui->BAT_2A_Edit->setReadOnly(true);


    ui->BPG_Edit->setReadOnly(true);//只读
    ui->Optimal_A_Edit->setReadOnly(true);
    ui->Optimal_B_Edit->setReadOnly(true);
    ui->Optimal_C_Edit->setReadOnly(true);
    ui->Optimal_D_Edit->setReadOnly(true);
    ui->Optimal_2A_Edit->setReadOnly(true);
    ui->Optimal_2B_Edit->setReadOnly(true);

    for(int i=0;i<25;i++)
    {
        myWidget->setRowHeight(i,50);
    }
}

//初始化表格点击控件
void OperMode::Init_Tab_button()
{
    setStyleSheet(
        /**鼠标停留在按钮上的样式**/
        "QPushButton::hover{"
            "color: #FFFFFF;"
            "background-color: #718093;"
            "border-color: #2f3640;"
        "}"

        /**鼠标按压下去的样式**/
        "QPushButton::pressed,QPushButton::checked{"
            "color: #FFFFFF;"
            "background-color: qlineargradient(spread:pad, x1:0, y1:0, x2:0, y2:1, stop:0 #273c75, stop:1 #487eb0);"
        "}"
         );
    if(Language)
    {
        ui->BatteryArea->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area3.png);background-color: rgb(170, 255, 255);");
    }
    else
    {
        ui->BatteryArea->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area2.png);background-color: rgb(170, 255, 255);");
    }

    Init_SysTab_button(ui->Paramrter_Widget);//填充内容
    Init_BatTab_button(ui->BatPri_Widget);
    Init_OptTab_button(ui->OptMod_Widget);
    Init_MixdeTab_button(ui->Mixde_Widget);

    InitializeChart(ui->Paramrter_Widget);
    InitializeChart(ui->BatPri_Widget);
    InitializeChart(ui->OptMod_Widget);
    InitializeChart(ui->Mixde_Widget);
}
//初始化表格 自发自用
void OperMode::Init_SysTab_button(QTableWidget *myWidget)
{
    myWidget->setCellWidget(0, 1, (QWidget *)Bat_Type_btn);
    myWidget->setCellWidget(1, 1, (QWidget *)Bat_Comm_btn);
    myWidget->setCellWidget(2, 1, (QWidget *)EMS_Comm_btn);
    myWidget->setCellWidget(3, 1, (QWidget *)Charge_SOC_btn);
    myWidget->setCellWidget(4, 1, (QWidget *)Discharge_SOC_btn);
    myWidget->setCellWidget(5, 1, (QWidget *)Energy_priority_btn);
    myWidget->setCellWidget(6, 1, (QWidget *)Anti_reflux_btn);
    myWidget->setCellWidget(7, 1, (QWidget *)ConstantPower_btn);
    myWidget->setCellWidget(8, 1, (QWidget *)Charge_upper_Limit);
    myWidget->setCellWidget(9, 1, (QWidget *)Charge_Limit_delta_btn);
    myWidget->setCellWidget(10, 1, (QWidget *)Disharge_Lower_Limit);
    myWidget->setCellWidget(11, 1, (QWidget *)Disharge_Limit_delta_btn);
    myWidget->setCellWidget(12, 1, (QWidget *)Charge_Current_btn);
    myWidget->setCellWidget(13, 1, (QWidget *)Discharge_Current_Limit_btn);
    myWidget->setCellWidget(14, 1, (QWidget *)DOD_OnGrid_btn);
    myWidget->setCellWidget(15, 1, (QWidget *)DOD_OffGrid_btn);
    myWidget->setCellWidget(16, 1, (QWidget *)Generator_turn_on_SOC_btn);
    myWidget->setCellWidget(17, 1, (QWidget *)Generator_turn_off_SOC_btn);
    myWidget->setCellWidget(18, 1, (QWidget *)Max_Bat_protection_btn);
    myWidget->setCellWidget(19, 1, (QWidget *)DG_ECP);
    myWidget->setCellWidget(20, 1, (QWidget *)DG_FCP);
    myWidget->setCellWidget(21, 1, (QWidget *)Grid_ECP);
    myWidget->setCellWidget(22, 1, (QWidget *)Grid_FCP);
    myWidget->setCellWidget(23, 1, (QWidget *)Grid_EDP);
    myWidget->setCellWidget(24, 1, (QWidget *)Grid_FDP);

}
//初始化表格 电池优先
void OperMode::Init_BatTab_button(QTableWidget *myWidget)
{
    myWidget->setCellWidget(0, 1, (QWidget *)BatPri_Bat_Type_btn);
    myWidget->setCellWidget(1, 1, (QWidget *)BatPri_Bat_Comm_btn);
    myWidget->setCellWidget(2, 1, (QWidget *)BatPri_EMS_Comm_btn);
    myWidget->setCellWidget(3, 1, (QWidget *)BatPri_Charge_SOC_btn);
    myWidget->setCellWidget(4, 1, (QWidget *)BatPri_Discharge_SOC_btn);
    myWidget->setCellWidget(5, 1, (QWidget *)BatPri_Energy_priority_btn);
    myWidget->setCellWidget(6, 1, (QWidget *)BatPri_Anti_reflux_btn);
    myWidget->setCellWidget(7, 1, (QWidget *)BatPri_ConstantPower_btn);
    myWidget->setCellWidget(8, 1, (QWidget *)BatPri_Charge_upper_Limit);
    myWidget->setCellWidget(9, 1, (QWidget *)BatPri_Charge_Limit_delta_btn);
    myWidget->setCellWidget(10, 1, (QWidget *)BatPri_Disharge_Lower_Limit);
    myWidget->setCellWidget(11, 1, (QWidget *)BatPri_Disharge_Limit_delta_btn);
    myWidget->setCellWidget(12, 1, (QWidget *)BatPri_Charge_Current_btn);
    myWidget->setCellWidget(13, 1, (QWidget *)BatPri_Discharge_Current_Limit_btn);
    myWidget->setCellWidget(14, 1, (QWidget *)BatPri_DOD_OnGrid_btn);
    myWidget->setCellWidget(15, 1, (QWidget *)BatPri_DOD_OffGrid_btn);
    myWidget->setCellWidget(16, 1, (QWidget *)BatPri_Generator_turn_on_SOC_btn);
    myWidget->setCellWidget(17, 1, (QWidget *)BatPri_Generator_turn_off_SOC_btn);
    myWidget->setCellWidget(18, 1, (QWidget *)BatPri_Max_Bat_protection_btn);
    myWidget->setCellWidget(19, 1, (QWidget *)BatPri_DG_ECP);
    myWidget->setCellWidget(20, 1, (QWidget *)BatPri_DG_FCP);
    myWidget->setCellWidget(21, 1, (QWidget *)BatPri_Grid_ECP);
    myWidget->setCellWidget(22, 1, (QWidget *)BatPri_Grid_FCP);
    myWidget->setCellWidget(23, 1, (QWidget *)BatPri_Grid_EDP);
    myWidget->setCellWidget(24, 1, (QWidget *)BatPri_Grid_FDP);


}
//初始化表格 最优模式
void OperMode::Init_OptTab_button(QTableWidget *myWidget)
{
    myWidget->setCellWidget(0, 1, (QWidget *)OptMod_Bat_Type_btn);
    myWidget->setCellWidget(1, 1, (QWidget *)OptMod_Bat_Comm_btn);
    myWidget->setCellWidget(2, 1, (QWidget *)OptMod_EMS_Comm_btn);
    myWidget->setCellWidget(3, 1, (QWidget *)OptMod_Charge_SOC_btn);
    myWidget->setCellWidget(4, 1, (QWidget *)OptMod_Discharge_SOC_btn);
    myWidget->setCellWidget(5, 1, (QWidget *)OptMod_Energy_priority_btn);
    myWidget->setCellWidget(6, 1, (QWidget *)OptMod_Anti_reflux_btn);
    myWidget->setCellWidget(7, 1, (QWidget *)OptMod_ConstantPower_btn);
    myWidget->setCellWidget(8, 1, (QWidget *)OptMod_Charge_upper_Limit);
    myWidget->setCellWidget(9, 1, (QWidget *)OptMod_Charge_Limit_delta_btn);
    myWidget->setCellWidget(10, 1, (QWidget *)OptMod_Disharge_Lower_Limit);
    myWidget->setCellWidget(11, 1, (QWidget *)OptMod_Disharge_Limit_delta_btn);
    myWidget->setCellWidget(12, 1, (QWidget *)OptMod_Charge_Current_btn);
    myWidget->setCellWidget(13, 1, (QWidget *)OptMod_Discharge_Current_Limit_btn);
    myWidget->setCellWidget(14, 1, (QWidget *)OptMod_DOD_OnGrid_btn);
    myWidget->setCellWidget(15, 1, (QWidget *)OptMod_DOD_OffGrid_btn);
    myWidget->setCellWidget(16, 1, (QWidget *)OptMod_Generator_turn_on_SOC_btn);
    myWidget->setCellWidget(17, 1, (QWidget *)OptMod_Generator_turn_off_SOC_btn);
    myWidget->setCellWidget(18, 1, (QWidget *)OptMod_Max_Bat_protection_btn);
    myWidget->setCellWidget(19, 1, (QWidget *)OptMod_DG_ECP);
    myWidget->setCellWidget(20, 1, (QWidget *)OptMod_DG_FCP);
    myWidget->setCellWidget(21, 1, (QWidget *)OptMod_Grid_ECP);
    myWidget->setCellWidget(22, 1, (QWidget *)OptMod_Grid_FCP);
    myWidget->setCellWidget(23, 1, (QWidget *)OptMod_Grid_EDP);
    myWidget->setCellWidget(24, 1, (QWidget *)OptMod_Grid_FDP);

    SetExplain(myWidget);


}
//初始化表格 混合模式
void OperMode::Init_MixdeTab_button(QTableWidget *myWidget)
{
    myWidget->setCellWidget(0, 1, (QWidget *)OptMod_Bat_Type_btn);
    myWidget->setCellWidget(1, 1, (QWidget *)OptMod_Bat_Comm_btn);
    myWidget->setCellWidget(2, 1, (QWidget *)OptMod_EMS_Comm_btn);
    myWidget->setCellWidget(3, 1, (QWidget *)OptMod_Charge_SOC_btn);
    myWidget->setCellWidget(4, 1, (QWidget *)OptMod_Discharge_SOC_btn);
    myWidget->setCellWidget(5, 1, (QWidget *)OptMod_Energy_priority_btn);
    myWidget->setCellWidget(6, 1, (QWidget *)OptMod_Anti_reflux_btn);
    myWidget->setCellWidget(7, 1, (QWidget *)OptMod_ConstantPower_btn);
    myWidget->setCellWidget(8, 1, (QWidget *)OptMod_Charge_upper_Limit);
    myWidget->setCellWidget(9, 1, (QWidget *)OptMod_Charge_Limit_delta_btn);
    myWidget->setCellWidget(10, 1, (QWidget *)OptMod_Disharge_Lower_Limit);
    myWidget->setCellWidget(11, 1, (QWidget *)OptMod_Disharge_Limit_delta_btn);
    myWidget->setCellWidget(12, 1, (QWidget *)OptMod_Charge_Current_btn);
    myWidget->setCellWidget(13, 1, (QWidget *)OptMod_Discharge_Current_Limit_btn);
    myWidget->setCellWidget(14, 1, (QWidget *)OptMod_DOD_OnGrid_btn);
    myWidget->setCellWidget(15, 1, (QWidget *)OptMod_DOD_OffGrid_btn);
    myWidget->setCellWidget(16, 1, (QWidget *)OptMod_Generator_turn_on_SOC_btn);
    myWidget->setCellWidget(17, 1, (QWidget *)OptMod_Generator_turn_off_SOC_btn);
    myWidget->setCellWidget(18, 1, (QWidget *)OptMod_Max_Bat_protection_btn);
    myWidget->setCellWidget(19, 1, (QWidget *)OptMod_DG_ECP);
    myWidget->setCellWidget(20, 1, (QWidget *)OptMod_DG_FCP);
    myWidget->setCellWidget(21, 1, (QWidget *)OptMod_Grid_ECP);
    myWidget->setCellWidget(22, 1, (QWidget *)OptMod_Grid_FCP);
    myWidget->setCellWidget(23, 1, (QWidget *)OptMod_Grid_EDP);
    myWidget->setCellWidget(24, 1, (QWidget *)OptMod_Grid_FDP);
}



//返回
void OperMode::on_Return_clicked()
{
    this->hide();
//    this->parentWidget()->show();
}

//自发自用
void OperMode::on_System_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Systempage);
    Charge_SOC_btn_explain->ModifyText(Charge_SOC_str_Content);
    Discharge_SOC_btn_explain->ModifyText(Discharge_SOC_str_Content);
    ConstantPower_btn_explain->ModifyText(ConstantPower_str_Content);
    DOD_OnGrid_btn_explain->ModifyText(DOD_OnGrid_str_Content);
    DOD_OffGrid_btn_explain->ModifyText(DOD_OffGrid_str_Content);
}
//电池优先
void OperMode::on_Batter_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Batterpage);
    Charge_SOC_btn_explain->ModifyText(str2);
    Discharge_SOC_btn_explain->ModifyText(str2);
    ConstantPower_btn_explain->ModifyText(str3);
    DOD_OnGrid_btn_explain->ModifyText(str4);
    DOD_OffGrid_btn_explain->ModifyText(str8);
}
//最优模式
void OperMode::on_Optimal_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Optimalpage);
    Charge_SOC_btn_explain->ModifyText(str5);
    Discharge_SOC_btn_explain->ModifyText(str6);
    ConstantPower_btn_explain->ModifyText(str3);
    DOD_OnGrid_btn_explain->ModifyText(str7);
    DOD_OffGrid_btn_explain->ModifyText(str8);
}
//电池区域划分
void OperMode::on_AreaDivision_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->AreaDivisionpage);
}

void OperMode::on_Mixde_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Mixdepage);
}

void OperMode::on_Manual_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Manualpage);
}

//调整控件大小
void OperMode::resizeEvent(QResizeEvent *event)
{
    int x = this->frameGeometry().width(); //获取ui形成窗口宽度
    int y = this->frameGeometry().height();//获取窗口高度

//    ui->ExplainWidget->setGeometry(0,0,x-160,y-50);
//    ui->Explainpage->setGeometry(0,0,x-160,y-50);

//    ui->Paramrter_Widget->setGeometry(600,0,x-160,y);

    ui->BatPri_Widget->setColumnWidth(0,(x-710)*0.25);//450\650\150
    ui->BatPri_Widget->setColumnWidth(1,(x-710)*0.21);
    ui->BatPri_Widget->setColumnWidth(2,(x-710)*0.22);
    ui->BatPri_Widget->setColumnWidth(3,(x-710)*0.19);
    ui->OptMod_Widget->setColumnWidth(0,(x-710)*0.25);//450\650\150
    ui->OptMod_Widget->setColumnWidth(1,(x-710)*0.21);
    ui->OptMod_Widget->setColumnWidth(2,(x-710)*0.22);
    ui->OptMod_Widget->setColumnWidth(3,(x-710)*0.19);

    ui->Paramrter_Widget->setColumnWidth(0,(x-710)*0.25);//560\650\150
    ui->Paramrter_Widget->setColumnWidth(1,(x-710)*0.21);
    ui->Paramrter_Widget->setColumnWidth(2,(x-710)*0.22);
    ui->Paramrter_Widget->setColumnWidth(3,(x-710)*0.19);

    ui->Mixde_Widget->setColumnWidth(0,(x)*0.25);//560\650\150
    ui->Mixde_Widget->setColumnWidth(1,(x)*0.21);
    ui->Mixde_Widget->setColumnWidth(2,(x)*0.22);
    ui->Mixde_Widget->setColumnWidth(3,(x)*0.19);

}

void OperMode::SetExplain(QTableWidget *myWidget)
{
    Bat_Type_btn_explain = new Specification(this,OptMod_Bat_Type_btn, myWidget, 0, 1, str, Bat_Type_str, Bat_Type_str_Content);
    Bat_Type_btn_explain->add_Specification();
    Bat_Type_btn_explain->Opermode_btn_clicked(BatPri_Bat_Type_btn);
    Bat_Type_btn_explain->Opermode_btn_clicked(Bat_Type_btn);

    Bat_Comm_btn_explain = new Specification(this,OptMod_Bat_Comm_btn, myWidget, 1, 1, str, Bat_Comm_str, Bat_Comm_str_Content);
    Bat_Comm_btn_explain->add_Specification();
    Bat_Comm_btn_explain->Opermode_btn_clicked(BatPri_Bat_Comm_btn);
    Bat_Comm_btn_explain->Opermode_btn_clicked(Bat_Comm_btn);

    EMS_Comm_btn_explain = new Specification(this,OptMod_EMS_Comm_btn, myWidget, 2, 1, str, EMS_Comm_str, EMS_Comm_str_Content);
    EMS_Comm_btn_explain->add_Specification();
    EMS_Comm_btn_explain->Opermode_btn_clicked(BatPri_EMS_Comm_btn);
    EMS_Comm_btn_explain->Opermode_btn_clicked(EMS_Comm_btn);

    Charge_SOC_btn_explain = new Specification(this,OptMod_Charge_SOC_btn, myWidget, 3, 1, str, Charge_SOC_str, Charge_SOC_str_Content);
    Charge_SOC_btn_explain->add_Specification();
    Charge_SOC_btn_explain->Opermode_btn_clicked(BatPri_Charge_SOC_btn);
    Charge_SOC_btn_explain->Opermode_btn_clicked(Charge_SOC_btn);

    Discharge_SOC_btn_explain = new Specification(this,OptMod_Discharge_SOC_btn, myWidget, 4, 1, str, Discharge_SOC_str, Discharge_SOC_str_Content);
    Discharge_SOC_btn_explain->add_Specification();
    Discharge_SOC_btn_explain->Opermode_btn_clicked(BatPri_Discharge_SOC_btn);
    Discharge_SOC_btn_explain->Opermode_btn_clicked(Discharge_SOC_btn);

    Energy_priority_btn_explain = new Specification(this,OptMod_Energy_priority_btn, myWidget, 5, 1, str, Energy_priority_str, Energy_priority_str_Content);
    Energy_priority_btn_explain->add_Specification();
    Energy_priority_btn_explain->Opermode_btn_clicked(BatPri_Energy_priority_btn);
    Energy_priority_btn_explain->Opermode_btn_clicked(Energy_priority_btn);

    Anti_reflux_btn_explain = new Specification(this,OptMod_Anti_reflux_btn, myWidget, 6, 1, str, Anti_reflux_str, Anti_reflux_str_Content);
    Anti_reflux_btn_explain->add_Specification();
    Anti_reflux_btn_explain->Opermode_btn_clicked(BatPri_Anti_reflux_btn);
    Anti_reflux_btn_explain->Opermode_btn_clicked(Anti_reflux_btn);

    ConstantPower_btn_explain = new Specification(this,OptMod_ConstantPower_btn, myWidget, 7, 1, str, ConstantPower_str, ConstantPower_str_Content);
    ConstantPower_btn_explain->add_Specification();
    ConstantPower_btn_explain->Opermode_btn_clicked(BatPri_ConstantPower_btn);
    ConstantPower_btn_explain->Opermode_btn_clicked(ConstantPower_btn);

    Charge_upper_Limit_explain = new Specification(this,OptMod_Charge_upper_Limit, myWidget, 8, 1, str, Charge_upper_Limit_str, Charge_upper_Limit_str_Content);
    Charge_upper_Limit_explain->add_Specification();
    Charge_upper_Limit_explain->Opermode_btn_clicked(BatPri_Charge_upper_Limit);
    Charge_upper_Limit_explain->Opermode_btn_clicked(Charge_upper_Limit);

    Charge_Limit_delta_btn_explain = new Specification(this,OptMod_Charge_Limit_delta_btn, myWidget, 9, 1, str, Charge_Limit_delta_str, Charge_Limit_delta_str_Content);
    Charge_Limit_delta_btn_explain->add_Specification();
    Charge_Limit_delta_btn_explain->Opermode_btn_clicked(BatPri_Charge_Limit_delta_btn);
    Charge_Limit_delta_btn_explain->Opermode_btn_clicked(Charge_Limit_delta_btn);

    Disharge_Lower_Limit_explain = new Specification(this,OptMod_Disharge_Lower_Limit, myWidget, 10, 1, str, Disharge_Lower_Limit_str, Disharge_Lower_Limit_str_Content);
    Disharge_Lower_Limit_explain->add_Specification();
    Disharge_Lower_Limit_explain->Opermode_btn_clicked(BatPri_Disharge_Lower_Limit);
    Disharge_Lower_Limit_explain->Opermode_btn_clicked(Disharge_Lower_Limit);

    Disharge_Limit_delta_btn_explain = new Specification(this,OptMod_Disharge_Limit_delta_btn, myWidget, 11, 1, str, Disharge_Limit_delta_str, Disharge_Limit_delta_str_Content);
    Disharge_Limit_delta_btn_explain->add_Specification();
    Disharge_Limit_delta_btn_explain->Opermode_btn_clicked(BatPri_Disharge_Limit_delta_btn);
    Disharge_Limit_delta_btn_explain->Opermode_btn_clicked(Disharge_Limit_delta_btn);

    Charge_Current_btn_explain = new Specification(this,OptMod_Charge_Current_btn, myWidget, 12, 1, str, Charge_Current_str, Charge_Current_str_Content);
    Charge_Current_btn_explain->add_Specification();
    Charge_Current_btn_explain->Opermode_btn_clicked(BatPri_Charge_Current_btn);
    Charge_Current_btn_explain->Opermode_btn_clicked(Charge_Current_btn);

    Discharge_Current_Limit_btn_explain = new Specification(this,OptMod_Discharge_Current_Limit_btn, myWidget, 13, 1, str, Discharge_Current_Limit_str, Discharge_Current_Limit_str_Content);
    Discharge_Current_Limit_btn_explain->add_Specification();
    Discharge_Current_Limit_btn_explain->Opermode_btn_clicked(BatPri_Discharge_Current_Limit_btn);
    Discharge_Current_Limit_btn_explain->Opermode_btn_clicked(Discharge_Current_Limit_btn);

    DOD_OnGrid_btn_explain = new Specification(this,OptMod_DOD_OnGrid_btn, myWidget, 14, 1, str, DOD_OnGrid_str, DOD_OnGrid_str_Content);
    DOD_OnGrid_btn_explain->add_Specification();
    DOD_OnGrid_btn_explain->Opermode_btn_clicked(BatPri_DOD_OnGrid_btn);
    DOD_OnGrid_btn_explain->Opermode_btn_clicked(DOD_OnGrid_btn);

    DOD_OffGrid_btn_explain = new Specification(this,OptMod_DOD_OffGrid_btn, myWidget, 15, 1, str, DOD_OffGrid_str, DOD_OffGrid_str_Content);
    DOD_OffGrid_btn_explain->add_Specification();
    DOD_OffGrid_btn_explain->Opermode_btn_clicked(BatPri_DOD_OffGrid_btn);
    DOD_OffGrid_btn_explain->Opermode_btn_clicked(DOD_OffGrid_btn);

    Generator_turn_on_SOC_btn_explain = new Specification(this,OptMod_Generator_turn_on_SOC_btn, myWidget, 16, 1, str, Generator_turn_on_SOC_str, Generator_turn_on_SOC_str_Content);
    Generator_turn_on_SOC_btn_explain->add_Specification();
    Generator_turn_on_SOC_btn_explain->Opermode_btn_clicked(BatPri_Generator_turn_on_SOC_btn);
    Generator_turn_on_SOC_btn_explain->Opermode_btn_clicked(Generator_turn_on_SOC_btn);

    Generator_turn_off_SOC_btn_explain = new Specification(this,OptMod_Generator_turn_off_SOC_btn, myWidget, 17, 1, str, Generator_turn_off_SOC_str, Generator_turn_off_SOC_str_Content);
    Generator_turn_off_SOC_btn_explain->add_Specification();
    Generator_turn_off_SOC_btn_explain->Opermode_btn_clicked(BatPri_Generator_turn_off_SOC_btn);
    Generator_turn_off_SOC_btn_explain->Opermode_btn_clicked(Generator_turn_off_SOC_btn);

    Max_Bat_protection_btn_explain = new Specification(this,OptMod_Max_Bat_protection_btn, myWidget, 18, 1, str, Max_Bat_protection_str, Max_Bat_protection_str_Content);
    Max_Bat_protection_btn_explain->add_Specification();
    Max_Bat_protection_btn_explain->Opermode_btn_clicked(BatPri_Max_Bat_protection_btn);
    Max_Bat_protection_btn_explain->Opermode_btn_clicked(Max_Bat_protection_btn);

    DG_ECP_explain = new Specification(this,OptMod_DG_ECP, myWidget, 19, 1, str, DG_ECP_str, DG_ECP_str_Content);
    DG_ECP_explain->add_Specification();
    DG_ECP_explain->Opermode_btn_clicked(BatPri_DG_ECP);
    DG_ECP_explain->Opermode_btn_clicked(DG_ECP);

    DG_FCP_explain = new Specification(this,OptMod_DG_FCP, myWidget, 20, 1, str, DG_FCP_str, DG_FCP_str_Content);
    DG_FCP_explain->add_Specification();
    DG_FCP_explain->Opermode_btn_clicked(BatPri_DG_FCP);
    DG_FCP_explain->Opermode_btn_clicked(DG_FCP);

    Grid_ECP_explain = new Specification(this,OptMod_Grid_ECP, myWidget, 21, 1, str, Grid_ECP_str, Grid_ECP_str_Content);
    Grid_ECP_explain->add_Specification();
    Grid_ECP_explain->Opermode_btn_clicked(BatPri_Grid_ECP);
    Grid_ECP_explain->Opermode_btn_clicked(Grid_ECP);

    Grid_FCP_explain = new Specification(this,OptMod_Grid_FCP, myWidget, 22, 1, str, Grid_FCP_str, Grid_FCP_str_Content);
    Grid_FCP_explain->add_Specification();
    Grid_FCP_explain->Opermode_btn_clicked(BatPri_Grid_FCP);
    Grid_FCP_explain->Opermode_btn_clicked(Grid_FCP);

    Grid_EDP_explain = new Specification(this,OptMod_Grid_EDP, myWidget, 23, 1, str, Grid_EDP_str, Grid_EDP_str_Content);
    Grid_EDP_explain->add_Specification();
    Grid_EDP_explain->Opermode_btn_clicked(BatPri_Grid_EDP);
    Grid_EDP_explain->Opermode_btn_clicked(Grid_EDP);

    Grid_FDP_explain = new Specification(this,OptMod_Grid_FDP, myWidget, 24, 1, str, Grid_FDP_str, Grid_FDP_str_Content);
    Grid_FDP_explain->add_Specification();
    Grid_FDP_explain->Opermode_btn_clicked(BatPri_Grid_FDP);
    Grid_FDP_explain->Opermode_btn_clicked(Grid_FDP);
}

//设置窗口初始大小
void OperMode::setAppSize(int remainH)
{
    //首先获取屏幕尺寸信息
    QDesktopWidget *deskTopWidget = QApplication::desktop();
    QRect deskRect = deskTopWidget->availableGeometry();

    //设置程序尺寸(我的界面需要适应高度)
//    int titleBarH = style()->pixelMetric(QStyle::PM_TitleBarHeight); 	// 获取标题栏高度(WIndow自带)
    int titleBarH = 0;
    int appH = deskRect.height() - remainH - titleBarH;
    int appW = appH*this->width() / this->height();	//根据软件的宽高比例
    this->setFixedSize(appW, appH);  		//注意：此处设置的高度是不包含标题栏
    setGeometry((deskRect.width() - appW) / 2, remainH / 2 + titleBarH, appW, appH);	//设置程序窗体在桌面的显示位置
}








