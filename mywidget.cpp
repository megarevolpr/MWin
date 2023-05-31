
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
    PV_1_explain                = new QPushButton;
    PV_2_explain                = new QPushButton;
    Bus_H_vol_add_explain       = new QPushButton;
    Bus_H_vol_reduce_explain    = new QPushButton;
    Bus_L_vol_add_explain       = new QPushButton;
    Bus_L_vol_reduce_explain    = new QPushButton;
    PV_IGBT_T_explain           = new QPushButton;
    NegativeInuslation_explain  = new QPushButton;
    Leakage_cur_explain         = new QPushButton;
    PV_3_explain                = new QPushButton;
    PV_4_explain                = new QPushButton;
    //电网
    Grid_vol_AB_explain         = new QPushButton;
    Grid_vol_BC_explain         = new QPushButton;
    Grid_vol_CA_explain         = new QPushButton;
    Grid_cur_A_explain          = new QPushButton;
    Grid_cur_B_explain          = new QPushButton;
    Grid_cur_C_explain          = new QPushButton;
    Grid_1_explain              = new QPushButton;
    Grid_active_power_explain   = new QPushButton;
    Grid_reactive_power_explain = new QPushButton;
    Grid_apparent_power_explain = new QPushButton;
    Grid_power_factor_explain   = new QPushButton;
    Grid_Frequency_explain      = new QPushButton;
    Grid_2_explain              = new QPushButton;
    Grid_3_explain              = new QPushButton;
    //负载
    Load_vol_AB_explain         = new QPushButton;
    Load_vol_BC_explain         = new QPushButton;
    Load_vol_CA_explain         = new QPushButton;
    Load_cur_A_explain          = new QPushButton;
    Load_cur_B_explain          = new QPushButton;
    Load_cur_C_explain          = new QPushButton;
    Load_1_explain              = new QPushButton;
    Load_active_power_explain   = new QPushButton;
    Load_reactive_power_explain = new QPushButton;
    Load_apparent_power_explain = new QPushButton;
    Load_power_factor_explain   = new QPushButton;
    Load_Frequency_explain      = new QPushButton;
    Load_2_explain              = new QPushButton;
    Load_3_explain              = new QPushButton;

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
    state1_explain      = new QPushButton;
    state2_explain      = new QPushButton;
    state3_explain      = new QPushButton;

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
    state4_explain              = new QPushButton;

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
//函数关联
void MyWidget::LinkRelationship()
{
    connect(m_menu, SIGNAL(Sent(int)), this, SLOT(My_menuAction(int)));

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
    DCAC_tab();/*系统-DCAC设置表*/
    DCDC_tab();/*系统-DCDC设置表*/
//    BatterySet_tab();/*系统-电池设置表*/

    RunTimeSet_tab();/*系统-自动运行时间设置表*/

//    History_tab();/*记录-历史记录、操作日志设置表*/

    Information_tbnt_released();/*系统-系统消息*/
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
                        << tr("CVoltage_L") << tr("Current_L")<< tr("Power_L")<< tr("PositiveInuslation")
                        << tr("-") << tr("-");
    QStringList PV_Tablist2;
    PV_Tablist2  << tr("Bus_H_Vol(+)") << tr("Bus_H_Vol(-)") << tr("Bus_L_Vol(+)")<< tr("Bus_L_Vol(-)")
                 << tr("IGBT Temp.")<< tr("NegativeInuslation")<< tr("Leakage current")<< tr("-");
    ui->RT_DCDC_tableWidget->setColumnCount(4);
    ui->RT_DCDC_tableWidget->setRowCount(PV_Tablist1.size());

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
                        << tr("Current(A)") << tr("Current(B)")<< tr("Current(C)")<< tr("-");
    QStringList RT_Grid_Tablist2;
    RT_Grid_Tablist2  << tr("Active power") << tr("Reactive power") << tr("Apparent power")<< tr("Power factor")
                        << tr("Frequency")<< tr("-")<< tr("-");
    ui->RT_Grid_tableWidget->setColumnCount(4);
    ui->RT_Grid_tableWidget->setRowCount(RT_Grid_Tablist1.size());

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
                   << tr("Current(A)") << tr("Current(B)")<< tr("Current(C)")<< tr("-");
    QStringList Load_Tablist2;
    Load_Tablist2  << tr("Active power") << tr("Reactive power") << tr("Apparent power")<< tr("Power factor")
                   << tr("Frequency")<< tr("-")<< tr("-");
    ui->RT_Load_tableWidget->setColumnCount(4);
    ui->RT_Load_tableWidget->setRowCount(Load_Tablist1.size());

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
                   << tr("DO1")<< tr("DO2")<< tr("DO3")<< tr("-")<< tr("-")<< tr("-");
    QStringList State_Tablist2;
    State_Tablist2  << tr("DCAC Converter available") << tr("DC Soft start") << tr("Converter status")<< tr("Reactive power Regulation")
                   << tr("Sleep mode")<< tr("LVRT")<< tr("DI1")<< tr("DI2")<< tr("DI3")<< tr("DI4")<< tr("DI5")<< tr("DI6");
    QStringList State_Tablist3;
    State_Tablist3  << tr("Breaker1 status boost") << tr("Breaker2 status boost") << tr("Contactor status boost")<< tr("Breaker1 status buck")
                   << tr("Breaker2 status buck")<< tr("Contactor status buck")<< tr("Run mode")<< tr("DCDC Converter available")<< tr("Soft start status boost")
                      << tr("Soft start status buck")<< tr("Converter status")<< tr("ModeLock")<< tr("-");
    ui->State_tableWidget->setColumnCount(6);
    ui->State_tableWidget->setRowCount(State_Tablist3.size());

    QStringList State_Tablist;
    State_Tablist << tr("Name") << tr("Value") << tr("Name") << tr("Value")<< tr("Name") << tr("Value");
    ui->State_tableWidget->setHorizontalHeaderLabels(State_Tablist);
    ui->State_tableWidget->setColumnWidth(0,190);
    ui->State_tableWidget->setColumnWidth(1,80);
    ui->State_tableWidget->setColumnWidth(2,180);
    ui->State_tableWidget->setColumnWidth(3,80);
    ui->State_tableWidget->setColumnWidth(4,210);
    ui->State_tableWidget->horizontalHeader()->setStretchLastSection(5);


    ui->State_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i = 0; i < State_Tablist1.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 0, new QTableWidgetItem(State_Tablist1.at(i)));
    }
    for(int i = 0; i < State_Tablist2.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 2, new QTableWidgetItem(State_Tablist2.at(i)));
    }
    for(int i = 0; i < State_Tablist3.size(); i++)
    {
        ui->State_tableWidget->setItem(i, 4, new QTableWidgetItem(State_Tablist3.at(i)));
    }
    MPSState(ui->State_tableWidget); //MPS状态
}
//DCAC设置
void MyWidget::DCAC_tab()
{

}
//DCDC设置
void MyWidget::DCDC_tab()
{
    ui->DCDC_tableWidget->setColumnCount(6);
    ui->DCDC_tableWidget->setRowCount(5);
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
    ui->DCDC_tableWidget->setColumnWidth(0,130);
    ui->DCDC_tableWidget->setColumnWidth(1,140);

    ui->DCDC_tableWidget->setColumnWidth(2,40);
    ui->DCDC_tableWidget->setColumnWidth(3,130);
    ui->DCDC_tableWidget->setColumnWidth(4,140);
    ui->DCDC_tableWidget->horizontalHeader()->setStretchLastSection(5);
    QStringList Display_Par1;
        Display_Par1 << tr("Work parttern")<< tr("Boost or Buck") << tr("Bat Charging or \ndischarging Model") << tr("DCDC Capacity");
    QStringList Display_Par2;
    Display_Par2  << tr("Battery position")<<  tr("Voltage level\n") << tr("Current value");
    QStringList Display_Par13;
    Display_Par13 << tr("-") << tr("-") << tr("-")<< tr("-");
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
    ReportData_Tablist  << tr("PV power generation") << tr("Load discharge") << tr("Battery charge)")
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
    ui->Report_tableWidget->setColumnWidth(0,180);
    ui->Report_tableWidget->setColumnWidth(1,150);
    ui->Report_tableWidget->setColumnWidth(2,150);
    ui->Report_tableWidget->setColumnWidth(3,150);
    ui->Report_tableWidget->horizontalHeader()->setStretchLastSection(4);

    for(int i = 0; i < ReportData_Tablist.size(); i++)
    {
        ui->Report_tableWidget->setItem(i, 0, new QTableWidgetItem(ReportData_Tablist.at(i)));
    }
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
    PV_1 = new Specification(this,PV_1_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    PV_1->add_Specification();
    PV_2 = new Specification(this,PV_2_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    PV_2->add_Specification();
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
    PV_3 = new Specification(this,PV_3_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    PV_3->add_Specification();
    PV_4 = new Specification(this,PV_4_explain, myTable, line++, column, \
                                            "0", " ", \
                                            "未知，待评审确认\n.");
    PV_4->add_Specification();
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
    Grid_1 = new Specification(this,Grid_1_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Grid_1->add_Specification();
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
    Grid_2 = new Specification(this,Grid_2_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Grid_2->add_Specification();
    Grid_3 = new Specification(this,Grid_3_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Grid_3->add_Specification();

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
    Load_1 = new Specification(this,Load_1_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Load_1->add_Specification();
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
    Load_2 = new Specification(this,Load_2_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Load_2->add_Specification();
    Load_3 = new Specification(this,Load_3_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "未知，待评审确认\n.");
    Load_3->add_Specification();
}
//MPS状态 绘制button
void MyWidget::MPSState(QTableWidget *myTable)
{
    int line=0;int column = 1;//当前解释的button行和列
    DC_input_Bre = new Specification(this,DC_input_Bre_explain, myTable, line++, column, \
                                            "Close", "DC input breaker", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DC_input_Bre->add_Specification();
    DC_Con = new Specification(this,DC_Con_explain, myTable, line++, column, \
                                            "Close", "DC contactor", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DC_Con->add_Specification();
    M_Bypass_Bre = new Specification(this,M_Bypass_Bre_explain, myTable, line++, column, \
                                            "Close", "Maintenance Bypass breaker", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    M_Bypass_Bre->add_Specification();
    Output_Bre = new Specification(this,Output_Bre_explain, myTable, line++, column, \
                                            "Close", "Output breaker", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Output_Bre->add_Specification();
    Output_Con = new Specification(this,Output_Con_explain, myTable, line++, column, \
                                            "Close", "Output contactor", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Output_Con->add_Specification();
    Grid_Bre = new Specification(this,Grid_Bre_explain, myTable, line++, column, \
                                            "Close", "Grid breaker", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Grid_Bre->add_Specification();
    DO1 = new Specification(this,DO1_explain, myTable, line++, column, \
                                            "Disable", "DO1", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DO1->add_Specification();
    DO2 = new Specification(this,DO2_explain, myTable,line++, column, \
                                            "Disable", "DO2", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DO2->add_Specification();
    DO3 = new Specification(this,DO3_explain, myTable, line++, column, \
                                            "Disable", "DO3", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DO3->add_Specification();
    state1 = new Specification(this,state1_explain, myTable, line++, column, \
                                            "", "-", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    state1->add_Specification();
    state2 = new Specification(this,state2_explain, myTable, line++, column, \
                                            "", "-", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    state2->add_Specification();
    state3 = new Specification(this,state3_explain, myTable, line++, column, \
                                            "", "state3", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    state3->add_Specification();
    line=0;
    column=3;
    DCAC_Conver_avail = new Specification(this,DCAC_Conver_avail_explain, myTable, line++, column, \
                                            "Enable", "DCAC Converter available", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DCAC_Conver_avail->add_Specification();
    DC_Soft_Start = new Specification(this,DC_Soft_Start_explain, myTable, line++, column, \
                                            "Not starting", "DC Soft start", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DC_Soft_Start->add_Specification();
    Converter_Status = new Specification(this,Converter_Status_explain, myTable, line++, column, \
                                            "OFF", "Converter Status", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Converter_Status->add_Specification();
    Reactive_P_Reg = new Specification(this,Reactive_P_Reg_explain, myTable, line++, column, \
                                            "SVG", "Reactive power Regulation", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Reactive_P_Reg->add_Specification();
    Sleep_mode = new Specification(this,Sleep_mode_explain, myTable, line++, column, \
                                            "Dromant", "Sleep_mode", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Sleep_mode->add_Specification();
    LVRT = new Specification(this,LVRT_explain, myTable, line++, column, \
                                            "LVRT", "LVRT", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    LVRT->add_Specification();
    DI1 = new Specification(this,DI1_explain, myTable, line++, column, \
                                            "Disable", "DI1", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI1->add_Specification();
    DI2 = new Specification(this,DI2_explain, myTable, line++, column, \
                                            "Disable", "DI2", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI2->add_Specification();
    DI3 = new Specification(this,DI3_explain, myTable, line++, column, \
                                            "Disable", "DI3", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI3->add_Specification();
    DI4 = new Specification(this,DI4_explain, myTable, line++, column, \
                                            "Disable", "DI4", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI4->add_Specification();
    DI5 = new Specification(this,DI5_explain, myTable, line++, column, \
                                            "Disable", "DI5", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI5->add_Specification();
    DI6 = new Specification(this,DI6_explain, myTable, line++, column, \
                                            "Disable", "DI6", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DI6->add_Specification();
    line=0;
    column=5;
    Breaker1_Sta_Boost = new Specification(this,Breaker1_Sta_Boost_explain, myTable, line++, column, \
                                            "0", "Breaker1 Status Boost", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Breaker1_Sta_Boost->add_Specification();
    Breaker2_Sta_Boost = new Specification(this,Breaker2_Sta_Boost_explain, myTable, line++, column, \
                                            "0", "Breaker2 Status Boost", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Breaker2_Sta_Boost->add_Specification();
    Contator_Sta_Boost = new Specification(this,Contator_Sta_Boost_explain, myTable, line++, column, \
                                            "0", "Contator Status Boost", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Contator_Sta_Boost->add_Specification();
    Breaker1_Sta_Buck = new Specification(this,Breaker1_Sta_Buck_explain, myTable, line++, column, \
                                            "0", "Breaker1 Status Buck", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Breaker1_Sta_Buck->add_Specification();
    Breaker2_Sta_Buck = new Specification(this,Breaker2_Sta_Buck_explain, myTable, line++, column, \
                                            "0", "Breaker2 Status Buck", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Breaker2_Sta_Buck->add_Specification();
    Contator_Sta_Buck = new Specification(this,Contator_Sta_Buck_explain, myTable, line++, column, \
                                            "0", "Contator Status Buck", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Contator_Sta_Buck->add_Specification();
    Run_mode = new Specification(this,Run_mode_explain, myTable, line++, column, \
                                            "0", "Run mode", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Run_mode->add_Specification();
    DCDC_Converter_ava = new Specification(this,DCDC_Converter_ava_explain, myTable, line++, column, \
                                            "0", "DCDC Converter available", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    DCDC_Converter_ava->add_Specification();
    Soft_Start_Sta_Boost = new Specification(this,Soft_Start_Sta_Boost_explain, myTable, line++, column, \
                                            "0", "Soft Start Status Boost", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Soft_Start_Sta_Boost->add_Specification();
    Soft_Start_Sta_Buck = new Specification(this,Soft_Start_Sta_Buck_explain, myTable, line++, column, \
                                            "0", "Soft Start Status Buck", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Soft_Start_Sta_Buck->add_Specification();
    Converter_Status_V = new Specification(this,Converter_Status_V_explain, myTable, line++, column, \
                                            "0", "Converter Status", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    Converter_Status_V->add_Specification();
    ModeLock = new Specification(this,ModeLock_explain, myTable, line++, column, \
                                            "0", "ModeLock", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    ModeLock->add_Specification();
    state4 = new Specification(this,state4_explain, myTable, line++, column, \
                                            "0", "-", \
                                            "这是从变流器获取的当前MPS的A相和B相之间的电压\nThis is the voltage between the A and B phases of the current PCS obtained from the converter.");
    state4->add_Specification();

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
