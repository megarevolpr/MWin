
#include "mywidget.h"
#include "ui_mywidget.h"
#include "MainThread.h"
#include "UI_Menu/Menu.h"


#include <QMenu>

//#include <QTime>
//#include <QDate>
//#include <QDateTime>
//#include <QTimer>
//#include <qlistview.h>

//#include <QDebug>
//#include <QMessageBox>
//#include <QButtonGroup>


MyWidget::MyWidget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MyWidget)
{
    ui->setupUi(this);
//    setFixedSize(800,562);//固定窗口大小
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Host_page); //执行程序后，自动进入到主页

    MemoryAllocation(); //初始化内存空间
    UIPageInit();       //初始化界面

}

MyWidget::~MyWidget()
{



    delete ui;
}

/********************************************************
 * 初始化内存空间
*********************************************************/
void MyWidget::MemoryAllocation()
{
    m_menu = new Menu(this);
    /************************实时数据******************************/
    //变流器
    MPS_vol_AB_explain      = new QPushButton;
    MPS_vol_BC_explain      = new QPushButton;
    MPS_vol_CA_explain      = new QPushButton;
    MPS_cur_A_explain       = new QPushButton;
    MPS_cur_B_explain       = new QPushButton;
    MPS_cur_C_explain       = new QPushButton;
    MPS_IGBT_T_explain      = new QPushButton;
    MPS_Env_T_explain       = new QPushButton;
    MPS_Leakage_cur_explain = new QPushButton;
    PV_vol_explain          = new QPushButton;
    PV_cur_explain          = new QPushButton;
    PV_power_explain        = new QPushButton;
    Batter_vol_explain      = new QPushButton;
    Batter_cur_explain      = new QPushButton;
    Batter_power_explain    = new QPushButton;
    Bus_vol_explain         = new QPushButton;
    Bus_cur_explain         = new QPushButton;
    //光伏
    PV_vol_H_explain            = new QPushButton;
    PV_cur_H_explain            = new QPushButton;
    PV_power_H_explain          = new QPushButton;
    PV_vol_L_explain            = new QPushButton;
    PV_cur_L_explain            = new QPushButton;
    PV_power_L_explain          = new QPushButton;
    PositiveInuslation_explain  = new QPushButton;
    Bus_H_vol_add_explain       = new QPushButton;
    Bus_H_vol_reduce_explain    = new QPushButton;
    Bus_L_vol_add_explain       = new QPushButton;
    Bus_L_vol_reduce_explain    = new QPushButton;
    PV_IGBT_T_explain           = new QPushButton;
    NegativeInuslation_explain  = new QPushButton;
    Leakage_cur_explain         = new QPushButton;
    //电网
    Grid_vol_AB_explain         = new QPushButton;
    Grid_vol_BC_explain         = new QPushButton;
    Grid_vol_CA_explain         = new QPushButton;
    Grid_cur_A_explain          = new QPushButton;
    Grid_cur_B_explain          = new QPushButton;
    Grid_cur_C_explain          = new QPushButton;
    Grid_active_power_explain   = new QPushButton;
    Grid_reactive_power_explain = new QPushButton;
    Grid_apparent_power_explain = new QPushButton;
    Grid_power_factor_explain   = new QPushButton;
    Grid_Frequency_explain      = new QPushButton;
    //负载
    Load_vol_AB_explain         = new QPushButton;
    Load_vol_BC_explain         = new QPushButton;
    Load_vol_CA_explain         = new QPushButton;
    Load_cur_A_explain          = new QPushButton;
    Load_cur_B_explain          = new QPushButton;
    Load_cur_C_explain          = new QPushButton;
    Load_active_power_explain   = new QPushButton;
    Load_reactive_power_explain = new QPushButton;
    Load_apparent_power_explain = new QPushButton;
    Load_power_factor_explain   = new QPushButton;
    Load_Frequency_explain      = new QPushButton;

    /*******************MPS状态***************************/

    DC_input_Bre_explain= new QPushButton;
    DC_Con_explain      = new QPushButton;
    M_Bypass_Bre_explain= new QPushButton;
    Output_Bre_explain  = new QPushButton;
    Output_Con_explain  = new QPushButton;
    Grid_Bre_explain    = new QPushButton;
    DO1_explain         = new QPushButton;
    DO2_explain         = new QPushButton;
    DO3_explain         = new QPushButton;

    DCAC_Conver_avail_explain= new QPushButton;
    DC_Soft_Start_explain    = new QPushButton;
    Converter_Status_explain = new QPushButton;
    Reactive_P_Reg_explain   = new QPushButton;
    Sleep_mode_explain       = new QPushButton;
    LVRT_explain             = new QPushButton;
    DI1_explain              = new QPushButton;
    DI2_explain              = new QPushButton;
    DI3_explain              = new QPushButton;
    DI4_explain              = new QPushButton;
    DI5_explain              = new QPushButton;
    DI6_explain              = new QPushButton;

    Breaker1_Sta_Boost_explain  = new QPushButton;
    Breaker2_Sta_Boost_explain  = new QPushButton;
    Contator_Sta_Boost_explain  = new QPushButton;
    Breaker1_Sta_Buck_explain   = new QPushButton;
    Breaker2_Sta_Buck_explain   = new QPushButton;
    Contator_Sta_Buck_explain   = new QPushButton;
    Run_mode_explain            = new QPushButton;
    DCDC_Converter_ava_explain  = new QPushButton;
    Soft_Start_Sta_Boost_explain= new QPushButton;
    Soft_Start_Sta_Buck_explain = new QPushButton;
    Converter_Status_V_explain  = new QPushButton;
    ModeLock_explain            = new QPushButton;

    /**********************电池数据***************************/
    pButton_BatteryData  = new QButtonGroup();
    pButton_BatteryData->addButton(ui->pushButton,0);
    pButton_BatteryData->addButton(ui->pushButton_2,1);
    pButton_BatteryData->addButton(ui->pushButton_3,2);
    pButton_BatteryData->addButton(ui->pushButton_4,3);
    pButton_BatteryData->addButton(ui->pushButton_5,4);
    pButton_BatteryData->addButton(ui->pushButton_6,5);
    pButton_BatteryData->addButton(ui->pushButton_7,6);
    pButton_BatteryData->addButton(ui->pushButton_8,7);
    pButton_BatteryData->addButton(ui->pushButton_9,8);
    pButton_BatteryData->addButton(ui->pushButton_10,9);
    pButton_BatteryData->addButton(ui->pushButton_11,10);
    pButton_BatteryData->addButton(ui->pushButton_12,11);
    pButton_BatteryData->addButton(ui->pushButton_13,12);
    pButton_BatteryData->addButton(ui->pushButton_14,13);
    pButton_BatteryData->addButton(ui->pushButton_15,14);
    pButton_BatteryData->addButton(ui->pushButton_16,15);
    pButton_BatteryData->addButton(ui->pushButton_17,16);
    pButton_BatteryData->addButton(ui->pushButton_18,17);
    pButton_BatteryData->addButton(ui->pushButton_19,18);
    pButton_BatteryData->addButton(ui->pushButton_20,19);
    pButton_BatteryData->addButton(ui->pushButton_21,20);

    /***************************DC/AC参数**********************************/

    Grid_connected_mode_explain = new QPushButton;      //PCS并离网方式说明
    Constant_power_explain  = new QPushButton;           //恒功率说明
    Charging_and_discharging_explain = new QPushButton; //充放电说明status
    Work_mode_explain = new QPushButton;                //工作模式说明
    Output_power_factor_explain = new QPushButton;      //输出功率因素说明
    Output_reactive_power_explain = new QPushButton;    //输出无功功率说明
    Constant_current_explain = new QPushButton;         //恒流说明
    Constant_voltage_explain = new QPushButton;         //恒压说明
    Control_mode_explain = new QPushButton;             //控制模式说明
    Machine_number_explain = new QPushButton;           //设备号说明
    Parallel_explain = new QPushButton;                 //并机说明
    Unbalance_power_enable_explain = new QPushButton;   //功率不平衡使能说明

    /***************************DC/AC参数**********************************/
    Work_parttern_explain = new QPushButton;                     //DCDC工作模式说明
    Boost_or_Buck_explain = new QPushButton;                     //升/降压说明
    Bat_Charging_or_discharging_Model_explain = new QPushButton; //电池充放电模式说明
    DCDC_Capacity_explain = new QPushButton;                     //DCDC容量说明
    Battery_position_explain = new QPushButton;                  //电池位置说明
    Voltage_level_explain = new QPushButton;                     //电压等级说明
    Current_value_explain = new QPushButton;                     //电流值说明

    /*******************************自动运行*******************************/

    Check1_explain = new QPushButton;Check2_explain= new QPushButton;Check3_explain= new QPushButton;
    Check4_explain= new QPushButton;Check5_explain= new QPushButton;Check6_explain= new QPushButton;
    Check7_explain= new QPushButton;Check8_explain= new QPushButton;Check9_explain= new QPushButton;
    Check10_explain= new QPushButton;Check11_explain= new QPushButton;Check12_explain= new QPushButton;
    Check13_explain= new QPushButton;Check14_explain= new QPushButton;Check15_explain= new QPushButton;
    Check16_explain= new QPushButton;Check17_explain= new QPushButton;Check18_explain= new QPushButton;
    Check19_explain= new QPushButton;Check20_explain= new QPushButton;

    Start_T1_explain = new QPushButton;Start_T2_explain= new QPushButton;Start_T3_explain= new QPushButton;
    Start_T4_explain= new QPushButton;Start_T5_explain= new QPushButton;Start_T6_explain= new QPushButton;
    Start_T7_explain= new QPushButton;Start_T8_explain= new QPushButton;Start_T9_explain= new QPushButton;
    Start_T10_explain= new QPushButton;Start_T11_explain= new QPushButton;Start_T12_explain= new QPushButton;
    Start_T13_explain= new QPushButton;Start_T14_explain= new QPushButton;Start_T15_explain= new QPushButton;
    Start_T16_explain= new QPushButton;Start_T17_explain= new QPushButton;Start_T18_explain= new QPushButton;
    Start_T19_explain= new QPushButton;Start_T20_explain= new QPushButton;

    End_T1_explain = new QPushButton;End_T2_explain= new QPushButton;End_T3_explain= new QPushButton;
    End_T4_explain= new QPushButton;End_T5_explain= new QPushButton;End_T6_explain= new QPushButton;
    End_T7_explain= new QPushButton;End_T8_explain= new QPushButton;End_T9_explain= new QPushButton;
    End_T10_explain= new QPushButton;End_T11_explain= new QPushButton;End_T12_explain= new QPushButton;
    End_T13_explain= new QPushButton;End_T14_explain= new QPushButton;End_T15_explain= new QPushButton;
    End_T16_explain= new QPushButton;End_T17_explain= new QPushButton;End_T18_explain= new QPushButton;
    End_T19_explain= new QPushButton;End_T20_explain= new QPushButton;

    State1_explain = new QPushButton;State2_explain= new QPushButton;State3_explain= new QPushButton;
    State4_explain= new QPushButton;State5_explain= new QPushButton;State6_explain= new QPushButton;
    State7_explain= new QPushButton;State8_explain= new QPushButton;State9_explain= new QPushButton;
    State10_explain= new QPushButton;State11_explain= new QPushButton;State12_explain= new QPushButton;
    State13_explain= new QPushButton;State14_explain= new QPushButton;State15_explain= new QPushButton;
    State16_explain= new QPushButton;State17_explain= new QPushButton;State18_explain= new QPushButton;
    State19_explain= new QPushButton;State20_explain= new QPushButton;

    Power1_explain = new QPushButton;Power2_explain= new QPushButton;Power3_explain= new QPushButton;
    Power4_explain= new QPushButton;Power5_explain= new QPushButton;Power6_explain= new QPushButton;
    Power7_explain= new QPushButton;Power8_explain= new QPushButton;Power9_explain= new QPushButton;
    Power10_explain= new QPushButton;Power11_explain= new QPushButton;Power12_explain= new QPushButton;
    Power13_explain= new QPushButton;Power14_explain= new QPushButton;Power15_explain= new QPushButton;
    Power16_explain= new QPushButton;Power17_explain= new QPushButton;Power18_explain= new QPushButton;
    Power19_explain= new QPushButton;Power20_explain= new QPushButton;

    /**********************系统消息*************************/

    MonitoringVersion_explain       = new QPushButton;
    DCAC_SysProtocol_Version_explain= new QPushButton;
    DCAC_ConverterVersion_explain   = new QPushButton;
    DCAC_CPLD_Version_explain       = new QPushButton;
    DCDC_SysProtocol_Version_explain= new QPushButton;
    DCDC_ConverterVersion_explain   = new QPushButton;
    DCDC_CPLD_Version_explain       = new QPushButton;
    SN_explain                      = new QPushButton;

    /***************************高级设置**********************************/
    AdvancedSetup_btn = new QPushButton;                //高级设置


    /***********************数据报表************************/
    PV_power_generation_Day_explain = new QPushButton;
    PV_power_generation_Month_explain = new QPushButton;
    PV_power_generation_Year_explain = new QPushButton;
    PV_power_generation_Total_explain = new QPushButton;
    Load_Discharge_Day_explain = new QPushButton;
    Load_Discharge_Month_explain = new QPushButton;
    Load_Discharge_Year_explain = new QPushButton;
    Load_Discharge_Total_explain = new QPushButton;
    Battery_Charge_Day_explain = new QPushButton;
    Battery_Charge_Month_explain = new QPushButton;
    Battery_Charge_Year_explain = new QPushButton;
    Battery_Charge_Total_explain = new QPushButton;
    Battery_Discharge_Day_explain = new QPushButton;
    Battery_Discharge_Month_explain = new QPushButton;
    Battery_Discharge_Year_explain = new QPushButton;
    Battery_Discharge_Total_explain = new QPushButton;
    Grid_Charge_Day_explain = new QPushButton;
    Grid_Charge_Month_explain = new QPushButton;
    Grid_Charge_Year_explain = new QPushButton;
    Grid_Charge_Total_explain = new QPushButton;
    Grid_Discharge_Day_explain = new QPushButton;
    Grid_Discharge_Month_explain = new QPushButton;
    Grid_Discharge_Year_explain = new QPushButton;
    Grid_Discharge_Total_explain = new QPushButton;

    /***************************历史记录**********************************/
    Grade_explain       = new QPushButton;
    Grade2_explain      = new QPushButton;
    Grade3_explain      = new QPushButton;
    Grade4_explain      = new QPushButton;
    Grade5_explain      = new QPushButton;
    Grade6_explain      = new QPushButton;
    Grade7_explain      = new QPushButton;
    Grade8_explain      = new QPushButton;
    StartTime_explain   = new QPushButton;
    StartTime2_explain  = new QPushButton;
    StartTime3_explain  = new QPushButton;
    StartTime4_explain  = new QPushButton;
    StartTime5_explain  = new QPushButton;
    StartTime6_explain  = new QPushButton;
    StartTime7_explain  = new QPushButton;
    StartTime8_explain  = new QPushButton;
    EndTime_explain     = new QPushButton;
    EndTime2_explain    = new QPushButton;
    EndTime3_explain    = new QPushButton;
    EndTime4_explain    = new QPushButton;
    EndTime5_explain    = new QPushButton;
    EndTime6_explain    = new QPushButton;
    EndTime7_explain    = new QPushButton;
    EndTime8_explain    = new QPushButton;
    Describe_explain    = new QPushButton;
    Describe2_explain   = new QPushButton;
    Describe3_explain   = new QPushButton;
    Describe4_explain   = new QPushButton;
    Describe5_explain   = new QPushButton;
    Describe6_explain   = new QPushButton;
    Describe7_explain   = new QPushButton;
    Describe8_explain   = new QPushButton;

    /***************************操作日志**********************************/
    ModificationTime_explain    = new QPushButton;
    ModificationTime2_explain   = new QPushButton;
    ModificationTime3_explain   = new QPushButton;
    ModificationTime4_explain   = new QPushButton;
    ModificationTime5_explain   = new QPushButton;
    ModificationTime6_explain   = new QPushButton;
    ModificationTime7_explain   = new QPushButton;
    ModificationTime8_explain   = new QPushButton;
    ModificationTime9_explain   = new QPushButton;
    ModificationTime10_explain  = new QPushButton;
    ModificationTime11_explain  = new QPushButton;
    ModificationTime12_explain  = new QPushButton;
    EventRecord_explain         = new QPushButton;
    EventRecord2_explain        = new QPushButton;
    EventRecord3_explain        = new QPushButton;
    EventRecord4_explain        = new QPushButton;
    EventRecord5_explain        = new QPushButton;
    EventRecord6_explain        = new QPushButton;
    EventRecord7_explain        = new QPushButton;
    EventRecord8_explain        = new QPushButton;
    EventRecord9_explain        = new QPushButton;
    EventRecord10_explain       = new QPushButton;
    EventRecord11_explain       = new QPushButton;
    EventRecord12_explain       = new QPushButton;

}
/********************************************************
 * 初始化界面
*********************************************************/
void MyWidget::UIPageInit()
{
    FirstPage();  //主页点击
    RunStatePage();//实时数据
    SystemSettingPage();//系统设置
    LCDSetting();   //实时刷新时间
    RecordPage();//记录页面
    LinkRelationship();//函数关联
}
//触摸点击
void MyWidget::FirstPage()
{
    ui->Alarm_Button->setDefault(false);
    ui->Alarm_Button->setFlat(true);
    ui->Alarm_Button->setFocusPolicy(Qt::NoFocus);

    ui->Bypass_Running_btn->setFlat(true);
    ui->Bypass_Running_btn->setFocusPolicy(Qt::NoFocus);
    ui->PV_btn->setFlat(true);
    ui->PV_btn->setFocusPolicy(Qt::NoFocus);
    ui->Bypass_Grid_btn->setFlat(true);
    ui->Bypass_Grid_btn->setFocusPolicy(Qt::NoFocus);
    ui->Bypass_Load_Btn->setFlat(true);
    ui->Bypass_Load_Btn->setFocusPolicy(Qt::NoFocus);
    ui->Bypass_Batt_btn->setFlat(true);
    ui->Bypass_Batt_btn->setFocusPolicy(Qt::NoFocus);
}
/***************************************************************
 *高级设置按钮点击功能
 ***************************************************************/
void MyWidget::AdvancedSetup_btn_clicked()
{
    ui->UI_stackedWidget->setCurrentWidget(ui->BasicSet_page);
    if(ASKey)//保证只执行一次这句话，否则多次进出高级设置，会多次绘制页面，点击一次button，出现个消息对话框
    {
        ASKey = false;
        SystemParam_tbnt_released();
    }
}
//函数关联
void MyWidget::LinkRelationship()
{
    connect(timer, SIGNAL(timeout()), this, SLOT(onTimerOut()));

    connect(m_menu, SIGNAL(Sent(int)), this, SLOT(My_menuAction(int)));

    connect(AdvancedSetup_btn,SIGNAL(clicked(bool)), this, SLOT(AdvancedSetup_btn_clicked()));//高级设置

    connect(ui->Bypass_Batt_btn, SIGNAL(clicked()), this, SLOT(on_Batt_btn_released()));    //主页电池按钮跳转电池信息
    connect(ui->Bypass_Running_btn, SIGNAL(clicked()), this, SLOT(on_Running_btn_clicked()));   //主页变流器按钮跳转变流器实时数据
    connect(ui->Bypass_Grid_btn, SIGNAL(clicked()), this, SLOT(on_Grid_clicked()));    //主页电网按钮跳转电网实时数据
    connect(ui->Bypass_Load_Btn, SIGNAL(clicked()), this, SLOT(on_Load_clicked()));    //主页负载按钮跳转负载实时数据
    connect(ui->PV_btn, SIGNAL(clicked()), this, SLOT(on_PV_clicked()));    //主页PV按钮跳转PV实时数据
    connect(ui->Alarm_Button, SIGNAL(clicked()), this,SLOT(on_Alarm_btn_clicker()));//跳转当前告警记录

    connect(pButton_BatteryData, SIGNAL(buttonClicked(int)), this,SLOT(BatteryData_clicked(int)));//电池数据
}
//实时数据
void MyWidget::RunStatePage()
{
    MPS_Data_Tab();//MPS数据初始化
    ModuleState_Tab();//MPS状态表初始化
    RTAlarm();//告警信息初始化
}

//系统设置
void MyWidget::SystemSettingPage()
{
    UserParam_tab();/*系统-设置表*/
    DCDCParam_tab();/*系统-DCDC设置表*/
//    BatterySet_tab();/*系统-电池设置表*/

    RunTimeSet_tab();/*系统-自动运行时间设置表*/

//    History_tab();/*记录-历史记录、操作日志设置表*/

    Information_tbnt_released();/*系统-系统消息*/
}
/***************************************************************
 * LCD标签初始化和定时器设置
 ***************************************************************/
void MyWidget::LCDSetting()
{
    ui->TimeSeting_btn->setFlat(true);//设置时间显示控件无边框
    ui->TimeSeting_btn->setFocusPolicy(Qt::NoFocus); //设置无虚线
    timer = new QTimer();
    timer->setInterval(1000);//一秒刷新一次时间
    timer->start();


    Update_RTData_timer = new QTimer();
    Update_RTData_timer->setInterval(500);//设置数据实时显示刷新时间
    Update_RTData_timer->start();

#if 0
    current_time = QTime::currentTime();   //获取当前时间
    int hour = current_time->hour();     //当前的小时
    int minute = current_time->minute(); //当前的分
    int second = current_time->second(); //当前的秒
    int msec = current_time->msec();     //当前的毫秒
#endif
}

//记录页面初始化
void MyWidget::RecordPage()
{
    Data_Report();//数据报表
    History();  //历史记录
    OperationLog();//操作日志
}
//MPS数据
void MyWidget::MPS_Data_Tab()
{
    QStringList Converter_Tablist1;
    Converter_Tablist1  << tr("Voltage(AB)") << tr("Voltage(BC)") << tr("Voltage(CA)")
                        << tr("Current(A)") << tr("Current(B)")<< tr("Current(C)")
                        << tr("IGBT temp.") << tr("Env. temp.") << tr("Leakage current");
    QStringList Converter_Tablist2;
    Converter_Tablist2  << tr("PV voltage") << tr("PV current") << tr("PV power")
                        << tr("Battery voltage") << tr("Battery current")<< tr("Battery power")
                        << tr("Bus voltage") << tr("Bus current");

    ui->RT_Machine_tableWidget->setColumnCount(4);
    ui->RT_Machine_tableWidget->setRowCount(Converter_Tablist1.size());
    ui->RT_Machine_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_Machine_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_Machine_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_Machine_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_Machine_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_Machine_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_Machine_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList Converter_TabList;
    Converter_TabList << tr("Inverter") << tr("Value") << tr("DC") << tr("Value");
    ui->RT_Machine_tableWidget->setHorizontalHeaderLabels(Converter_TabList);
    ui->RT_Machine_tableWidget->setColumnWidth(0,200);
    ui->RT_Machine_tableWidget->setColumnWidth(1,200);
    ui->RT_Machine_tableWidget->setColumnWidth(2,200);
    ui->RT_Machine_tableWidget->horizontalHeader()->setStretchLastSection(3);
    ui->RT_Machine_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i = 0; i < Converter_Tablist1.size(); i++)
    {
        ui->RT_Machine_tableWidget->setItem(i, 0, new QTableWidgetItem(Converter_Tablist1.at(i)));
        ui->RT_Machine_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < Converter_Tablist2.size(); i++)
    {
        ui->RT_Machine_tableWidget->setItem(i, 2, new QTableWidgetItem(Converter_Tablist2.at(i)));
        ui->RT_Machine_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
    }
    /***************************************************************************************************/

    QStringList PV_Tablist1;
    PV_Tablist1  << tr("Voltage_H") << tr("Current_H") << tr("Power_H")
                        << tr("CVoltage_L") << tr("Current_L")<< tr("Power_L")<< tr("PositiveInuslation");
    QStringList PV_Tablist2;
    PV_Tablist2  << tr("Bus_H_Vol(+)") << tr("Bus_H_Vol(-)") << tr("Bus_L_Vol(+)")<< tr("Bus_L_Vol(-)")
                 << tr("IGBT Temp.")<< tr("NegativeInuslation")<< tr("Leakage current");
    ui->RT_DCDC_tableWidget->setColumnCount(4);
    ui->RT_DCDC_tableWidget->setRowCount(PV_Tablist1.size());
    ui->RT_DCDC_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_DCDC_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_DCDC_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_DCDC_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_DCDC_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_DCDC_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_DCDC_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList PV_TabList;
    PV_TabList << tr("Name") << tr("Value") << tr("Name") << tr("Value");
    ui->RT_DCDC_tableWidget->setHorizontalHeaderLabels(PV_TabList);
    ui->RT_DCDC_tableWidget->setColumnWidth(0,200);
    ui->RT_DCDC_tableWidget->setColumnWidth(1,200);
    ui->RT_DCDC_tableWidget->setColumnWidth(2,200);
    ui->RT_DCDC_tableWidget->horizontalHeader()->setStretchLastSection(3);
    ui->RT_DCDC_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i = 0; i < PV_Tablist1.size(); i++)
    {
        ui->RT_DCDC_tableWidget->setItem(i, 0, new QTableWidgetItem(PV_Tablist1.at(i)));
        ui->RT_DCDC_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < PV_Tablist2.size(); i++)
    {
        ui->RT_DCDC_tableWidget->setItem(i, 2, new QTableWidgetItem(PV_Tablist2.at(i)));
        ui->RT_DCDC_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
    }
    /***************************************************************************************************/
    QStringList RT_Grid_Tablist1;
    RT_Grid_Tablist1  << tr("Voltage(AB)") << tr("Voltage(BC)") << tr("Voltage(CA)")
                        << tr("Current(A)") << tr("Current(B)")<< tr("Current(C)");
    QStringList RT_Grid_Tablist2;
    RT_Grid_Tablist2  << tr("Active power") << tr("Reactive power") << tr("Apparent power")<< tr("Power factor")
                        << tr("Frequency");
    ui->RT_Grid_tableWidget->setColumnCount(4);
    ui->RT_Grid_tableWidget->setRowCount(RT_Grid_Tablist1.size());
    ui->RT_Grid_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_Grid_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_Grid_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_Grid_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_Grid_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_Grid_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_Grid_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList Grid_TabList;
    Grid_TabList << tr("Name") << tr("Value") << tr("Name") << tr("Value");
    ui->RT_Grid_tableWidget->setHorizontalHeaderLabels(Grid_TabList);
    ui->RT_Grid_tableWidget->setColumnWidth(0,200);
    ui->RT_Grid_tableWidget->setColumnWidth(1,200);
    ui->RT_Grid_tableWidget->setColumnWidth(2,200);
    ui->RT_Grid_tableWidget->horizontalHeader()->setStretchLastSection(3);
    ui->RT_Grid_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i = 0; i < RT_Grid_Tablist1.size(); i++)
    {
        ui->RT_Grid_tableWidget->setItem(i, 0, new QTableWidgetItem(RT_Grid_Tablist1.at(i)));
        ui->RT_Grid_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < RT_Grid_Tablist2.size(); i++)
    {
        ui->RT_Grid_tableWidget->setItem(i, 2, new QTableWidgetItem(RT_Grid_Tablist2.at(i)));
        ui->RT_Grid_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
    }
    /***************************************************************************************************/

    QStringList Load_Tablist1;
    Load_Tablist1  << tr("Voltage(AB)") << tr("Voltage(BC)") << tr("Voltage(CA)")
                   << tr("Current(A)") << tr("Current(B)")<< tr("Current(C)");
    QStringList Load_Tablist2;
    Load_Tablist2  << tr("Active power") << tr("Reactive power") << tr("Apparent power")<< tr("Power factor")
                   << tr("Frequency");
    ui->RT_Load_tableWidget->setColumnCount(4);
    ui->RT_Load_tableWidget->setRowCount(Load_Tablist1.size());
    ui->RT_Load_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_Load_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_Load_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_Load_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_Load_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_Load_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_Load_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList Load_Tablist;
    Load_Tablist << tr("Name") << tr("Value") << tr("Name") << tr("Value");
    ui->RT_Load_tableWidget->setHorizontalHeaderLabels(Load_Tablist);
    ui->RT_Load_tableWidget->setColumnWidth(0,200);
    ui->RT_Load_tableWidget->setColumnWidth(1,200);
    ui->RT_Load_tableWidget->setColumnWidth(2,200);
    ui->RT_Load_tableWidget->horizontalHeader()->setStretchLastSection(3);
    ui->RT_Load_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i = 0; i < Load_Tablist1.size(); i++)
    {
        ui->RT_Load_tableWidget->setItem(i, 0, new QTableWidgetItem(Load_Tablist1.at(i)));
        ui->RT_Load_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < Load_Tablist2.size(); i++)
    {
        ui->RT_Load_tableWidget->setItem(i, 2, new QTableWidgetItem(Load_Tablist2.at(i)));
        ui->RT_Load_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
    }
    MPS_Data(ui->RT_Machine_tableWidget);
    PV_Data(ui->RT_DCDC_tableWidget);
    Grid_Data(ui->RT_Grid_tableWidget);
    Load_Data(ui->RT_Load_tableWidget);
}

//MPS状态表初始化
void MyWidget::ModuleState_Tab()
{
    QStringList State_Tablist1;
    State_Tablist1  << tr("DC input breaker") << tr("DC contactor") << tr("Maintenance Bypass breaker")
                   << tr("COutput breaker") << tr("Output contactor")<< tr("Grid breaker")
                   << tr("DO1")<< tr("DO2")<< tr("DO3");
    QStringList State_Tablist2;
    State_Tablist2  << tr("DCAC Converter available") << tr("DC Soft start") << tr("Converter status")<< tr("Reactive power Regulation")
                   << tr("Sleep mode")<< tr("LVRT")<< tr("DI1")<< tr("DI2")<< tr("DI3")<< tr("DI4")<< tr("DI5")<< tr("DI6");
    QStringList State_Tablist3;
    State_Tablist3  << tr("Breaker1 status boost") << tr("Breaker2 status boost") << tr("Contactor status boost")<< tr("Breaker1 status buck")
                   << tr("Breaker2 status buck")<< tr("Contactor status buck")<< tr("Run mode")<< tr("DCDC Converter available")<< tr("Soft start status boost")
                      << tr("Soft start status buck")<< tr("Converter status")<< tr("ModeLock");

    ui->State_tableWidget->setColumnCount(6);
    ui->State_tableWidget->setRowCount(State_Tablist3.size());
    ui->State_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->State_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->State_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->State_tableWidget->setShowGrid(true);//设置显示格子
    ui->State_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->State_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->State_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList State_Tablist;
    State_Tablist << tr("Name") << tr("Value") << tr("Name") << tr("Value")<< tr("Name") << tr("Value");
    ui->State_tableWidget->setHorizontalHeaderLabels(State_Tablist);
    ui->State_tableWidget->horizontalHeader()->setVisible(true);    //设置竖直标题可见
    ui->State_tableWidget->setColumnWidth(0,220);
    ui->State_tableWidget->setColumnWidth(1,90);
    ui->State_tableWidget->setColumnWidth(2,220);
    ui->State_tableWidget->setColumnWidth(3,100);
    ui->State_tableWidget->setColumnWidth(4,220);
    ui->State_tableWidget->setColumnWidth(5,90);

    for(int i = 0; i < State_Tablist1.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 0, new QTableWidgetItem(State_Tablist1.at(i)));
        ui->State_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < State_Tablist2.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 2, new QTableWidgetItem(State_Tablist2.at(i)));
        ui->State_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
    }
    for(int i = 0; i < State_Tablist3.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 4, new QTableWidgetItem(State_Tablist3.at(i)));
        ui->State_tableWidget->item(i, 4)->setTextAlignment(Qt::AlignCenter);
    }
    MPSState(ui->State_tableWidget); //MPS状态说明
}
//DCDC参数设置
void MyWidget::DCDCParam_tab()
{
    ui->DCDC_tableWidget->setColumnCount(6);
    ui->DCDC_tableWidget->setRowCount(4);
    ui->DCDC_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->DCDC_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->DCDC_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->DCDC_tableWidget->setShowGrid(true);//设置显示格子
    ui->DCDC_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->DCDC_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->DCDC_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改

    QStringList List5;
    List5 << tr("Name") << tr("Value") << tr("Unit") << tr("Name") << tr("Value")<< tr("Unit");
    ui->DCDC_tableWidget->setHorizontalHeaderLabels(List5);
    ui->DCDC_tableWidget->setColumnWidth(0,300);
    ui->DCDC_tableWidget->setColumnWidth(1,120);
    ui->DCDC_tableWidget->setColumnWidth(2,100);
    ui->DCDC_tableWidget->setColumnWidth(3,200);
    ui->DCDC_tableWidget->setColumnWidth(4,120);
    ui->DCDC_tableWidget->setColumnWidth(5,100);
    QStringList Display_Par1;
        Display_Par1 << tr("Work parttern")<< tr("Boost or Buck") << tr("Bat Charging or discharging Model") << tr("DCDC Capacity");
    QStringList Display_Par2;
    Display_Par2  << tr("Battery position")<<  tr("Voltage level") << tr("Current value");
    QStringList Display_Par13;
    Display_Par13 << tr("-") << tr("-") << tr("-")<< tr("kW");
    QStringList Display_Par14;
    Display_Par14  << tr("-") << tr("V") << tr("A");
    for(int j = 0; j < 4; j++)
    {
        if(j == 0)
        {
            for(int i = 0; i < Display_Par1.size(); i++)
            {
                ui->DCDC_tableWidget->setItem(i, 0, new QTableWidgetItem(QString(Display_Par1.at(i))));
                ui->DCDC_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
            }
        }
        if(j == 1)
        {
            for(int i = 0; i < Display_Par13.size(); i++)
            {
                ui->DCDC_tableWidget->setItem(i, 2, new QTableWidgetItem(QString(Display_Par13.at(i))));
                ui->DCDC_tableWidget->item(i, 2)->setTextAlignment(Qt::AlignCenter);
            }
        }
        if(j == 2)
        {
            for(int i = 0; i < Display_Par2.size(); i++)
            {
                ui->DCDC_tableWidget->setItem(i, 3, new QTableWidgetItem(QString(Display_Par2.at(i))));
                ui->DCDC_tableWidget->item(i, 3)->setTextAlignment(Qt::AlignCenter);
            }
        }
        if(j == 3)
        {
            for(int i = 0; i < Display_Par14.size(); i++)
            {
                ui->DCDC_tableWidget->setItem(i, 5, new QTableWidgetItem(QString(Display_Par14.at(i))));
                ui->DCDC_tableWidget->item(i, 5)->setTextAlignment(Qt::AlignCenter);
            }
        }
    }
    DCDC_Paramter_tab(ui->DCDC_tableWidget);
}

//自动运行
void MyWidget::RunTimeSet_tab()
{
    QStringList time_str;
    time_str<< tr("Check") << tr("StartTime") << tr("EndTime") << tr("Features") << tr("Power");
    ui->Time_tableWidget->setColumnCount(time_str.size());
    ui->Time_tableWidget->setRowCount(20);
    ui->Time_tableWidget->setHorizontalHeaderLabels(time_str);
    ui->Time_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Time_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->Time_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Time_tableWidget->setShowGrid(true);//设置显示格子
    ui->Time_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Time_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改
    ui->Time_tableWidget->setColumnWidth(0,50);
    ui->Time_tableWidget->setColumnWidth(1,180);
    ui->Time_tableWidget->setColumnWidth(2,180);
    ui->Time_tableWidget->setColumnWidth(3,180);
    ui->Time_tableWidget->horizontalHeader()->setStretchLastSection(4);

//    QStringList choice;
//    choice << tr("System for self-use") << tr("Battery priority")  << tr("Peak shaving") << tr("Output PV power") << tr("Generator Trun on") << tr("Generator Trun off");
    AutoOperation(ui->Time_tableWidget);
}

//系统信息槽
void MyWidget::Information_tbnt_released()
{
    ui->EquipmentInfor_tableWidget->setColumnCount(2);
    ui->EquipmentInfor_tableWidget->setRowCount(9);
    ui->EquipmentInfor_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->EquipmentInfor_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->EquipmentInfor_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->EquipmentInfor_tableWidget->setShowGrid(true);//设置显示格子
    ui->EquipmentInfor_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->EquipmentInfor_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->EquipmentInfor_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    //将设备信息显示到LCD上
    QStringList List4;
    List4 << tr("Name") << tr("Information") ;
    ui->EquipmentInfor_tableWidget->setHorizontalHeaderLabels(List4);
    ui->EquipmentInfor_tableWidget->setColumnWidth(0,230);
    ui->EquipmentInfor_tableWidget->horizontalHeader()->setStretchLastSection(1);//自动占用剩余空间

    SystemMessages(ui->EquipmentInfor_tableWidget);//系统信息 绘制button
}

//数据报表
void MyWidget::Data_Report()
{
    QStringList ReportData_Tablist;
    ReportData_Tablist  << tr("PV power generation") << tr("Load discharge") << tr("Battery charge")
                        << tr("Battery discharge") << tr("Grid charge")<< tr("Grid discharge");
    QStringList time_str;
    time_str<< tr(" ") << tr("Day(kWh)") << tr("Month(kWh)") << tr("Year(kWh)") << tr("Total(kWh)");
    ui->Report_tableWidget->setColumnCount(time_str.size());
    ui->Report_tableWidget->setRowCount(ReportData_Tablist.size());
    ui->Report_tableWidget->setHorizontalHeaderLabels(time_str);
    ui->Report_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Report_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->Report_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Report_tableWidget->setShowGrid(true);//设置显示格子
    ui->Report_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Report_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改
    ui->Report_tableWidget->setColumnWidth(0,250);
    ui->Report_tableWidget->setColumnWidth(1,140);
    ui->Report_tableWidget->setColumnWidth(2,140);
    ui->Report_tableWidget->setColumnWidth(3,140);
    ui->Report_tableWidget->horizontalHeader()->setStretchLastSection(4);

    for(int i = 0; i < ReportData_Tablist.size(); i++)
    {
        ui->Report_tableWidget->setItem(i, 0, new QTableWidgetItem(ReportData_Tablist.at(i)));
        ui->Report_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
    }

    DataReportMessages(ui->Report_tableWidget);
}

//历史记录
void MyWidget::History()
{
    QStringList table_h_headers;
    table_h_headers.clear();
    table_h_headers << tr("Level") << tr("Start Time") << tr("End Time") << tr("Description");
    ui->Historicalfailure_tableWidget->setColumnCount(table_h_headers.size());
    ui->Historicalfailure_tableWidget->setRowCount(8);
    ui->Historicalfailure_tableWidget->setHorizontalHeaderLabels(table_h_headers);
    ui->Historicalfailure_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Historicalfailure_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Historicalfailure_tableWidget->setShowGrid(true);//设置显示格子
    ui->Historicalfailure_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Historicalfailure_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改
    ui->Historicalfailure_tableWidget->setColumnWidth(0,50);
    ui->Historicalfailure_tableWidget->setColumnWidth(1,180);
    ui->Historicalfailure_tableWidget->setColumnWidth(2,180);
    ui->Historicalfailure_tableWidget->horizontalHeader()->setStretchLastSection(true);

    Grade_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade2_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade3_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade4_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade5_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade6_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade7_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade8_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime2_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime3_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime4_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime5_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime6_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime7_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    StartTime8_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime2_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime3_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime4_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime5_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime6_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime7_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    EndTime8_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe2_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe3_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe4_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe5_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe6_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe7_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Describe8_explain->setStyleSheet("background-color:rgb(200, 0, 0);");

    HistoryRecord(ui->Historicalfailure_tableWidget);
}

//操作日志
void MyWidget::OperationLog()
{
    QStringList Ope_headers;
    Ope_headers.clear();
    Ope_headers << tr("ModificationTime") << tr("RecordEvent");
    ui->Operation_tableWidget->setColumnCount(Ope_headers.size());
    ui->Operation_tableWidget->setRowCount(8);
    ui->Operation_tableWidget->setHorizontalHeaderLabels(Ope_headers);
    ui->Operation_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Operation_tableWidget->setShowGrid(true);//设置显示格子
    ui->Operation_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Operation_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改
    ui->Operation_tableWidget->setColumnWidth(0,260);
    ui->Operation_tableWidget->horizontalHeader()->setStretchLastSection(true);

    OperationLog_tab(ui->Operation_tableWidget);
}


//告警信息绘表
void MyWidget::RTAlarm()
{
    ui->RTAlarm_Data_page->setColumnCount(5);
    ui->RTAlarm_Data_page->setRowCount(30);
    ui->RTAlarm_Data_page->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RTAlarm_Data_page->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RTAlarm_Data_page->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RTAlarm_Data_page->setShowGrid(true);//设置显示格子
    ui->RTAlarm_Data_page->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RTAlarm_Data_page->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RTAlarm_Data_page->setStyleSheet("selection-background-color:lightblue;");

    ui->RTAlarm_Data_page->setColumnWidth(0,110);
    ui->RTAlarm_Data_page->setColumnWidth(1,85);
    ui->RTAlarm_Data_page->setColumnWidth(2,305);
    ui->RTAlarm_Data_page->setColumnWidth(3,200);
    ui->RTAlarm_Data_page->setColumnWidth(4,250);

    QStringList RTAlarm_Title;
    RTAlarm_Title << tr("告警名称\nAlarm name") << tr("告警等级\nAlarm leve")<< tr("触发条件\nTrigger condition") \
                    << tr("响应动作\nResponse action")<< tr("是否自动复位及复位时间\nWhether to reset\nautomatically and reset time");
    ui->RTAlarm_Data_page->setHorizontalHeaderLabels(RTAlarm_Title);

    PCS_Alarm_information_table();  //展示PCS故障信息表
}

void MyWidget::UserParam_tab()
{
    ui->System_Tab->setColumnCount(6);
    ui->System_Tab->setRowCount(8);
    ui->System_Tab->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->System_Tab->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->System_Tab->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->System_Tab->setShowGrid(true);//设置显示格子
    ui->System_Tab->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->System_Tab->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->System_Tab->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改

    QStringList List5;
    List5 << tr("Name") << tr("Value") << tr("Unit")<< tr("Name") << tr("Value") << tr("Unit");
    ui->System_Tab->setHorizontalHeaderLabels(List5);
    ui->System_Tab->setColumnWidth(0,160);
    ui->System_Tab->setColumnWidth(1,160);
    ui->System_Tab->setColumnWidth(2,160);
    ui->System_Tab->setColumnWidth(3,160);
    ui->System_Tab->setColumnWidth(4,160);
    ui->System_Tab->setColumnWidth(5,160);
    ui->System_Tab->setRowHeight(0, 47);
    ui->System_Tab->setRowHeight(1, 47);
    ui->System_Tab->setRowHeight(2, 47);
    ui->System_Tab->setRowHeight(3, 47);
    ui->System_Tab->setRowHeight(4, 47);
    ui->System_Tab->setRowHeight(5, 47);
    ui->System_Tab->setRowHeight(6, 47);
    ui->System_Tab->setRowHeight(7, 47);

    AdvancedSetup_btn->setText(tr("Advance setting"));
    ui->System_Tab->setCellWidget(7,5, (QWidget *)AdvancedSetup_btn);          //高级设置

    DC_AC_Parameter_tab(ui->System_Tab);
}

//展示PCS故障信息表
void MyWidget::PCS_Alarm_information_table()
{
    ui->RTAlarm_Data_page->setRowHeight(0, 110);
    QStringList RTAlarm_List;
    RTAlarm_List << tr("逆变器过流\nInverter overcurrent") << tr("一般故障\nGeneral failure") \
                << tr("电感电流瞬时值>3Ip\n或电感电流有效值>1.36In\nInductive current instantaneous value >3lp or inductive current RMS value >1.36ln") \
                << tr("PCS 停机，输出接触器断开\nPCS shut down and disconnect the output contactor") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(0, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(0, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(1, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("变流器故障\nConverter fault") << tr("一般故障\nGeneral failure")\
                << tr("变流器开机软启过程中，30s后逆变电压有效值>1.2Vgrid或逆变电压有效值<0.3Vgrid\nDuring soft startup of converter, inverter voltage RMS more then 1.2Vgrid or inverter voltage RMS less than 0.3Vgrid after 30s") \
                << tr("PCS 停机，停止开机软启\nPCS shut down and Stop the soft startup") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(1, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(1, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(2, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电池电压低\nBattery low voltage") << tr("告警\nWarning") \
                << tr("直流出入电压低于电池EOD电压或者小于1.414倍电网线电压\nThe DC input/output voltage is lower than the battery EOD voltage or less than 1.414 times the grid line voltage") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(2, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(2, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(3, 200);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电池功率低\nLow battery power") << tr("告警\nWarning") \
                << tr("电池电压低于电池EOD电压值(适用无BMS电池系统，防止电压回升)\nThe battery voltage is lower than the EOD voltage value (applicable to BMS free battery systems to prevent voltage rebound)") \
                << tr("处于放电状态时PCS停机(充电过程不受影响)，交流接触器断开\nWhen the PCS is in discharge state, the machine stops (the charging process is not affected) and the AC contactor is disconnected") \
                << tr("可恢复，PCS充电时间大于5min后，告警消除\nRecoverable, The alarm is cleared when the charging time of PCS is longer than 5 minutes");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(3, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(3, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(4, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("直流母线过压\nDc bus overvoltage") << tr("严重故障\nSerious failure") \
                << tr("直流输入电压>850V\nDc input voltage more then 850V") \
                << tr("PCS 停机，交流接触器断开，直流断路器脱扣\nPCS shut down, the AC contactor is disconnected, and the DC circuit breaker is tripped") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(4, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(4, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(5, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("直流母线短路\nDc bus short circuit") << tr("严重故障\nSerious failure") \
                << tr("直流母线电压低于200V，直流电流大于50A，判断时间为200us\nThe DC bus voltage is less than 200V, the DC current is more than 50A, and the judgment time is 200us") \
                << tr("PCS 停机，交流接触器断开，直流断路器脱扣\nPCS shut down, the AC contactor is disconnected, and the DC circuit breaker is tripped") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(5, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(5, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(6, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("输出接触器开路\nThe output contactor is open") << tr("一般故障\nGeneral failure")\
                << tr("PCS运行状态下，交流接触器的辅助触点信号为断开状态\nWhen PCS is running, the auxiliary contact signal of AC contactor is in the disconnected state") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(6, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(6, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(7, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("输出接触器短路\nOutput contactor short circuit") << tr("一般故障\nGeneral failure")\
                << tr("PCS停机状态下，交流接触器的辅助触点信号为闭合状态\nWhen PCS is shut down, the auxiliary contact signal of AC contactor is closed") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(7, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(7, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(8, 310);
    RTAlarm_List.clear();
    RTAlarm_List << tr("变流器过温\nThe converter is overheated") << tr("告警\nWarning") \
                << tr("IGBT温度超过105℃或电抗器温度超过160℃\nIGBT temperature exceeds 105℃ or reactor temperature exceeds 160℃") \
                << tr("IGBT过温：降额运行(并网)；IGBT过温：PCS停机(离网)，交流接触器断开；电抗器过温：PCS 停机，交流接触器断开\nIGBT overtemperature: derating operation (grid-connected); IGBT overtemperature: PCS shut down (off-grid), AC contactor is disconnected; Reactor overtemperature: PCS shut down and AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(8, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(8, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(9, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("输出过载\nOutput over load") << tr("告警\nWarning") \
                << tr("离网负载功率>110%Pn\nOff-grid load power >110%Pn") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(9, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(9, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(10, 170);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电池接反故障\nThe positive and negative terminals of the battery are connected inversely fault") << tr("告警\nWarning") \
                << tr("直流输入正负极性接反\nThe DC input is reversed") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(10, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(10, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(11, 170);
    RTAlarm_List.clear();
    RTAlarm_List << tr("DC接触器故障\nThe DC contactor is faulty") << tr("一般故障\nGeneral failure") \
                << tr("驱动信号为闭合信号条件下，电池和母线之间的压测>50V；驱动信号为断开条件下，辅助触点信号为闭合状态\nWhen the driving signal is a closed signal, the pressure difference between the battery and the bus is greater than 50V;When the driving signal is off, the auxiliary contact signal is closed") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(11, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(11, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(12, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("EMS通信故障\nEMS communicate\nfault") << tr("一般故障\nGeneral failure") \
                << tr("PCS与EMS通信丢失，判断时间3min\nThe communication between PCS and EMS is lost, and the judgment time is 3 minutes") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除后30s自动恢复\nRecoverable, the fault recovers automatically 30 seconds after it is rectified");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(12, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(12, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(13, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("BMS通信故障\nBMS communicate\nfault") << tr("一般故障\nGeneral failure") \
                << tr("PCS与BMS通信丢失，判断时间50s\nCommunication loss between PCS and BMS, judgment time 50s") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除后30s自动恢复\nRecoverable, the fault recovers automatically 30 seconds after it is rectified");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(13, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(13, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(14, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("变流器缺相故障\nConverter phase loss fault") << tr("一般故障\nGeneral failure") \
                << tr("并网功率大于50%条件下，三相电路出现一项或多项线路无输出功率，判断时间为10s\nWhen the grid-connected power is greater than 50%, one or more lines of the three-phase circuit have no output power, and the judgment time is 10s") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(14, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(14, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(15, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电网过压\nGrid overvoltage") << tr("告警\nWarning") \
                << tr("电网电压超过最大允许电压(90%~70%可设定),判断时间1s\nIf the power grid voltage exceeds the maximum allowable voltage (90% to 70% can be set), the judgment time is 1s") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(15, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(15, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(16, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电网欠压\nGrid undervoltage") << tr("告警\nWarning") \
                << tr("电网电压超过最大允许电压(90%~70%可设定),判断时间1s\nIf the power grid voltage exceeds the maximum allowable voltage (90% to 70% can be set), the judgment time is 1s") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(16, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(16, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(17, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电网反序\nGrid reverse sequence") << tr("告警\nWarning") \
                << tr("三相相序接反(电网电压正序模值小于负序模值)，判断时间为1s\nThe three-phase phase sequence is reversed (the positive sequence mode value of the grid voltage is less than the negative sequence mode value), and the judgment time is 1s") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(17, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(17, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(18, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("电网频率异常\nGrid frequency anomaly") << tr("告警\nWarning") \
                << tr("电网频率超出PCS允许范围内(±2Hz可设定)\nGrid frequency frequency beyond the allowable range of PCS (±2Hz can be set)") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(18, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(18, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(19, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("变流器孤岛保护\nConverter shutter island protection") << tr("告警\nWarning") \
                << tr("主动孤岛保护模式下电网失电，且负载和逆变器并网功率和相角相匹配\nInitiative shutter island protection mode, the power grid loses power, and the load matches the grid-connected power and phase Angle of the inverter") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(19, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(19, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(20, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("驱动线故障\nDrive line fault") << tr("一般故障\nGeneral failure") \
                << tr("驱动线端口松动\nThe driver cable port is loose") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(20, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(20, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(21, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("防雷故障\nLightning protection fault") << tr("告警\nWarning") \
                << tr("防雷器击穿或漏电\nSurge arrester breakdown or leakage") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(21, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(21, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(22, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("绝缘阻抗异常\nDrive line fault") << tr("告警\nWarning") \
                << tr("直流侧正负母线对地电压异常（小于50V）\nAbnormal voltage of positive and negative bus to ground in DC side (less than 50V)") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(22, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(22, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(23, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("交流辅助电源故障\nThe AC auxiliary power supply is faulty") << tr("一般故障\nGeneral failure") \
                << tr("交流辅助电源输出出现异常\nThe AC auxiliary power output is abnormal. Procedure") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(23, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(23, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(24, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("直流辅助电源故障\nThe DC auxiliary power supply is faulty") << tr("一般故障\nGeneral failure") \
                << tr("直流辅助电源输出出现异常\nThe DC auxiliary power output is abnormal. Procedure") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(24, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(24, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(25, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("风扇故障\nFan failure") << tr("告警\nWarning") \
                << tr("风扇无法启动运行\nThe fan cannot be started") \
                << tr("PCS 降额运行\nPCS derating operation") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(25, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(25, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(26, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("紧急关机\nEmergency shutdown") << tr("告警\nWarning") \
                << tr("在变流器控制面板上按下EPO按钮\nPress the EPO button on the converter control panel") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(26, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(26, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(27, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("CT或霍尔开路故障\nCT or Hall open circuit fault") << tr("一般故障\nGeneral failure") \
                << tr("PCS并网功率大于50%运行时，CT检测电流小于给定量的70%\nWhen PCS grid-connected power is greater than 50%, CT detection current is less than 70% of the given quantity") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("可恢复，故障消除5min后自动恢复\nRecoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(27, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(27, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(28, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("绝缘阻抗异常\nAbnormal insulation impedance") << tr("严重故障\nSerious failure") \
                << tr("对于1000V系统，正对地或负对地阻抗小于33K欧姆\nFor 1000V systems, the positive or negative ground impedance is less than 33KΩ") \
                << tr("PCS 停机，交流接触器断开\nPCS shut down and the AC contactor is disconnected") \
                << tr("不可恢复\nUnrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(28, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(28, i)->setTextAlignment(Qt::AlignCenter);
    }
}

//显示菜单
void MyWidget::on_UI_MenuBtn_clicked()
{

    if(m_menu->isHidden())
    {
        m_menu->setGeometry(0, 0, 250, 453);
        m_menu->move(QPoint((this->pos().x() + 10),(this->pos().y() + 85)));
        m_menu->show();
    }
    else
    {
        m_menu->hide();
    }
}
/***********时间显示**********/
void MyWidget::onTimerOut()
{
    QDateTime time = QDateTime::currentDateTime();
    QString str = time.toString("yyyy-MM-dd HH:mm:ss");
    ui->TimeSeting_btn->setText(str);
}

/***************************************************************
 * @brief 根据索引打开相应的界面
 ***************************************************************/
void MyWidget::My_menuAction(int Index)
{
    switch (Index)
    {
        case HOSTPAGE:
            ui->stackedWidget->setCurrentWidget(ui->Host_page);
            ui->RTState_stackedWidget->setCurrentWidget(ui->RTState_page);
            ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
            break;
        case RTDATAPAGE:
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
            ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
            ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);
            ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);

            break;
        case RECORDPAGE:
            ui->stackedWidget->setCurrentWidget(ui->Record_page);
            ui->Record_tabWidget->setCurrentWidget(ui->DataReport_page);
            ui->Report_tab->setCurrentWidget(ui->Report_tabPage_T);
            ui->dateEdit->setDate(QDateTime::currentDateTime().date());

            break;
        case SYSTEMPAGE:

            ui->stackedWidget->setCurrentWidget(ui->System_page);
            ui->BatterSet_stackedWidget->setCurrentWidget(ui->Lithium_stackedWidgetPage);

            break;
        case MACHINECLOSE:
            {

            }

            break;
        case MACHINESTANDBY:
            {

            }
            break;
        case MACHINEOPEN:
            {

            }
            break;
        case MACHINESWITCH:
            break;

        default:
            break;
    }
}
//电池数据点击槽
void MyWidget::BatteryData_clicked(int nid)
{
    switch (nid) {
    case 0:
        QMessageBox::question(this, "Bat volage"\
                              ,"这是通过CAN/485通讯协议从BMS上传的电池电压\nThis is the battery voltage uploaded from the BMS using the CAN/485 communication protocol.", "OK");
        break;
    case 1:
        QMessageBox::question(this, "Bat current"\
                              ,"这是通过CAN/485通讯协议从BMS上传的电池电流\nThis is the battery current uploaded from the BMS using the CAN/485 communication protocol.", "OK");
        break;
    case 2:
        QMessageBox::question(this, "SOC"\
                              ,"这是通过CAN/485通讯协议从BMS上传的电池SOC，即电池剩余电量百分比\nThis is the battery SOC, which is the percentage of remaining battery power, uploaded from the BMS using the CAN/485 communication protocol.", "OK");
        break;
    case 3:
        QMessageBox::question(this, "SOH"\
                              ,"这是通过CAN/485通讯协议从BMS上传的电池SOH，即电池当前的容量与出厂容量的百分比\nThis is the battery SOH uploaded from the BMS using the CAN/485 communication protocol, that is, the percentage of the current capacity of the battery to the factory capacity.", "OK");
        break;
    case 4:
        QMessageBox::question(this, "Cell voltage(max)"\
                              ,"这是通过CAN/485通讯协议从BMS上传的单体最高电压,即当前所有单体电池电压的最高电压\nThis is the maximum voltage of a single cell uploaded from the BMS through the CAN/485 communication protocol, that is, the maximum voltage of all the current battery.", "OK");
        break;
    case 5:
        QMessageBox::question(this, "Cell voltage(min)"\
                              ,"这是通过CAN/485通讯协议从BMS上传的单体最低电压,即当前所有单体电池电压的最低电压\nThis is the minimum voltage of a single cell uploaded from the BMS through the CAN/485 communication protocol, that is, the minimum voltage of all the current battery voltage.", "OK");
        break;
    case 6:
        QMessageBox::question(this, "Cell temp.(max)"\
                              ,"这是通过CAN/485通讯协议从BMS上传的单体最高温度,即当前所有单体电池温度的最高温度\nThis is the highest temperature of a single battery uploaded from the BMS using the CAN/485 communication protocol, that is, the highest temperature of all batteries.", "OK");
        break;
    case 7:
        QMessageBox::question(this, "Cell temp.(min)"\
                              ,"这是通过CAN/485通讯协议从BMS上传的单体最低温度,即当前所有单体电池温度的最低温度\nThis is the lowest temperature of a single battery uploaded from the BMS using the CAN/485 communication protocol, that is, the lowest temperature of all batteries.", "OK");
        break;
    case 8:
        QMessageBox::question(this, "Charging current limite"\
                              ,"这是通过CAN/485通讯协议从BMS上传的充电电流上限，电池的充电的电流不可超过这个限制数值\nThis is the upper limit of the charging current uploaded from the BMS through the CAN/485 communication protocol. The charging current of the battery cannot exceed this limit value.", "OK");
        break;
    case 9:
        QMessageBox::question(this, "Discharging current limite"\
                              ,"这是通过CAN/485通讯协议从BMS上传的放电电流上限，电池的放电的电流不可超过这个限制数值\nThis is the upper limit of the discharge current uploaded from the BMS through the CAN/485 communication protocol. The battery discharge current cannot exceed this limit value.", "OK");
        break;
    case 10:
        QMessageBox::question(this, "Allow charge power"\
                              ,"这是通过CAN/485通讯协议从BMS上传的可充电功率，电池的充电功率不可超过这个限制数值\nThis is the rechargeable power uploaded from the BMS through the CAN/485 communication protocol. The charging power of the battery cannot exceed this limit value.", "OK");
        break;
    case 11:
        QMessageBox::question(this, "Allow discharge power"\
                              ,"这是通过CAN/485通讯协议从BMS上传的可放电功率，电池的放电功率不可超过这个限制数值\nThis is the discharge power uploaded from the BMS using the CAN/485 communication protocol. The discharge power of the battery cannot exceed this limit.", "OK");
        break;
    case 12:
        QMessageBox::question(this, "Allow charge energy"\
                              ,"这是通过CAN/485通讯协议从BMS上传的允许充电量，电池的充电量不可超过这个限制数值\nThis is the allowable charge amount uploaded from BMS through CAN/485 communication protocol. The battery charge amount cannot exceed this limit value.", "OK");
        break;
    case 13:
        QMessageBox::question(this, "Allow discharge energy"\
                              ,"这是通过CAN/485通讯协议从BMS上传的允许放电量，电池的放电量不可超过这个限制数值\nThis is the allowable discharge capacity uploaded from the BMS through the CAN/485 communication protocol. The discharge capacity of the battery cannot exceed this limit.", "OK");
        break;
    case 14:
        QMessageBox::question(this, "Normal"\
                              ,"这是正常时的颜色--绿色，表示当前无告警,当告警等级(Alarm level)中的颜色与此颜色一致时为正常\nThis is the normal color. Green: No Alarm is generated. If the color in the Alarm level(Alarm level) is the same as this color, the alarm is normal.", "OK");
        break;
    case 15:
        QMessageBox::question(this, "Warning1"\
                              ,"这是一级告警时的颜色--黄色，当告警等级(Alarm level)中的颜色与此颜色一致时为一级告警\nThis is the color of a level 1 Alarm: yellow. If the color of an Alarm level(Alarm level) is the same as this color, it is a Level 1 alarm.", "OK");
        break;
    case 16:
        QMessageBox::question(this, "Warning2"\
                              ,"这是二级告警时的颜色--橙色，当告警等级(Alarm level)中的颜色与此颜色一致时为二级告警\nThis is the color of a level 2 Alarm: orange. If the color of an Alarm level(Alarm level) is the same as this color, it is a Level 2 alarm.", "OK");
        break;
    case 17:
        QMessageBox::question(this, "Warning3"\
                              ,"这是三级告警时的颜色--红色，当告警等级(Alarm level)中的颜色与此颜色一致时为三级告警\nThis is the color of a level 3 Alarm: red. If the color in the Alarm level(Alarm level) is the same as this color, it is a Level 3 alarm.", "OK");
        break;
    case 18:
        QMessageBox::question(this, "Alarm level"\
                              ,"这是告警等级图示，会根据BMS上传的告警等级改变颜色，此处可以通过颜色判断告警等级，正常为绿色、告警1为黄色、告警2为橙色、告警3为红色\nThis is an alarm level diagram that will change color based on the alarm level uploaded by BMS. Here, the alarm level can be determined by color, which is green for normal, yellow for alarm 1, orange for alarm 2, and red for alarm 3.", "OK");
        break;
    case 19:
        QMessageBox::question(this, "Charge enable"\
                              ,"这是充电使能，它是由BMS上传的动作，可以作为判断当前是否可以充电的判断标准\nThis is the charging enable, which is the action uploaded by BMS and can be used as the judging standard to judge whether the current charging is possible.", "OK");
        break;
    case 20:
        QMessageBox::question(this, "Discharge enable"\
                              ,"这是放电使能，它是由BMS上传的动作，可以作为判断当前是否可以放电的判断标准\nThis is discharge enable, it is uploaded by the BMS action, can be used to judge whether the current discharge can judge the criteria.", "OK");
        break;
    default:
        break;
    }
}

void MyWidget::SystemParam_tbnt_released()
{

}

void MyWidget::on_Running_btn_clicked()  //显示变流器实时数据
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);

}

void MyWidget::on_Grid_clicked() //显示电网端实时数据
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Grid_page);
}

void MyWidget::on_Load_clicked() //显示负载端实时数据
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Load_page);
}

void MyWidget::on_PV_clicked()//显示PV端实时数据
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->DC_page);
}

void MyWidget::on_Batt_btn_released()//显示电池信息
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->BatteryData_page);
    ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
}void MyWidget::on_RTD_Converter_clicked()
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);
}

void MyWidget::on_RTD_DC_clicked()
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->DC_page);
}

void MyWidget::on_RTD_Grid_clicked()
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Grid_page);
}

void MyWidget::on_RTD_Load_clicked()
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Load_page);
}

void MyWidget::on_Alarm_btn_clicker()//显示告警信息
{
    ui->stackedWidget->setCurrentWidget(ui->Status_page);
    ui->Run_tabWidget->setCurrentWidget(ui->RTAlarm_page);
}
//MPS数据 绘制button
void MyWidget::MPS_Data(QTableWidget *myTable)
{
    int line=0;int column = 1;//当前解释的button行和列
    MPS_vol_AB = new Specification(this,MPS_vol_AB_explain, myTable, line++, column, \
                                            "0V", "voltage(AB)", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    MPS_vol_AB->add_Specification();
    MPS_vol_BC = new Specification(this,MPS_vol_BC_explain, myTable, line++, column, \
                                            "0V", "voltage(BC)", \
                                            "这是从变流器获取的当前MPS的B相和C相之间的电压\nThis is the voltage between the B and C phases of the current PCS obtained from the converter.");
    MPS_vol_BC->add_Specification();
    MPS_vol_CA = new Specification(this,MPS_vol_CA_explain, myTable, line++, column, \
                                            "0V", "voltage(AC)", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and C phases of the current PCS obtained from the converter.");
    MPS_vol_CA->add_Specification();
    MPS_cur_A = new Specification(this,MPS_cur_A_explain, myTable, line++, column, \
                                            "0A", "current(A)", \
                                            "这是从变流器获取的当前MPS的A相电流\nThis is the A-phase current of the current PCS obtained from the converter.");
    MPS_cur_A->add_Specification();
    MPS_cur_B = new Specification(this,MPS_cur_B_explain, myTable, line++, column, \
                                            "0A", "current(B)", \
                                            "这是从变流器获取的当前MPS的B相电流\nThis is the B-phase current of the current PCS obtained from the converter.");
    MPS_cur_B->add_Specification();
    MPS_cur_C = new Specification(this,MPS_cur_C_explain, myTable, line++, column, \
                                            "0A", "current(C)", \
                                            "这是从变流器获取的当前MPS的C相电流\nThis is the C-phase current of the current PCS obtained from the converter.");
    MPS_cur_C->add_Specification();
    MPS_IGBT_T = new Specification(this,MPS_IGBT_T_explain, myTable, line++, column, \
                                            "0℃", "IGBT temperature", \
                                            "这是从变流器获取的当前IGBT温度，IGBT温度是指当前半导体芯片的最高温度\nThis is the current IGBT temperature obtained from the converter. IGBT temperature is the highest temperature of the current semiconductor chip.");
    MPS_IGBT_T->add_Specification();
    MPS_Env_T = new Specification(this,MPS_Env_T_explain, myTable, line++, column, \
                                            "0℃", "Environment temperature", \
                                            "这是从变流器获取的当前环境温度\nThis is the current ambient temperature obtained from the converter.");
    MPS_Env_T->add_Specification();
    MPS_Leakage_cur = new Specification(this,MPS_Leakage_cur_explain, myTable, line++, column, \
                                            "0mA", "Leakage current", \
                                            "这是漏电流\nThis is the leakage current.");
    MPS_Leakage_cur->add_Specification();
    line=0;
    column=3;
    PV_vol = new Specification(this,PV_vol_explain, myTable, line++, column, \
                                            "0V", "PV voltage", \
                                            "这是变流器采集的当前PV侧的电压\nThis is the current PV side voltage collected by the converter.");
    PV_vol->add_Specification();
    PV_cur = new Specification(this,PV_cur_explain, myTable, line++, column, \
                                            "0A", "PV current", \
                                            "这是变流器采集的当前PV侧的电流\nThis is the current on the PV side collected by the converter.");
    PV_cur->add_Specification();
    PV_power = new Specification(this,PV_power_explain, myTable, line++, column, \
                                            "0kW", "PV power", \
                                            "这是变流器采集的当前PV侧的功率\nThis is the current PV power collected by the converter.");
    PV_power->add_Specification();
    Batter_vol = new Specification(this,Batter_vol_explain, myTable, line++, column, \
                                            "0V", "Battery voltage", \
                                            "这是变流器采集的当前电池的总压\nThis is the total voltage of the current battery collected by the converter.");
    Batter_vol->add_Specification();
    Batter_cur = new Specification(this,Batter_cur_explain, myTable, line++, column, \
                                            "0A", "Battery current", \
                                            "这是变流器采集的当前电池的电流\nThis is the current of the battery collected by the converter.");
    Batter_cur->add_Specification();
    Batter_power = new Specification(this,Batter_power_explain, myTable, line++, column, \
                                            "0kW", "Battery power", \
                                            "这是变流器采集的当前电池的功率\nThis is the current battery power collected by the converter.");
    Batter_power->add_Specification();
    Bus_vol = new Specification(this,Bus_vol_explain, myTable, line++, column, \
                                            "0V", "Bus voltage", \
                                            "这是变流器采集的当前的母线电压\nThis is the current bus voltage collected by the converter.");
    Bus_vol->add_Specification();
    Bus_cur = new Specification(this,Bus_cur_explain, myTable, line++, column, \
                                            "0V", "Bus current", \
                                            "这是变流器采集的当前的母线电流\nThis is the current busbar current collected by the converter.");
    Bus_cur->add_Specification();
}
//PV数据 绘制button
void MyWidget::PV_Data(QTableWidget *myTable)
{
    //只让选择1,2两个模块
    ui->RTD_module_3->setEnabled(false);
    ui->RTD_module_4->setEnabled(false);
    ui->RTD_module_5->setEnabled(false);
    ui->RTD_module_6->setEnabled(false);
    ui->RTD_module_7->setEnabled(false);
    ui->RTD_module_8->setEnabled(false);
    ui->RTD_module_9->setEnabled(false);
    ui->RTD_module_10->setEnabled(false);
    ui->RTD_module_11->setEnabled(false);
    ui->RTD_module_12->setEnabled(false);

    int line=0;int column = 1;//当前解释的button行和列
    PV_vol_H = new Specification(this,PV_vol_H_explain, myTable, line++, column, \
                                            "0V", "Voltage H", \
                                            "这是当前DC模块的高压侧电压\nThis is the high voltage side voltage of the current DC module.");
    PV_vol_H->add_Specification();
    PV_cur_H = new Specification(this,PV_cur_H_explain, myTable, line++, column, \
                                            "0A", "Current H", \
                                            "这是当前DC模块的高压侧电流\nThis is the current high voltage side current of the DC module.");
    PV_cur_H->add_Specification();
    PV_power_H = new Specification(this,PV_power_H_explain, myTable,line++, column, \
                                            "0kW", "Power H", \
                                            "这是当前DC模块的高压侧功率\nThis is the high voltage side power of the current DC module.");
    PV_power_H->add_Specification();
    PV_vol_L = new Specification(this,PV_vol_L_explain, myTable, line++, column, \
                                            "0V", "Voltage L", \
                                            "这是当前DC模块的低压侧电压\nThis is the low voltage side voltage of the current DC module.");
    PV_vol_L->add_Specification();
    PV_cur_L = new Specification(this,PV_cur_L_explain, myTable,line++, column, \
                                            "0A", "Current L", \
                                            "这是当前DC模块的低压侧电流\nThis is the current low voltage side current of the DC module.");
    PV_cur_L->add_Specification();
    PV_power_L = new Specification(this,PV_power_L_explain, myTable, line++, column, \
                                            "0kW", "Power L", \
                                            "这是当前DC模块的低压侧功率\nThis is the low voltage side power of the current DC module.");
    PV_power_L->add_Specification();
    PositiveInuslation = new Specification(this,PositiveInuslation_explain, myTable, line++, column, \
                                            "0kΩ", "PositiveInuslation", \
                                            "这是当前DC模块的正绝缘阻抗\nThis is the positive insulation impedance of the current DC module.");
    PositiveInuslation->add_Specification();
    line=0;
    column=3;
    Bus_H_vol_add = new Specification(this,Bus_H_vol_add_explain, myTable, line++, column, \
                                            "0V", "Bus_H_vol(+)", \
                                            "这是当前DC模块的高压侧正母线电压\nThis is the current positive bus voltage of the high voltage side of the DC module.");
    Bus_H_vol_add->add_Specification();
    Bus_H_vol_reduce = new Specification(this,Bus_H_vol_reduce_explain, myTable, line++, column, \
                                            "0V", "Bus_H_vol(-)", \
                                            "这是当前DC模块的高压侧负母线电压\nThis is the negative bus voltage of the high voltage side of the current DC module.");
    Bus_H_vol_reduce->add_Specification();
    Bus_L_vol_add = new Specification(this,Bus_L_vol_add_explain, myTable, line++, column, \
                                            "0V", "Bus_L_vol(+)", \
                                            "这是当前DC模块的低压侧正母线电压\nThis is the positive bus voltage of the low voltage side of the current DC module.");
    Bus_L_vol_add->add_Specification();
    Bus_L_vol_reduce = new Specification(this,Bus_L_vol_reduce_explain, myTable, line++, column, \
                                            "0V", "Bus_L_vol(-)", \
                                            "这是当前DC模块的低压侧负母线电压\nThis is the negative bus voltage of the low voltage side of the current DC module.");
    Bus_L_vol_reduce->add_Specification();
    PV_IGBT_T = new Specification(this,PV_IGBT_T_explain, myTable, line++, column, \
                                            "0℃", "IGBT Temperature", \
                                            "这是当前DC模块内部的IGBT温度\nThis is the current IGBT temperature inside the DC module.");
    PV_IGBT_T->add_Specification();
    NegativeInuslation = new Specification(this,NegativeInuslation_explain, myTable, line++, column, \
                                            "0kΩ", "NegativeInuslation", \
                                            "这是当前DC模块的负绝缘阻抗\nThis is the negative insulation impedance of the current DC module.");
    NegativeInuslation->add_Specification();
    Leakage_cur = new Specification(this,Leakage_cur_explain, myTable, line++, column, \
                                            "0mA", "Leakage_cur", \
                                            "这是当前模块的漏电流\nThis is the leakage current of the current module.");
    Leakage_cur->add_Specification();
}
//电网数据 绘制button
void MyWidget::Grid_Data(QTableWidget *myTable)
{
    int line=0;int column=1;
    Grid_vol_AB = new Specification(this,Grid_vol_AB_explain, myTable, line++, column, \
                                            "0V", "Voltage(AB)", \
                                            "这是变流器采集的当前电网的A相和B相之间的电压\nThis is the voltage between phase A and phase B of the current grid collected by the converter.");
    Grid_vol_AB->add_Specification();
    Grid_vol_BC = new Specification(this,Grid_vol_BC_explain, myTable, line++, column, \
                                            "0V", "Voltage(BC)", \
                                            "这是变流器采集的当前电网的B相和C相之间的电压\nThis is the voltage between phase B and phase C of the current grid collected by the converter.");
    Grid_vol_BC->add_Specification();
    Grid_vol_CA = new Specification(this,Grid_vol_CA_explain, myTable,line++, column, \
                                            "0V", "Voltage(CA)", \
                                            "这是变流器采集的当前电网的A相和C相之间的电压\nThis is the voltage between phase A and phase C of the current grid collected by the converter.");
    Grid_vol_CA->add_Specification();
    Grid_cur_A = new Specification(this,Grid_cur_A_explain, myTable, line++, column, \
                                            "0A", "Current(A)", \
                                            "这是变流器采集的当前电网的A相的电流\nThis is the A-phase current of the current grid collected by the converter.");
    Grid_cur_A->add_Specification();
    Grid_cur_B = new Specification(this,Grid_cur_B_explain, myTable, line++, column, \
                                            "0A", "Current(B)", \
                                            "这是变流器采集的当前电网的B相的电流\nThis is the B-phase current of the current grid collected by the converter.");
    Grid_cur_B->add_Specification();
    Grid_cur_C = new Specification(this,Grid_cur_C_explain, myTable, line++, column, \
                                            "0A", "Current(C)", \
                                            "这是变流器采集的当前电网的C相的电流\nThis is the C phase current of the current grid collected by the converter.");
    Grid_cur_C->add_Specification();
    line=0;
    column=3;
    Grid_active_power = new Specification(this,Grid_active_power_explain, myTable, line++, column, \
                                            "0kW", "Active power", \
                                            "这是变流器采集的当前电网的有功功率\nThis is the active power of the current grid collected by the converter.");
    Grid_active_power->add_Specification();
    Grid_reactive_power = new Specification(this,Grid_reactive_power_explain, myTable, line++, column, \
                                            "0Kvar", "Reactive power", \
                                            "这是变流器采集的当前电网的无功功率\nThis is the reactive power of the current grid collected by the converter.");
    Grid_reactive_power->add_Specification();
    Grid_apparent_power = new Specification(this,Grid_apparent_power_explain, myTable, line++, column, \
                                            "0kVA", "Apparent power", \
                                            "这是变流器采集的当前电网的视在功率\nThis is the current apparent power of the grid collected by the converter.");
    Grid_apparent_power->add_Specification();
    Grid_power_factor = new Specification(this,Grid_power_factor_explain, myTable, line++, column, \
                                            "0", "Power factor", \
                                            "这是变流器采集的当前电网的功率因素\nThis is the power factor of the current grid collected by the converter.");
    Grid_power_factor->add_Specification();
    Grid_Frequency = new Specification(this,Grid_Frequency_explain, myTable, line++, column, \
                                            "0Hz", "Frequency", \
                                            "这是变流器采集的当前电网的频率\nThis is the frequency of the current grid collected by the converter.");
    Grid_Frequency->add_Specification();

}
//负载数据 绘制button
void MyWidget::Load_Data(QTableWidget *myTable)
{
    int line=0;int column=1;
    Load_vol_AB = new Specification(this,Load_vol_AB_explain, myTable, line++, column, \
                                            "0V", "Voltage(AB)", \
                                            "这是变流器采集的当前负载的A相和B相之间的电压\nThis is the voltage between phase A and phase B of the current load collected by the converter.");
    Load_vol_AB->add_Specification();
    Load_vol_BC = new Specification(this,Load_vol_BC_explain, myTable, line++, column, \
                                            "0V", "Voltage(BC)", \
                                            "这是变流器采集的当前负载的B相和C相之间的电压\nThis is the voltage between the B and C phases of the current load collected by the converter.");
    Load_vol_BC->add_Specification();
    Load_vol_CA = new Specification(this,Load_vol_CA_explain, myTable, line++, column, \
                                            "0V", "Voltage(CA)", \
                                            "这是变流器采集的当前负载的A相和C相之间的电压\nThis is the voltage between phase A and phase C of the current load collected by the converter.");
    Load_vol_CA->add_Specification();
    Load_cur_A = new Specification(this,Load_cur_A_explain, myTable, line++, column, \
                                            "0A", "Current(A)", \
                                            "这是变流器采集的当前负载的A相的电流\nThis is the A-phase current of the current load collected by the converter.");
    Load_cur_A->add_Specification();
    Load_cur_B = new Specification(this,Load_cur_B_explain, myTable, line++, column, \
                                            "0A", "Current(B)", \
                                            "这是变流器采集的当前负载的B相的电流\nThis is the B-phase current of the current load collected by the converter.");
    Load_cur_B->add_Specification();
    Load_cur_C = new Specification(this,Load_cur_C_explain, myTable, line++, column, \
                                            "0A", "Current(C)", \
                                            "这是变流器采集的当前负载的C相的电流\nThis is the C phase current of the current load collected by the converter.");
    Load_cur_C->add_Specification();
    line=0;
    column=3;
    Load_active_power = new Specification(this,Load_active_power_explain, myTable, line++, column, \
                                            "0kW", "Active power", \
                                            "这是变流器采集的当前负载的有功功率\nThis is the active power of the current load collected by the converter.");
    Load_active_power->add_Specification();
    Load_reactive_power = new Specification(this,Load_reactive_power_explain, myTable, line++, column, \
                                            "0Kvar", "Reactive power", \
                                            "这是变流器采集的当前负载的无功功率\nThis is the reactive power of the current load collected by the converter.");
    Load_reactive_power->add_Specification();
    Load_apparent_power = new Specification(this,Load_apparent_power_explain, myTable, line++, column, \
                                            "0kVA", "Apparent power", \
                                            "这是变流器采集的当前负载的视在功率\nThis is the apparent power of the current load collected by the converter.");
    Load_apparent_power->add_Specification();
    Load_power_factor = new Specification(this,Load_power_factor_explain, myTable, line++, column, \
                                            "0", "Power factor", \
                                            "这是变流器采集的当前负载的功率因素\nThis is the power factor of the current load collected by the converter.");
    Load_power_factor->add_Specification();
    Load_Frequency = new Specification(this,Load_Frequency_explain, myTable, line++, column, \
                                            "0Hz", "Frequency", \
                                            "这是变流器采集的当前负载的频率\nThis is the frequency of the current load collected by the converter.");
    Load_Frequency->add_Specification();
}
//MPS状态 绘制button
void MyWidget::MPSState(QTableWidget *myTable)
{
    //只让选择1,2两个模块
    ui->RTS_module_3->setEnabled(false);
    ui->RTS_module_4->setEnabled(false);
    ui->RTS_module_5->setEnabled(false);
    ui->RTS_module_6->setEnabled(false);
    ui->RTS_module_7->setEnabled(false);
    ui->RTS_module_8->setEnabled(false);
    ui->RTS_module_9->setEnabled(false);
    ui->RTS_module_10->setEnabled(false);
    ui->RTS_module_11->setEnabled(false);
    ui->RTS_module_12->setEnabled(false);

    int line = 0;int column = 1;//当前解释的button行和列
    DC_input_Bre = new Specification(this,DC_input_Bre_explain, myTable, line++, column, \
                                            "Close", "DC input breaker", \
                                            "这是当前直流输入断路器的状态，有闭合(Close)、断开(Break)两种状态，直流断路器能实现继电保护，自动装置免受过载、短路等故障危害\nThis is the current DC input circuit breaker state, there are Close (Close), Break (Break) two states, DC circuit breaker can achieve relay protection, automatic device from overload, short circuit and other faults.");
    DC_input_Bre->add_Specification();
    DC_Con = new Specification(this,DC_Con_explain, myTable, line++, column, \
                                            "Close", "DC contactor", \
                                            "这是当前直流接触器的状态，有闭合(Close)、断开(Break)两种状态,直流接触器在直流回路中用于控制接通或切断直流电路使其启停\nThis is the current state of the DC contactor, with two states: Close and Break. The DC contactor is used to control the switching on or cutting off the DC circuit in the DC circuit to make it start and stop.");
    DC_Con->add_Specification();
    M_Bypass_Bre = new Specification(this,M_Bypass_Bre_explain, myTable, line++, column, \
                                            "Close", "Maintenance Bypass breaker", \
                                            "这是当前维修旁路断路器的状态，有闭合(Close)、断开(Break)两种状态，维修旁路断路器一般用于维修机器的时候，闭合该断路器，整个系统将完全掉电，保护维修人员的安全\nThis is the current state of maintenance bypass circuit breaker. There are two states: Close and Break. Maintenance bypass circuit breaker is generally used for machine maintenance. When the circuit breaker is closed, the entire system will be completely powered off, protecting the safety of maintenance personnel.");
    M_Bypass_Bre->add_Specification();
    Output_Bre = new Specification(this,Output_Bre_explain, myTable, line++, column, \
                                            "Close", "Output breaker", \
                                            "这是当前输出断路器的状态，有闭合(Close)、断开(Break)两种状态，根据需要可以切断和接通输出电路以达到保护电路的作用\nThis is the current output circuit breaker state, there are Close (Close), Break (Break) two states, according to the need to cut off and put on the output circuit to achieve the protection of the circuit.");
    Output_Bre->add_Specification();
    Output_Con = new Specification(this,Output_Con_explain, myTable, line++, column, \
                                            "Close", "Output contactor", \
                                            "这是当前输出接触器的状态，有闭合(Close)、断开(Break)两种状态，输出接触器在输出电路中用于控制接通或切断电路使其启停\nThis is the current state of the output contactor, with two states: Close and Break. The output contactor is used in the output circuit to control on or off the circuit to make it start or stop.");
    Output_Con->add_Specification();
    Grid_Bre = new Specification(this,Grid_Bre_explain, myTable, line++, column, \
                                            "Close", "Grid breaker", \
                                            "这是当前电网断路器的状态，有闭合(Close)、断开(Break)两种状态，根据需要可以切断和接通电网电路以达到保护电路的作用\nThis is the current state of the circuit breaker of the power grid, there are two states of Close (Close) and Break (Break), according to the need to cut off and connect the power grid circuit to protect the circuit.");
    Grid_Bre->add_Specification();
    DO1 = new Specification(this,DO1_explain, myTable, line++, column, \
                                            "Disable", "DO1", \
                                            "这是输出干接点1的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the output dry contact 1, which can be enabled or disabled.");
    DO1->add_Specification();
    DO2 = new Specification(this,DO2_explain, myTable,line++, column, \
                                            "Disable", "DO2", \
                                            "这是输出干接点2的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the output dry contact 2, which can be enabled or disabled.");
    DO2->add_Specification();
    DO3 = new Specification(this,DO3_explain, myTable, line++, column, \
                                            "Disable", "DO3", \
                                            "这是输出干接点3的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the output dry contact 3, which can be enabled or disabled.");
    DO3->add_Specification();

    line = 0;
    column += 2;
    DCAC_Conver_avail = new Specification(this,DCAC_Conver_avail_explain, myTable, line++, column, \
                                            "Enable", "DCAC Converter available", \
                                            "这是当前变流器使能的状态，有使能(Enable)、禁止(Disable)两种状态,使能后变流器开机容许\nThis is the status of enabling the current converter. There are two states: Enable and Disable. After enabling, the converter is allowed to start.");
    DCAC_Conver_avail->add_Specification();
    DC_Soft_Start = new Specification(this,DC_Soft_Start_explain, myTable, line++, column, \
                                            "Not starting", "DC Soft start", \
                                            "这是当前直流软启动的状态，有软启中(Soft starting)、软启完成(complete)、未启动(Not starting)三种启动状态,软启动是指变流器在启动时，通过控制电流或电压的变化使设备逐渐加速或减速到正常运行状态，以减少电路中的电流冲击和电压峰值，保护电路元器件并减少设备的机械损伤。软启动可以增加设备的寿命，减少能耗，提高系统效率\nThis is the current DC Soft startup state, including Soft starting, complete and Not starting. Soft startup means that the converter gradually accelerates or decelerates the device to the normal operating state by controlling the change of current or voltage during startup.To reduce the current shock and voltage peak in the circuit, protect circuit components and reduce the mechanical damage of equipment.Soft boot can prolong the service life of the device, reduce power consumption, and improve system efficiency.");
    DC_Soft_Start->add_Specification();
    Converter_Status = new Specification(this,Converter_Status_explain, myTable, line++, column, \
                                            "OFF", "Converter Status", \
                                            "这是当前变流器的状态，有关闭(OFF)、软启动(Soft start)、并网充电(Grid-ON Charge)、并网放电(Grid-ON Discharge)、离网放电(Grid-OFF Discharge)、降额并网(Drop and Connected)、待机(Standby)、离网充电(Grid-OFF Charge)这八种状态\nThis is the current state of the converter,There are OFF, Soft start, grid-on Charge, grid-on Discharge, grid-off Discharge, derated Grid connection, Drop andThere are eight states: Connected, Standby and Grid-OFF Charge.");
    Converter_Status->add_Specification();
    Reactive_P_Reg = new Specification(this,Reactive_P_Reg_explain, myTable, line++, column, \
                                            "SVG", "Reactive power Regulation", \
                                            "这是无功调节方式，有禁止(Disable)、功率因数调节(Pf regulation)、无功功率调节(Q regulation)、夜间SVG模式(SVG)四种状态，无功调节主要用于调整电压，提高供电稳定性，SVG可以向电网提供动态无功补偿，降低电站孤岛运行的概率，也可一定程度提高低电压穿越能力\nThis is the reactive power regulation mode, including Disable, Pf regulation, Q regulation and night SVG mode. Reactive power regulation is mainly used to adjust voltage and improve power supply stability. SVG can provide dynamic reactive power compensation to the power grid.Reducing the probability of isolated operation of power station can also improve the low voltage crossing ability to some extent.");
    Reactive_P_Reg->add_Specification();
    Sleep_mode = new Specification(this,Sleep_mode_explain, myTable, line++, column, \
                                            "Dromant", "Sleep_mode", \
                                            "这是当前休眠模式的状态，有未休眠(No dromancy)、休眠(Dromant)两种状态\nThis is the status of the current hibernate mode, being No dromancy and Dromancy.");
    Sleep_mode->add_Specification();
    LVRT = new Specification(this,LVRT_explain, myTable, line++, column, \
                                            "LVRT", "LVRT", \
                                            "这是当前低电压穿越(LVRT)的状态，低电压穿越是在确定的时间内承受一定限值的电网低电压而不退出运行的能力，这里有两种状态，分别为无(Non)、有(LVRT)\nThis is the current state of low voltage crossing (LVRT). Low voltage crossing refers to the ability to withstand a certain limit of low voltage of the grid within a certain period of time without exiting the operation. There are two states here, namely Non and LVRT.");
    LVRT->add_Specification();
    DI1 = new Specification(this,DI1_explain, myTable, line++, column, \
                                            "Disable", "DI1", \
                                            "这是输入干接点1的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 1. The status can be Enable or Disable.");
    DI1->add_Specification();
    DI2 = new Specification(this,DI2_explain, myTable, line++, column, \
                                            "Disable", "DI2", \
                                            "这是输入干接点2的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 2. The status can be Enable or Disable.");
    DI2->add_Specification();
    DI3 = new Specification(this,DI3_explain, myTable, line++, column, \
                                            "Disable", "DI3", \
                                            "这是输入干接点3的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 3. The status can be Enable or Disable.");
    DI3->add_Specification();
    DI4 = new Specification(this,DI4_explain, myTable, line++, column, \
                                            "Disable", "DI4", \
                                            "这是输入干接点4的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 4. The status can be Enable or Disable.");
    DI4->add_Specification();
    DI5 = new Specification(this,DI5_explain, myTable, line++, column, \
                                            "Disable", "DI5", \
                                            "这是输入干接点5的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 5. The status can be Enable or Disable.");
    DI5->add_Specification();
    DI6 = new Specification(this,DI6_explain, myTable, line++, column, \
                                            "Disable", "DI6", \
                                            "这是输入干接点6的状态，有使能(Enable)、禁止(Disable)两种状态\nThis is the status of the input dry contact 6. The status can be Enable or Disable.");
    DI6->add_Specification();
    line = 0;
    column += 2;
    Breaker1_Sta_Boost = new Specification(this,Breaker1_Sta_Boost_explain, myTable, line++, column, \
                                            "OFF", "Breaker1 Status Boost", \
                                            "这是当前'DC'模块的高压侧断路器1，有闭合(ON)、断开(OFF)两种状态\nThis is the high voltage side circuit breaker 1 of the current 'DC' module, with two states: ON and OFF.");
    Breaker1_Sta_Boost->add_Specification();
    Breaker2_Sta_Boost = new Specification(this,Breaker2_Sta_Boost_explain, myTable, line++, column, \
                                            "OFF", "Breaker2 Status Boost", \
                                            "这是当前'DC'模块的高压侧断路器2，有闭合(ON)、断开(OFF)两种状态\nThis is the high voltage side circuit breaker 2 of the current 'DC' module, with two states: ON and OFF.");
    Breaker2_Sta_Boost->add_Specification();
    Contator_Sta_Boost = new Specification(this,Contator_Sta_Boost_explain, myTable, line++, column, \
                                            "OFF", "Contator Status Boost", \
                                            "这是当前'DC'模块的高压侧接触器，有闭合(ON)、断开(OFF)两种状态\nThis is the high voltage side contactor of the current 'DC' module, with two states: ON and OFF.");
    Contator_Sta_Boost->add_Specification();
    Breaker1_Sta_Buck = new Specification(this,Breaker1_Sta_Buck_explain, myTable, line++, column, \
                                            "OFF", "Breaker1 Status Buck", \
                                            "这是当前'DC'模块的低压侧断路器1，有闭合(ON)、断开(OFF)两种状态\nThis is the low-voltage side circuit breaker 1 of the current 'DC' module, which has two states: ON and OFF.");
    Breaker1_Sta_Buck->add_Specification();
    Breaker2_Sta_Buck = new Specification(this,Breaker2_Sta_Buck_explain, myTable, line++, column, \
                                            "OFF", "Breaker2 Status Buck", \
                                            "这是当前'DC'模块的低压侧断路器2，有闭合(ON)、断开(OFF)两种状态\nThis is the low-voltage side circuit breaker 2 of the current 'DC' module, with two states: ON and OFF.");
    Breaker2_Sta_Buck->add_Specification();
    Contator_Sta_Buck = new Specification(this,Contator_Sta_Buck_explain, myTable, line++, column, \
                                            "OFF", "Contator Status Buck", \
                                            "这是当前'DC'模块的低压侧接触器，有闭合(ON)、断开(OFF)两种状态\nThis is the low voltage side contactor for the current 'DC' module, with two states: ON and OFF.");
    Contator_Sta_Buck->add_Specification();
    Run_mode = new Specification(this,Run_mode_explain, myTable, line++, column, \
                                            "Buck", "Run mode", \
                                            "这是当前'DC'模块的运行模式，有休息(Rest)、降压(Buck)、升压(Boost)三种状态\nThis is the current operation mode of the 'DC' module, including Rest, Buck and Boost states.");
    Run_mode->add_Specification();
    DCDC_Converter_ava = new Specification(this,DCDC_Converter_ava_explain, myTable, line++, column, \
                                            "Disable", "DCDC Converter available", \
                                            "这是当前'DC'模块的'DCDC'变流器开机使能，有使能(Enable)、禁止(Disable)两种状态\nThis is the power-on Enable of the 'DCDC' converter of the current 'DC' module. There are two states: enable and Disable.");
    DCDC_Converter_ava->add_Specification();
    Soft_Start_Sta_Boost = new Specification(this,Soft_Start_Sta_Boost_explain, myTable, line++, column, \
                                            "Not starting", "Soft Start Status Boost", \
                                            "这是当前'DC'模块的高压侧软启动状态，有未启动(Not starting)、软启中(Soft start)、软启完成(Soft start completion)三种状态\nThis is the current high voltage side soft start state of the 'DC' module. There are three states: Not starting, Soft start, and Soft Start completion.");
    Soft_Start_Sta_Boost->add_Specification();
    Soft_Start_Sta_Buck = new Specification(this,Soft_Start_Sta_Buck_explain, myTable, line++, column, \
                                            "Not starting", "Soft Start Status Buck", \
                                            "这是当前'DC'模块的低压侧软启动状态，有未启动(Not starting)、软启中(Soft start)、软启完成(Soft start completion)三种状态\nThis is the soft start state of the low voltage side of the current 'DC' module. There are three states: Not starting, Soft start, and Soft Start completion.");
    Soft_Start_Sta_Buck->add_Specification();
    Converter_Status_V = new Specification(this,Converter_Status_V_explain, myTable, line++, column, \
                                            "Turn off", "Converter Status", \
                                            "这是当前'DC'模块的工作模式状态，有关闭(Turn off)、待机(Standby)、恒压(Constant VOL)、恒流(Constant CUR)、追踪最佳功率点(MPPT)、故障修复(Fault Recovery)六种状态\nThis is the working mode state of the current 'DC' module, including six states: Turn off, Standby, Constant VOL, Constant CUR, optimal power point tracking and Fault Recovery.");
    Converter_Status_V->add_Specification();
    ModeLock = new Specification(this,ModeLock_explain, myTable, line++, column, \
                                            "OFF", "ModeLock", \
                                            "这是当前'DC'模块的模块锁状态，有闭合(ON)、断开(OFF)两种状态\nThis is the lock status of the current 'DC' module, with two states: ON and OFF.");
    ModeLock->add_Specification();

}

void MyWidget::DC_AC_Parameter_tab(QTableWidget *myTable)
{
    Grid_connected_mode = new Specification(this,Grid_connected_mode_explain, myTable, 0, 1, \
                                            "automatic", "Grid connected mode of PCS", \
                                            "这是PCS并网方式，一共有三项可选：自动(automatic)，并网(On)，离网(Off),选择'自动'时将自动识别当前的并网方式\n并网:与相邻电力系统发送电气连接，并进行功率交换(如与电网连接)\n离网：不依赖电网而独立运行(不接电网)\nThis is the PCS grid connection mode, there are three options: automatic(automatic), On(On), Off(Off), select 'automatic' will automatically identify the current grid connection mode \n grid connection: send electrical connection with the adjacent power system, and carry out power exchange (such as connection with the grid)\n off-grid: To operate independently of the grid (not connected to the grid).");
    Grid_connected_mode->add_Specification();

    Constant_power = new Specification(this,Constant_power_explain, myTable, 1, 1, \
                                       "0", "Constant power(AC)", \
                                       "这是恒功率，可以通过修改这项数值来设置机器的功率,当控制功率方式选择正负功率(CP_N&P)时,正数表示放电，负数表示充电\nThis is constant power, and the power of the machine can be set by modifying this value. When the power control mode is positive and negative (CP_N&P), the positive number means discharge and the negative number means charge.");
    Constant_power->add_Specification();

    Charging_and_discharging = new Specification(this,Charging_and_discharging_explain, myTable, 2, 1, \
                                                 "Charge", "Charging and discharging", \
                                                 "这是充放电，一共有两项可选：充电(Charge)，放电(Discharge)，根据此处选择决定是充电还是放电，当控制功率方式选择恒功率(CP_P)时，此项可调\nThis is Charge and Discharge, and there are two options: charge(Charge) and discharge(Discharge). Charge or discharge can be determined according to the choice here. When the power control mode is Constant power(CP_P), this option can be adjusted.");
    Charging_and_discharging->add_Specification();

    Work_mode = new Specification(this,Work_mode_explain, myTable, 3, 1, \
                                  "Manual", "Operational mode", \
                                  "这是工作模式，有三项可选：自发自用(System for self-use)，电池优先(Battery priority)，削峰填谷(Peak shaving)\n选择自发自用模式时，优先给负载供电\n选择电池优先模式时，优先给电池充电\n削峰填谷模式时，用电高峰时优先使用电池给负载供电，用电低谷时优先给电池充电\nThis is the working mode with three options: System for self use, Battery priority, and Peak shaving; When selecting the self use mode, priority is given to supplying power to the load; When selecting battery priority mode, priority is given to charging the battery; During peak shaving and valley filling mode, priority is given to using batteries to supply power to the load during peak electricity usage, and to charging batteries during low electricity usage.");
    Work_mode->add_Specification();

    Output_power_factor = new Specification(this,Output_power_factor_explain, myTable, 4, 1, \
                                            "1", "Output power factor", \
                                            "这是输出功率因数，是用来衡量电气设备输出效率高低的一个系数，不可调\nThis is the output power factor, which is a coefficient used to measure the output efficiency of electrical equipment and cannot be adjusted.");
    Output_power_factor->add_Specification();

    Output_reactive_power = new Specification(this,Output_reactive_power_explain, myTable, 5, 1, \
                                              "1", "Output reactive power", \
                                              "这是输出无功功率，它表达了输出交流电源能量与磁场或电场能量交换的最大速率，不可调\nThis is the output reactive power, which expresses the maximum rate at which the output AC power source energy is exchanged with the magnetic or electric field energy and is not adjustable.");
    Output_reactive_power->add_Specification();

    Constant_current = new Specification(this,Constant_current_explain, myTable, 6, 1, \
                                         "100", "Constant current", \
                                         "这是恒流值，当控制功率方式选择恒流(CC)时，此项可调，电流值稳定为此值\nThis is the constant current value, when the control power mode selects constant current (CC), this can be adjusted, the current value is stable for this value.");
    Constant_current->add_Specification();

    Constant_voltage = new Specification(this,Constant_voltage_explain, myTable, 7, 1, \
                                         "600", "Constant voltage", \
                                         "这是恒压值，当控制功率方式选择恒压(CV)时，此项可调，电压值稳定为此值\nThis is the constant voltage value, when the control power mode selects constant voltage (CV), this can be adjusted, the voltage value is stable for this value.");
    Constant_voltage->add_Specification();

    Control_mode = new Specification(this,Control_mode_explain, myTable, 0, 4, \
                                     "Local", "Control mode", \
                                     "这是工作模式，有两项可选：本地(Local)，远程(Remote)，选择'本地'时，可在本地修改系统参数，选择'远程'时，可通过EMS、485等进行远程修改参数\nThis is the working mode, there are two options: Local (Local), Remote (Remote), select 'local', you can modify the system parameters locally, select 'remote', you can modify the parameters remotely through EMS, 485, etc.");
    Control_mode->add_Specification();

    Machine_number = new Specification(this,Machine_number_explain, myTable, 1, 4, \
                                       "Master_00", "Machine number", \
                                       "这是设备号，可以选择主机(Master)或者从机(Slave)，其中主机为Master_00，其余八项Slave_01~Slave_08均为从机\nThis is the device number, and you can choose host(Master) or slave(Slave), where master is Master_00 and Slave_01 to Slave_08 are slaves.");
    Machine_number->add_Specification();

    Parallel = new Specification(this,Parallel_explain, myTable, 2, 4, \
                                 "Disable", "Parallel", \
                                 "这是并机模式，有两项可选：使能(Enable)，禁止(Disable)，开启并机时，可将多台设备联合到一起为负载供电\nThis is the parallel mode, with two options: enabled(Enable), disabled(Disable), and when enabled, multiple devices can be combined to power the load.");
    Parallel->add_Specification();

    Unbalance_power_enable = new Specification(this,Unbalance_power_enable_explain, myTable, 3, 4, \
                                               "Disable", "Run time enable", \
                                               "这是运行时段使能，有两项可选：使能(Enable)，禁止(Disable)\nThis is to Enable the run time function. Two options are available: Enable and Disable.");
    Unbalance_power_enable->add_Specification();

}

void MyWidget::DCDC_Paramter_tab(QTableWidget *myTable)
{
    //DCDC工作模式说明
    Work_parttern = new Specification(this,Work_parttern_explain, myTable, 0, 1, \
                                      "MPPT", "Work parttern", \
                                      "这是'DC'模块的工作模式，有休息(Rest)、恒压(CV)、恒流(CC)、追踪最佳功率点(MPPT)四种状态\nThis is the working mode of 'DC' module, which has four states: Rest (Rest), constant voltage (CV), constant current (CC) and tracking optimal power point (MPPT).");
    Work_parttern->add_Specification();

    //升/降压说明
    Boost_or_Buck = new Specification(this,Boost_or_Buck_explain, myTable, 1, 1, \
                                      "Buck", "Boost or Buck", \
                                      "这是'DC'模块的运行模式，有休息(Rest)、降压(Buck)、升压(Boost)三种模式，可根据项目需求，修改成休息(Rest)、降压(Buck)或者升压(Boost)模式\nThis is the operation mode of 'DC' module, which has three modes: Rest, Buck and Boost. It can be modified into Rest, Buck or Boost mode according to project requirements.");
    Boost_or_Buck->add_Specification();

    //电池充放电模式说明
    Bat_Charging_or_discharging_Model = new Specification(this,Bat_Charging_or_discharging_Model_explain, myTable, 2, 1, \
                                                          "Discharging", "Bat Charging or discharging Model", \
                                                          "这是电池充放电模式，有充电(Charging)，放电(Discharging)两种模式\nThis is the battery Charging and Discharging mode. There are two charging and discharging modes.");
    Bat_Charging_or_discharging_Model->add_Specification();

    //DCDC容量说明
    DCDC_Capacity = new Specification(this,DCDC_Capacity_explain, myTable, 3, 1, \
                                      "50", "DCDC Capacity", \
                                      "这是'DC'模块的容量\nThis is the capacity of the 'DC' module.");
    DCDC_Capacity->add_Specification();

    //电池位置说明
    Battery_position = new Specification(this,Battery_position_explain, myTable, 0, 4, \
                                         "LowSide", "Battery position", \
                                         "这是当前电池所处位置，需要根据当前选择的'DC'模块运行模式来进行选择；如果选择了降压(Buck)，请选择低压侧(LowSide)；如果选择了升压(Boost)，请选择高压侧(HightSide)；如果选择了休息(Rest)，请选择无(NON)\nThis is the position of the current battery, which needs to be selected according to the operation mode of the 'DC' module currently selected. If Buck is selected, select the LowSide. If Boost is selected, select HightSide. If Rest is selected, please select NON.");
    Battery_position->add_Specification();

    //电压等级说明
    Voltage_level = new Specification(this,Voltage_level_explain, myTable, 1, 4, \
                                      "300", "Voltage level", \
                                      "这是'DC'模块的电压等级\nThis is the voltage level of the 'DC' module.");
    Voltage_level->add_Specification();

    //电流值说明
    Current_value = new Specification(this,Current_value_explain, myTable, 2, 4, \
                                      "60", "Current value", \
                                      "这是'DC'模块的电流值\nThis is the current value of the 'DC' module.");
    Current_value->add_Specification();
}
//自动运行 绘制button
void MyWidget::AutoOperation(QTableWidget *myTable)
{
    Specification * temp[]  ={Check1,Check2,Check3,Check4,Check5,Check6,Check7,Check8,Check9,Check10,\
                           Check11,Check12,Check13,Check14,Check15,Check16,Check17,Check18,Check19,Check20};

    QPushButton * temp2[] ={Check1_explain,Check2_explain,Check3_explain,Check4_explain,Check5_explain,\
                           Check6_explain,Check7_explain,Check8_explain,Check9_explain,Check10_explain,\
                           Check11_explain,Check12_explain,Check13_explain,Check14_explain,Check15_explain,\
                           Check16_explain,Check17_explain,Check18_explain,Check19_explain,Check20_explain};

    Specification * temp4[]  ={Start_T1,Start_T2,Start_T3,Start_T4,Start_T5,Start_T6,Start_T7,Start_T8,Start_T9,Start_T10,\
                           Start_T11,Start_T12,Start_T13,Start_T14,Start_T15,Start_T16,Start_T17,Start_T18,Start_T19,Start_T20};

    QPushButton * temp5[] ={Start_T1_explain,Start_T2_explain,Start_T3_explain,Start_T4_explain,Start_T5_explain,\
                           Start_T6_explain,Start_T7_explain,Start_T8_explain,Start_T9_explain,Start_T10_explain,\
                           Start_T11_explain,Start_T12_explain,Start_T13_explain,Start_T14_explain,Start_T15_explain,\
                           Start_T16_explain,Start_T17_explain,Start_T18_explain,Start_T19_explain,Start_T20_explain};

    Specification * temp7[]  ={End_T1,End_T2,End_T3,End_T4,End_T5,End_T6,End_T7,End_T8,End_T9,End_T10,\
                           End_T11,End_T12,End_T13,End_T14,End_T15,End_T16,End_T17,End_T18,End_T19,End_T20};

    QPushButton * temp8[] ={End_T1_explain,End_T2_explain,End_T3_explain,End_T4_explain,End_T5_explain,\
                           End_T6_explain,End_T7_explain,End_T8_explain,End_T9_explain,End_T10_explain,\
                           End_T11_explain,End_T12_explain,End_T13_explain,End_T14_explain,End_T15_explain,\
                           End_T16_explain,End_T17_explain,End_T18_explain,End_T19_explain,End_T20_explain};

    Specification * temp10[]  ={State1,State2,State3,State4,State5,State6,State7,State8,State9,State10,\
                           State11,State12,State13,State14,State15,State16,State17,State18,State19,State20};

    QPushButton * temp11[] ={State1_explain,State2_explain,State3_explain,State4_explain,State5_explain,\
                           State6_explain,State7_explain,State8_explain,State9_explain,State10_explain,\
                           State11_explain,State12_explain,State13_explain,State14_explain,State15_explain,\
                           State16_explain,State17_explain,State18_explain,State19_explain,State20_explain};

    Specification * temp13[]  ={Power1,Power2,Power3,Power4,Power5,Power6,Power7,Power8,Power9,Power10,\
                           Power11,Power12,Power13,Power14,Power15,Power16,Power17,Power18,Power19,Power20};

    QPushButton * temp14[] ={Power1_explain,Power2_explain,Power3_explain,Power4_explain,Power5_explain,\
                           Power6_explain,Power7_explain,Power8_explain,Power9_explain,Power10_explain,\
                           Power11_explain,Power12_explain,Power13_explain,Power14_explain,Power15_explain,\
                           Power16_explain,Power17_explain,Power18_explain,Power19_explain,Power20_explain};

    for(int i=0;i<20;i++)
    {
        QString temp3 = QString("Check%1").arg(i+1);
        QString temp6 = QString("Start_T%1").arg(i+1);
        QString temp9 = QString("End_T%1").arg(i+1);
        QString temp12 = QString("State%1").arg(i+1);
        QString temp15 = QString("Power%1").arg(i+1);

        QString temp16 = QString("%1:00").arg(i+8);
        QString temp17 = QString("%1:00").arg(i+9);

        if(i<5)
            temp[i] = new Specification(this,temp2[i], myTable, i, 0, \
                                                "√", temp3, \
                                                "这是'使能'，选择后将在指定的时间以指定的功率开启指定的状态，并在指定的时间结束\nThis is' Enable ', which will enable the specified state at the specified time with the specified power, and end at the specified time.");
        else
            temp[i] = new Specification(this,temp2[i], myTable, i, 0, \
                                                "", temp3, \
                                                "这是'使能'，选择后将在指定的时间以指定的功率开启指定的状态，并在指定的时间结束\nThis is' Enable ', which will enable the specified state at the specified time with the specified power, and end at the specified time.");
        temp[i]->add_Specification();
        temp4[i] = new Specification(this,temp5[i], myTable, i, 1, \
                                                temp16, temp6, \
                                                "这是开始时间，将在此时间开始以指定的功率进入指定的状态\nThis is the start time at which the specified state will begin to be entered with the specified power.");
        temp4[i]->add_Specification();
        temp7[i] = new Specification(this,temp8[i], myTable, i, 2, \
                                                temp17, temp9, \
                                                "这是结束时间，将在此时间结束由'开始时间'开始的状态\nThis is the end time at which the state started with the 'start time' will end.");
        temp7[i]->add_Specification();
        temp10[i] = new Specification(this,temp11[i], myTable, i, 3, \
                                                    "System for self-use", temp12, \
                                                    "这是状态，将在工作时间执行此状态，有三种可供选择，分别为充电(charge)、放电(discharge)、自动(Automatic)\nThis is the state, which will be executed during working hours.  There are three options: charge（charge）, discharge（discharge）, and Automatic（Automatic）.");
        temp13[i] = new Specification(this,temp14[i], myTable, i, 4, \
                                                    "10", temp15, \
                                                    "这是工作功率，此状态下工作时根据工作状态执行此功率，正数为放电，负数为充电\nThis is the working power, which is executed according to the working state when working in this state, the positive number is discharging, and the negative number is charging.");
        temp10[i]->add_Specification();
        temp13[i]->add_Specification();
    }

}
//系统消息 绘制button
void MyWidget::SystemMessages(QTableWidget *myTable)
{
    int line=0;int column=1;
    MonitoringVersion = new Specification(this,MonitoringVersion_explain, myTable, line++, column, \
                                     "V103B500D004", "Monitoring software version", \
                                     "这是监控版本\nThis is the name of the manufacturer.");
    MonitoringVersion->add_Specification();
    DCAC_SysProtocol_Version = new Specification(this,DCAC_SysProtocol_Version_explain, myTable, line++, column, \
                                     "V001B001D001", "Manufacturer name", \
                                     "这是协议版本号\nThis is the name of the manufacturer.");
    DCAC_SysProtocol_Version->add_Specification();
    DCAC_ConverterVersion = new Specification(this,DCAC_ConverterVersion_explain, myTable, line++, column, \
                                     "V105B500D008", "Manufacturer name", \
                                     "这是变流器软件版本\nThis is the name of the manufacturer.");
    DCAC_ConverterVersion->add_Specification();
    DCAC_CPLD_Version = new Specification(this,DCAC_CPLD_Version_explain, myTable, line++, column, \
                                     "V001B001D000", "Manufacturer name", \
                                     "这是CPLD软件版本\nThis is the name of the manufacturer.");
    DCAC_CPLD_Version->add_Specification();
    DCDC_SysProtocol_Version = new Specification(this,DCDC_SysProtocol_Version_explain, myTable, line++, column, \
                                     "V001B001D001", "Manufacturer name", \
                                     "这是协议版本号\nThis is the name of the manufacturer.");
    DCDC_SysProtocol_Version->add_Specification();
    DCDC_ConverterVersion = new Specification(this,DCDC_ConverterVersion_explain, myTable, line++, column, \
                                     "V105B500D008", "Manufacturer name", \
                                     "这是变流器软件版本\nThis is the name of the manufacturer.");
    DCDC_ConverterVersion->add_Specification();
    DCDC_CPLD_Version = new Specification(this,DCDC_CPLD_Version_explain, myTable, line++, column, \
                                     "V001B001D000", "Manufacturer name", \
                                     "这是CPLD软件版本\nThis is the name of the manufacturer.");
    DCDC_CPLD_Version->add_Specification();
    SN = new Specification(this,SN_explain, myTable, line++, column, \
                                     "F12200000001", "Manufacturer name", \
                                     "这是SN,即产品序列号\nThis is the name of the manufacturer.");
    SN->add_Specification();
}

/******数据报表说明******/
void MyWidget::DataReportMessages(QTableWidget *myTable)
{
    int line=0, column=1;
    PV_power_generation_Day = new Specification(this,PV_power_generation_Day_explain, myTable, line, column++, \
                                            "0", "PV power generation Day", \
                                            "这是光伏今日的发电量\nThis is the electricity generation of photovoltaic today.");
    PV_power_generation_Day->add_Specification();
    PV_power_generation_Month = new Specification(this,PV_power_generation_Month_explain, myTable, line, column++, \
                                            "0", "PV power generation Month", \
                                            "这是光伏这个月的发电量\nThis is the amount of photovoltaic power generated this month.");
    PV_power_generation_Month->add_Specification();
    PV_power_generation_Year = new Specification(this,PV_power_generation_Year_explain, myTable, line, column++, \
                                            "0", "PV power generation Year", \
                                            "这是光伏今年的发电量\nThis is how much photovoltaic will produce this year.");
    PV_power_generation_Year->add_Specification();
    PV_power_generation_Total = new Specification(this,PV_power_generation_Total_explain, myTable, line, column++, \
                                             "0", "PV power generation Total", \
                                             "这是光伏的总发电量\nThis is the total amount of photovoltaic power produced.");
    PV_power_generation_Total->add_Specification();

    line++;
    column = 1;
    Load_Discharge_Day = new Specification(this,Load_Discharge_Day_explain, myTable, line, column++, \
                                            "0", "Load Discharge Day", \
                                            "这是负载今日的用电量\nThis is the electricity consumption of the load today.");
    Load_Discharge_Day->add_Specification();
    Load_Discharge_Month = new Specification(this,Load_Discharge_Month_explain, myTable, line, column++, \
                                            "0", "Load Discharge Month", \
                                            "这是负载这个月的用电量\nThis is the electricity consumption of the load this month.");
    Load_Discharge_Month->add_Specification();
    Load_Discharge_Year = new Specification(this,Load_Discharge_Year_explain, myTable, line, column++, \
                                            "0", "Load Discharge Year", \
                                            "这是负载今年的用电量\nThis is how much electricity the load is using this year.");
    Load_Discharge_Year->add_Specification();
    Load_Discharge_Total = new Specification(this,Load_Discharge_Total_explain, myTable, line, column++, \
                                            "0", "Load Discharge Total", \
                                            "这是负载的总用电量\nThis is the total power consumption of the load.");
    Load_Discharge_Total->add_Specification();

    line++;
    column = 1;
    Battery_Charge_Day = new Specification(this,Battery_Charge_Day_explain, myTable, line, column++, \
                                            "0", "Battery Charge Day", \
                                            "这是电池今日的充电量\nThis is the charging capacity of the battery today.");
    Battery_Charge_Day->add_Specification();
    Battery_Charge_Month = new Specification(this,Battery_Charge_Month_explain, myTable, line, column++, \
                                            "0", "Load Discharge Month", \
                                            "这是电池这个月的充电量\nThis is how much the battery has been charged for the month.");
    Battery_Charge_Month->add_Specification();
    Battery_Charge_Year = new Specification(this,Battery_Charge_Year_explain, myTable, line, column++, \
                                            "0", "Load Discharge Year", \
                                            "这是电池今年的充电量\nThis is how much the battery has been charged this year.");
    Battery_Charge_Year->add_Specification();
    Battery_Charge_Total = new Specification(this,Battery_Charge_Total_explain, myTable, line, column++, \
                                            "0", "Load Discharge Total", \
                                            "这是电池的总充电量\nThis is the total charge of the battery.");
    Battery_Charge_Total->add_Specification();

    line++;
    column = 1;
    Battery_Discharge_Day = new Specification(this,Battery_Discharge_Day_explain, myTable, line, column++, \
                                            "0", "Battery Charge Day", \
                                            "这是电池今日的放电量\nThis is the discharging capacity of the battery today.");
    Battery_Discharge_Day->add_Specification();
    Battery_Discharge_Month = new Specification(this,Battery_Discharge_Month_explain, myTable, line, column++, \
                                            "0", "Load Discharge Month", \
                                            "这是电池这个月的放电量\nThis is how much the battery has been discharged for the month.");
    Battery_Discharge_Month->add_Specification();
    Battery_Discharge_Year = new Specification(this,Battery_Discharge_Year_explain, myTable, line, column++, \
                                            "0", "Load Discharge Year", \
                                            "这是电池今年的放电量\nThis is how much the battery has been discharged this year.");
    Battery_Discharge_Year->add_Specification();
    Battery_Discharge_Total = new Specification(this,Battery_Discharge_Total_explain, myTable, line, column++, \
                                            "0", "Load Discharge Total", \
                                            "这是电池的总放电量\nThis is the total discharge of the battery.");
    Battery_Discharge_Total->add_Specification();

    line++;
    column = 1;
    Grid_Charge_Day = new Specification(this,Grid_Charge_Day_explain, myTable, line, column++, \
                                            "0", "Grid Charge Day", \
                                            "这是今日从电网充电的充电量\nThis is the amount of charging from the grid today.");
    Grid_Charge_Day->add_Specification();
    Grid_Charge_Month = new Specification(this,Grid_Charge_Month_explain, myTable, line, column++, \
                                            "0", "Grid Charge Month", \
                                            "这是这个月从电网充电的充电量\nThis is the amount of charging from the grid for the month.");
    Grid_Charge_Month->add_Specification();
    Grid_Charge_Year = new Specification(this,Grid_Charge_Year_explain, myTable, line, column++, \
                                            "0", "Grid Charge Year", \
                                            "这是今年从电网充电的充电量\nThis is the amount of charging from the grid this year.");
    Grid_Charge_Year->add_Specification();
    Grid_Charge_Total = new Specification(this,Grid_Charge_Total_explain, myTable, line, column++, \
                                            "0", "Grid Charge Total", \
                                            "这是从电网充电的总充电量\nThis is the total amount of charge from the grid.");
    Grid_Charge_Total->add_Specification();

    line++;
    column = 1;
    Grid_Discharge_Day = new Specification(this,Grid_Discharge_Day_explain, myTable, line, column++, \
                                            "0", "Grid Charge Day", \
                                            "这是今日给电网放电的放电量\nThis is the amount of energy being discharged into the grid today.");
    Grid_Discharge_Day->add_Specification();
    Grid_Discharge_Month = new Specification(this,Grid_Discharge_Month_explain, myTable, line, column++, \
                                            "0", "Grid Charge Month", \
                                            "这是这个月给电网放电的放电量\nThis is the amount of electricity discharged into the grid this month.");
    Grid_Discharge_Month->add_Specification();
    Grid_Discharge_Year = new Specification(this,Grid_Discharge_Year_explain, myTable, line, column++, \
                                            "0", "Grid Charge Year", \
                                            "这是今年给电网放电的放电量\nThis is the amount of energy that has been discharged into the grid this year.");
    Grid_Discharge_Year->add_Specification();
    Grid_Discharge_Total = new Specification(this,Grid_Discharge_Total_explain, myTable, line, column++, \
                                            "0", "Grid Charge Total", \
                                            "这是给电网放电的总放电量\nThis is the total amount of discharge to the grid.");
    Grid_Discharge_Total->add_Specification();
}

//历史记录   绘制button
void MyWidget::HistoryRecord(QTableWidget *myTable)
{
    int line=0;int column=0;
    Grade = new Specification(this,Grade_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade->add_Specification();
    Grade2 = new Specification(this,Grade2_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade2->add_Specification();
    Grade3 = new Specification(this,Grade3_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade3->add_Specification();
    Grade4 = new Specification(this,Grade4_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade4->add_Specification();
    Grade5 = new Specification(this,Grade5_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade5->add_Specification();
    Grade6 = new Specification(this,Grade6_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade6->add_Specification();
    Grade7 = new Specification(this,Grade7_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade7->add_Specification();
    Grade8 = new Specification(this,Grade8_explain, myTable, line++, column, \
                                                    "0", "Level", \
                                                    "这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息\nThis is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");
    Grade8->add_Specification();
    line=0;
    column=1;
    StartTime = new Specification(this,StartTime_explain, myTable, line++, column, \
                                                    "2023.5.6 15:49:50", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime->add_Specification();
    StartTime2 = new Specification(this,StartTime2_explain, myTable, line++, column, \
                                                    "2023.5.6 15:48:18", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime2->add_Specification();
    StartTime3 = new Specification(this,StartTime3_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime3->add_Specification();
    StartTime4 = new Specification(this,StartTime4_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime4->add_Specification();
    StartTime5 = new Specification(this,StartTime5_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime5->add_Specification();
    StartTime6 = new Specification(this,StartTime6_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:56", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime6->add_Specification();
    StartTime7 = new Specification(this,StartTime7_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:38", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime7->add_Specification();
    StartTime8 = new Specification(this,StartTime8_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:38", "Start Time", \
                                                    "这是事件开始时间，表示这条记录从这个时间开始出现\nThis is the event start time, which means that the record started appearing at this time.");
    StartTime8->add_Specification();
    line=0;
    column=2;
    EndTime = new Specification(this,EndTime_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime->add_Specification();
    EndTime2 = new Specification(this,EndTime2_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime2->add_Specification();
    EndTime3 = new Specification(this,EndTime3_explain, myTable, line++, column, \
                                                    "...", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime3->add_Specification();
    EndTime4 = new Specification(this,EndTime4_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime4->add_Specification();
    EndTime5 = new Specification(this,EndTime5_explain, myTable, line++, column, \
                                                    "...", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime5->add_Specification();
    EndTime6 = new Specification(this,EndTime6_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime6->add_Specification();
    EndTime7 = new Specification(this,EndTime7_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime7->add_Specification();
    EndTime8 = new Specification(this,EndTime8_explain, myTable, line++, column, \
                                                    "-", "End Time", \
                                                    "这是事件结束时间，表示这条记录的结束时间,'...'表示无结束时间\nThis is the event end time, which means the end time of this record,'... 'means no end time.");
    EndTime8->add_Specification();
    line=0;
    column=3;
    Describe = new Specification(this,Describe_explain, myTable, line++, column, \
                                                    "CAN communication failure", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe->add_Specification();
    Describe2 = new Specification(this,Describe2_explain, myTable, line++, column, \
                                                    "CAN communication failure", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe2->add_Specification();
    Describe3 = new Specification(this,Describe3_explain, myTable, line++, column, \
                                                    "Fire alarm (High temp. alarm)", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe3->add_Specification();
    Describe4 = new Specification(this,Describe4_explain, myTable, line++, column, \
                                                    "CAN communication failure", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe4->add_Specification();
    Describe5 = new Specification(this,Describe5_explain, myTable, line++, column, \
                                                    "PowerMeter Comm fualttLead-acid abnormal", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe5->add_Specification();
    Describe6 = new Specification(this,Describe6_explain, myTable, line++, column, \
                                                    "CAN communication failure", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe6->add_Specification();
    Describe7 = new Specification(this,Describe7_explain, myTable, line++, column, \
                                                    "Fire alarm (High temp. alarm)", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe7->add_Specification();
    Describe8 = new Specification(this,Describe8_explain, myTable, line++, column, \
                                                    "PowerMeter Comm fualttLead-acid abnormal", "Description", \
                                                    "这是事件描述，当有告警信息时，会将告警信息记录在这里\nThis is the event description, when there is an alarm information, the alarm information will be recorded here.");
    Describe8->add_Specification();
}

//操作日志 绘制button
void MyWidget::OperationLog_tab(QTableWidget *myTable)
{
    int line=0;int column=0;
    ModificationTime = new Specification(this,ModificationTime_explain, myTable, line++, column, \
                                                    "2023-05-12 11:32:45", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime->add_Specification();
    ModificationTime2 = new Specification(this,ModificationTime2_explain, myTable, line++, column, \
                                                    "2023-05-12 11:32:33", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime2->add_Specification();
    ModificationTime3 = new Specification(this,ModificationTime3_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:24", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime3->add_Specification();
    ModificationTime4 = new Specification(this,ModificationTime4_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:21", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime4->add_Specification();
    ModificationTime5 = new Specification(this,ModificationTime5_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:10", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime5->add_Specification();
    ModificationTime6 = new Specification(this,ModificationTime6_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:07", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime6->add_Specification();
    ModificationTime7 = new Specification(this,ModificationTime7_explain, myTable, line++,column, \
                                                    "2023-05-11 17:21:16", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime7->add_Specification();
    ModificationTime8 = new Specification(this,ModificationTime8_explain, myTable, line++, column, \
                                                    "2023-05-11 11:21:02", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime8->add_Specification();
    ModificationTime9 = new Specification(this,ModificationTime9_explain, myTable, line++, column, \
                                                    "2023-05-11 11:20:58", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime9->add_Specification();
    ModificationTime10 = new Specification(this,ModificationTime10_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:22", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime10->add_Specification();
    ModificationTime11 = new Specification(this,ModificationTime11_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:18", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime11->add_Specification();
    ModificationTime12 = new Specification(this,ModificationTime12_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:14", "ModificationTime", \
                                                    "系统设置修改时的时间\nTime when the system Settings are modified");
    ModificationTime12->add_Specification();
    line=0;
    column=1;
    EventRecord = new Specification(this,EventRecord_explain, myTable, line++, column, \
                                                    "Power control type：CP_P->CP_N&&P", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord->add_Specification();
    EventRecord2 = new Specification(this,EventRecord2_explain, myTable, line++, column, \
                                                    "Power control type：CP_N&&P->CP_P", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord2->add_Specification();
    EventRecord3 = new Specification(this,EventRecord3_explain, myTable,line++, column, \
                                                    "Grid Fre Upper limit：0.2->3", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord3->add_Specification();
    EventRecord4 = new Specification(this,EventRecord4_explain, myTable, line++, column, \
                                                    "Grid Fre Upper limit：3->0.2", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord4->add_Specification();
    EventRecord5 = new Specification(this,EventRecord5_explain, myTable, line++, 1, \
                                                    "Voltage protection Lower limit：-10->-15", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord5->add_Specification();
    EventRecord6 = new Specification(this,EventRecord6_explain, myTable, line++, column, \
                                                    "Voltage protection Lower limit：-15->-10", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord6->add_Specification();
    EventRecord7 = new Specification(this,EventRecord7_explain, myTable, line++, column, \
                                                    "Operation mode：Prevent countercurrnet->Peak valley", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord7->add_Specification();
    EventRecord8 = new Specification(this,EventRecord8_explain, myTable, line++, column, \
                                                    "Operation mode：UPS->Prevent countercurrnet", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord8->add_Specification();
    EventRecord9 = new Specification(this,EventRecord9_explain, myTable, line++, column, \
                                                    "Operation mode：Manual->UPS", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord9->add_Specification();
    EventRecord10 = new Specification(this,EventRecord10_explain, myTable, line++, column, \
                                                    "Operation mode：Peak valley->Manual", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord10->add_Specification();
    EventRecord11 = new Specification(this,EventRecord11_explain, myTable, line++, column, \
                                                    "Inv ON/Off-Grid：Off->automatic", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord11->add_Specification();
    EventRecord12 = new Specification(this,EventRecord12_explain, myTable, line++, column, \
                                                    "Inv ON/Off-Grid：automatic->Off", "RecordEvent", \
                                                    "这里是对系统设置进行修改时的操作记录\nHere is a record of the operation when a change is made to the system Settings.");
    EventRecord12->add_Specification();
}


/*********选中第一个模块*********/
void MyWidget::on_RTD_module_1_clicked()
{
    QMessageBox::question(this , "1", "选中第一个模块，查看第一个模块的实时数据\nChoose the first module to view the real-time data of the first module", "OK");
}

/*********选中第二个模块*********/
void MyWidget::on_RTD_module_2_clicked()
{
    QMessageBox::question(this , "2", "选中第二个模块，查看第二个模块的实时数据\nChoose the second module to view the real-time data of the second module", "OK");
}

void MyWidget::on_Subtract_Y_clicked()
{
    QMessageBox::question(this, "Y-"\
                          ,"查看上一年的数据，点击后将显示当前显示年份的上一年的数据\nTo view the previous year's data, click on it to display the previous year's data for the current displayed year.", "OK");
}

void MyWidget::on_Add_Y_clicked()
{
    QMessageBox::question(this, "Y+"\
                          ,"查看下一年的数据，点击后将显示当前显示年份的下一年的数据\nTo view the data for the next year, click on it to display the data for the next year of the current displayed year.", "OK");
}

void MyWidget::on_Subtract_M_clicked()
{
    QMessageBox::question(this, "M-"\
                          ,"查看上一个月的数据，点击后将显示当前显示月份的上一个月的数据\nTo view the data of the previous month, click on it to display the data of the previous month of the current displayed month.", "OK");
}

void MyWidget::on_Add_M_clicked()
{
    QMessageBox::question(this, "M+"\
                          ,"查看下一个月的数据，点击后将显示当前显示月份的下一个月的数据\nTo view the data for the next month, click to display the data for the next month of the current displayed month.", "OK");
}

void MyWidget::on_Subtract_D_clicked()
{
    QMessageBox::question(this, "D-"\
                          ,"查看上一日的数据，点击后将显示当前日的上一日的数据\nTo view the data of the previous day. Click to display the data of the previous day of the current day.", "OK");
}

void MyWidget::on_Add_D_clicked()
{
    QMessageBox::question(this, "D+"\
                          ,"查看下一日的数据，点击后将显示当前日的下一日的数据\nTo view the data of the next day. Click to display the data of the next day of the current day.", "OK");
}

void MyWidget::on_OutPut_historyFailuer_clicked()
{
    QMessageBox::question(this, "HistoricalFailure"\
                          ,"导出历史记录，点击此处将会导出历史记录到U盘里\nTo export history, click here to export history to U disk", "OK");
}

void MyWidget::on_Output_OperationLog_clicked()
{
    QMessageBox::question(this, "OperationLog"\
                          ,"导出操作日志，点击此处将会导出操作日志到U盘里\nExport operation log. Click here to export operation log to U disk.", "OK");
}

void MyWidget::on_CoulombmeterReport_btn_clicked()
{
    QMessageBox::question(this, "Coulombmeter report"\
                          ,"导出电量统计表，点击此处将会导出电量统计表到U盘里\nExport the battery statistics. Click here to export the battery statistics to the U disk.", "OK");
}

void MyWidget::on_Eject_btn_clicked()
{
    QMessageBox::question(this, "Eject Udisk"\
                          ,"退出U盘，将挂载到显控的U盘取消挂载，以保证U盘数据不会损坏\nExit the U disk and unmount the U disk mounted to the display control to ensure that the data in the U disk will not be damaged.", "OK");
}
/*********选中第一个模块*********/
void MyWidget::on_RTS_module_1_clicked()
{
    QMessageBox::question(this , "1", "选中第一个模块，查看第一个模块的实时状态\nChoose the first module to view the real-time status of the first module", "OK");
}
/*********选中第二个模块*********/
void MyWidget::on_RTS_module_2_clicked()
{
    QMessageBox::question(this , "2", "选中第二个模块，查看第二个模块的实时状态\nChoose the second module to view the real-time status of the second module", "OK");
}

void MyWidget::on_UI_Complete_Btn_clicked()//退出高级设置
{
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
}
