
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

#define CHINESE     0
#define ENGLISH     1

MyWidget::MyWidget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MyWidget)
{
    LanguageType = CHINESE; //开机默认为中文

    ui->setupUi(this);
//    setFixedSize(800,562);//固定窗口大小
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Host_page); //执行程序后，自动进入到主页

    LoadLanguageInit(); //初始化语言
    MemoryAllocation(); //初始化内存空间
    UIPageInit();       //初始化界面
    LinkRelationship();//函数关联

}

MyWidget::~MyWidget()
{



    delete ui;
}

void MyWidget::LoadLanguageInit()
{
    translator = new QTranslator(qApp);
    if(LanguageType == CHINESE)//开机语言 中文
    {
        translator->load(":/Language/CN.qm");
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        LanguageType = CHINESE;
    }
    else if(LanguageType == ENGLISH)//开机语言 英文
    {
        translator->load(":/Language/EN.qm");
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        LanguageType = ENGLISH;
    }
}

/********************************************************
 * 初始化内存空间
*********************************************************/
void MyWidget::MemoryAllocation()
{
    IPShow = true;
    m_menu = new Menu(this);
    mode_expelain = new OperMode(this);
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
    MPS_vol_AB = nullptr;
    MPS_vol_BC = nullptr;
    MPS_vol_CA = nullptr;
    MPS_cur_A = nullptr;
    MPS_cur_B = nullptr;
    MPS_cur_C = nullptr;
    MPS_IGBT_T = nullptr;
    MPS_Env_T = nullptr;
    MPS_Leakage_cur = nullptr;
    PV_vol = nullptr;
    PV_cur = nullptr;
    PV_power = nullptr;
    Batter_vol = nullptr;
    Batter_cur = nullptr;
    Batter_power = nullptr;
    Bus_vol = nullptr;
    Bus_cur = nullptr;
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
    PV_vol_H = nullptr;
    PV_cur_H = nullptr;
    PV_power_H = nullptr;
    PV_vol_L = nullptr;
    PV_cur_L = nullptr;
    PV_power_L = nullptr;
    PositiveInuslation = nullptr;
    Bus_H_vol_add = nullptr;
    Bus_H_vol_reduce = nullptr;
    Bus_L_vol_add = nullptr;
    Bus_L_vol_reduce = nullptr;
    PV_IGBT_T = nullptr;
    NegativeInuslation = nullptr;
    Leakage_cur = nullptr;
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
    Grid_vol_AB = nullptr;
    Grid_vol_BC = nullptr;
    Grid_vol_CA = nullptr;
    Grid_cur_A = nullptr;
    Grid_cur_B = nullptr;
    Grid_cur_C = nullptr;
    Grid_active_power = nullptr;
    Grid_reactive_power = nullptr;
    Grid_apparent_power = nullptr;
    Grid_power_factor = nullptr;
    Grid_Frequency = nullptr;
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
    Load_vol_AB = nullptr;
    Load_vol_BC = nullptr;
    Load_vol_CA = nullptr;
    Load_cur_A = nullptr;
    Load_cur_B = nullptr;
    Load_cur_C = nullptr;
    Load_active_power = nullptr;
    Load_reactive_power = nullptr;
    Load_apparent_power = nullptr;
    Load_power_factor = nullptr;
    Load_Frequency = nullptr;

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
    LVRT_explain             = new QPushButton;
    DI1_explain              = new QPushButton;
    DI2_explain              = new QPushButton;
    DI3_explain              = new QPushButton;
    DI4_explain              = new QPushButton;
    DI5_explain              = new QPushButton;
    DI6_explain              = new QPushButton;

    Contator_Sta_Boost_explain  = new QPushButton;
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
    pButton_BatteryData->addButton(ui->pushButton_19,14);
    pButton_BatteryData->addButton(ui->pushButton_20,15);
    pButton_BatteryData->addButton(ui->pushButton_21,16);

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

    /***************************电池设置 锂电****************************/
    SwitchingBatteryTypes = new QPushButton;//切换电池类型

    DOD_OnGrid_explain = new QPushButton;    //并网DOD说明
    DOD_OffGrid_explain = new QPushButton;   //离网DOD说明
    Charge_Volt_Upper_Limit_explain = new QPushButton;   //充电电压上限说明
    Charge_Volt_upper_Limit_delta_explain = new QPushButton; //充电电压上限回差说明
    Disc_Volt_lower_Limit_explain = new QPushButton;  //放电电压限制说明
    Discharge_Volt_upper_Limit_delta_explain = new QPushButton; //放电电压下限回差说明
    Charge_Current_Limit_explain = new QPushButton;  //充电电流限制说明
    Discharge_Current_Limit_explain = new QPushButton;  //放电电流限制说明
//    Floating_charge_explain = new QPushButton;   //浮充电压说明
//    Equalized_charge_explain = new QPushButton;   //均充电压说明
    Gen_turn_off_SOC_explain = new QPushButton;    //柴发关闭SOC说明
    Gen_turn_on_SOC_explain = new QPushButton;     //柴发开启SOC说明

    /***************************电池设置 铅酸****************************/

    Capacity_explain  = new QPushButton;
    Cell_number_2V_explain  = new QPushButton;
    Charge_limiting_value_explain  = new QPushButton;
    Discharge_limiting_value_explain  = new QPushButton;
    Generator_turn_off_SOC_B1_explain  = new QPushButton;
    Generator_turn_on_SOC_A1_explain  = new QPushButton;
    SwitchingBatteryTypes_Leaad  = new QPushButton;
    Grid_off_EOD_explain  = new QPushButton;
    Grid_on_EOD_explain  = new QPushButton;
    Shutdown_voltage_point_explain  = new QPushButton;
    Mending_center_point_explain  = new QPushButton;
    Temperature_filling_coefficient_explain  = new QPushButton;
    Mending_allowable_setting_explain  = new QPushButton;
    Temperature_alarm_upper_limit_explain  = new QPushButton;

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

    Check1 = nullptr;
    Check2 = nullptr;
    Check3 = nullptr;
    Check4 = nullptr;
    Check5 = nullptr;
    Check6 = nullptr;
    Check7 = nullptr;
    Check8 = nullptr;
    Check9 = nullptr;
    Check10 = nullptr;
    Check11 = nullptr;Check12 = nullptr;Check13 = nullptr;Check14 = nullptr;Check15 = nullptr;Check16 = nullptr;Check17 = nullptr;Check18 = nullptr;Check19 = nullptr;Check20 = nullptr;
    Start_T1 = nullptr;Start_T2 = nullptr;Start_T3 = nullptr;Start_T4 = nullptr;Start_T5 = nullptr;Start_T6 = nullptr;Start_T7 = nullptr;Start_T8 = nullptr;Start_T9 = nullptr;Start_T10 = nullptr;
    Start_T11 = nullptr;Start_T12 = nullptr;Start_T13 = nullptr;Start_T14 = nullptr;Start_T15 = nullptr;Start_T16 = nullptr;Start_T17 = nullptr;Start_T18 = nullptr;Start_T19 = nullptr;Start_T20 = nullptr;
    End_T1 = nullptr;End_T2 = nullptr;End_T3 = nullptr;End_T4 = nullptr;End_T5 = nullptr;End_T6 = nullptr;End_T7 = nullptr;End_T8 = nullptr;End_T9 = nullptr;End_T10 = nullptr;
    End_T11 = nullptr;End_T12 = nullptr;End_T13 = nullptr;End_T14 = nullptr;End_T15 = nullptr;End_T16 = nullptr;End_T17 = nullptr;End_T18 = nullptr;End_T19 = nullptr;End_T20 = nullptr;
    State1 = nullptr;State2 = nullptr;State3 = nullptr;State4 = nullptr;State5 = nullptr;State6 = nullptr;State7 = nullptr;State8 = nullptr;State9 = nullptr;State10 = nullptr;
    State11 = nullptr;State12 = nullptr;State13 = nullptr;State14 = nullptr;State15 = nullptr;State16 = nullptr;State17 = nullptr;State18 = nullptr;State19 = nullptr;State20 = nullptr;
    Power1 = nullptr;Power2 = nullptr;Power3 = nullptr;Power4 = nullptr;Power5 = nullptr;Power6 = nullptr;Power7 = nullptr;Power8 = nullptr;Power9 = nullptr;Power10 = nullptr;
    Power11 = nullptr;Power12 = nullptr;Power13 = nullptr;Power14 = nullptr;Power15 = nullptr;Power16 = nullptr;Power17 = nullptr;Power18 = nullptr;Power19 = nullptr;Power20 = nullptr;

    /**********************系统消息*************************/

    pButton_Version = new QButtonGroup();
    pButton_Version->addButton(ui->interface_explain_btn, 0);
    pButton_Version->addButton(ui->port_explain_btn, 1);
    pButton_Version->addButton(ui->ip_explain_btn, 2);
    pButton_Version->addButton(ui->netmask_explain_btn, 3);
    pButton_Version->addButton(ui->gateway_explain_btn, 4);
    pButton_Version->addButton(ui->server_ip_explain_btn, 5);
    pButton_Version->addButton(ui->ok, 6);

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

    /*************************功能设置*************************/
    Battery_type_explain = new QPushButton;  //电池类型说明
    BMS_Comm_type_explain = new QPushButton; //电池通信方式说明
    Power_control_type_explain = new QPushButton;    //功率控制类型说明
    EMS_Comm_type_explain = new QPushButton; //EMS通讯方式说明
    Output_power_limit_explain = new QPushButton;    //输出功率上限说明
    BAT_manufacturers_explain = new QPushButton; //电池厂家说明
    Charge_SOC_explain = new QPushButton;    //充电SOC说明
    Disharge_SOC_explain = new QPushButton;  //放电SOC说明
    DG_capacity_explain = new QPushButton;   //柴发容量说明
    Energy_priority_explain = new QPushButton;   //能量优先级说明
    Host_Address_explain = new QPushButton;  //主机地址说明
    serial_port_1_explain = new QPushButton; //串口1说明
    serial_port_2_explain = new QPushButton; //串口2说明
    serial_port_3_explain = new QPushButton; //串口3说明
    serial_port_4_explain = new QPushButton; //串口4说明
    serial_port_5_explain = new QPushButton; //串口5说明
    Can_port_1_explain = new QPushButton;    //CAN1说明
    Can_port_2_explain = new QPushButton;    //CAN2说明
    Relese_Charge_mark_explain = new QPushButton;    //释放充电标志说明
    ForceCharge_start_explain = new QPushButton; //强充开启说明
    ForceCharge_top_explain = new QPushButton;   // 强充结束说明
    ProtocolVersion_explain = new QPushButton;   //协议版本说明
    UserPassPort_explain = new QPushButton;  //用户密码说明
    RootPassport_explain = new QPushButton;  //超级权限说明
    Language_explain = new QPushButton;  //语言说明
    System_upgrade_explain = new QPushButton;    //系统升级说明
    Sounds_explain = new QPushButton;    //声音说明

    /***************************系统参数**************************/
    Change_rate_of_power_explain = new QPushButton;  //功率变化率说明
    Grid_frequency_upper_limit_explain = new QPushButton;  //电网频率变化范围上限说明
    Grid_frequency_lower_limit_explain = new QPushButton;  //电网频率变化范围下限说明
    Vol_protection_upper_limit_explain = new QPushButton;  //电压保护范围上限说明
    Vol_protection_lower_limit_explain = new QPushButton;  //电压保护范围下限说明
    HVRT_enable_explain = new QPushButton;  //高穿使能说明
    LVRT_enable_explain = new QPushButton;  //低穿使能说明
    AFD_enable_explain = new QPushButton;  //孤岛使能说明
    Insulation_detection_enable_explain = new QPushButton;  //绝缘监测使能说明
    PrimaryFreq_enable_explain = new QPushButton;  //一次调频使能说明
    Inertia_enable_explain = new QPushButton;  //转动惯量使能说明
    Load_priority_explain = new QPushButton;  //负载优先说明
    Machine_type_explain = new QPushButton;  //机器型号说明
    Machine_capacity_explain = new QPushButton;  //机器容量说明
    Output_Fre_grade_explain = new QPushButton;  //输出频率等级说明
    Output_vol_level_explain = new QPushButton;  //输出电压等级说明
    Converter_side_vol_level_explain = new QPushButton;  //逆变电压等级说明
    Output_reactive_power_mode_explain = new QPushButton;  //输出无功方式说明
    Grid_recovery_scheduling_explain = new QPushButton;  //电网恢复调度开机说明
    Grid_recovery_time_explain = new QPushButton;  //电网恢复并网时间说明
    Grid_connected_mode_of_Inv_explain = new QPushButton;  //逆变器并网方式说明
    Pshedding_Freq_explain = new QPushButton;  //过频降载说明
    QP_curve_explain = new QPushButton;  //QP曲线说明
    CV_parallel_explain = new QPushButton;  //恒压并机说明
    Module_Number_explain = new QPushButton;  //模块数量说明
    Restore_factory_explain = new QPushButton;  //恢复出厂说明
    Clear_Data_explain = new QPushButton;  //清除数据说明
    Machine_Type_explain = new QPushButton;  //机架说明
    Module_max_explain = new QPushButton;  //最大模块数说明
    Module_min_explain = new QPushButton;  //最小模块数说明
    Insulation_detection_enable_DCDC_explain = new QPushButton;  //DCDC绝缘监测使能说明

    /***************************外设**************************/
    //输入干接点1说明
    DI_1_Enable_explain = new QPushButton;
    DI_1_NC_O_explain   = new QPushButton;
    DI_1_Action_explain = new QPushButton;

    //输入干接点2说明
    DI_2_Enable_explain = new QPushButton;
    DI_2_NC_O_explain   = new QPushButton;
    DI_2_Action_explain = new QPushButton;

    //输入干接点3说明
    DI_3_Enable_explain = new QPushButton;
    DI_3_NC_O_explain   = new QPushButton;
    DI_3_Action_explain = new QPushButton;

    //输入干接点4说明
    DI_4_Enable_explain = new QPushButton;
    DI_4_NC_O_explain   = new QPushButton;
    DI_4_Action_explain = new QPushButton;

    //输入干接点5说明
    DI_5_Enable_explain = new QPushButton;
    DI_5_NC_O_explain   = new QPushButton;
    DI_5_Action_explain = new QPushButton;

    //输入干接点6说明
    DI_6_Enable_explain = new QPushButton;
    DI_6_NC_O_explain   = new QPushButton;
    DI_6_Action_explain = new QPushButton;

    //输出干接点1说明
    DO_1_Enable_explain = new QPushButton;
    DO_1_NC_O_explain   = new QPushButton;
    DO_1_Action_explain = new QPushButton;

    //输出干接点2说明
    DO_2_Enable_explain = new QPushButton;
    DO_2_NC_O_explain   = new QPushButton;
    DO_2_Action_explain = new QPushButton;

    //输出干接点3说明
    DO_3_Enable_explain = new QPushButton;
    DO_3_NC_O_explain   = new QPushButton;
    DO_3_Action_explain = new QPushButton;

    /***************************DCAC调试**************************/
    Debug_variable_1_explain        = new QPushButton;  //调试变量1
    Debug_variable_2_explain        = new QPushButton;  //调试变量2
    Debug_variable_3_explain        = new QPushButton;  //调试变量3
    Debug_variable_1_addr_explain   = new QPushButton;  //调试地址变量1
    Debug_variable_2_addr_explain   = new QPushButton;  //调试地址变量2
    Debug_variable_3_addr_explain   = new QPushButton;  //调试地址变量3
    Debug_memery_var_1_explain      = new QPushButton;  //调试内存变量1
    Debug_memery_var_2_explain      = new QPushButton;  //调试内存变量2
    Debug_memery_var_3_explain      = new QPushButton;  //调试内存变量3
    Input_Vol_revise_explain        = new QPushButton;  //输入电压系数
    Input_Cur_revise_explain        = new QPushButton;  //输入电流系数

    Voltage_1_5_revise_explain      = new QPushButton;  //1.5V电压系数
    Bus_Vol_revise_explain          = new QPushButton;  //母线电压系数
    Grid_A_AB_Vol_revise_explain    = new QPushButton;  //电网A相电压系数
    Grid_B_BC_Vol_revise_explain    = new QPushButton;  //电网B相电压系数
    Grid_C_CA_Vol_revise_explain    = new QPushButton;  //电网C相电压系数
    Output_A_Cur_revise_explain     = new QPushButton;  //输出A相电流系数
    Output_B_Cur_revise_explain     = new QPushButton;  //输出B相电流系数
    Output_C_Cur_revise_explain     = new QPushButton;  //输出C相电流系数
    INV_A_Vol_revise_explain        = new QPushButton;  //逆变A相电压系数
    INV_B_Vol_revise_explain        = new QPushButton;  //逆变B相电压系数
    INV_C_Vol_revise_explain        = new QPushButton;  //逆变C相电压系数
    INV_A_ind_Cur_revise_explain    = new QPushButton;  //逆变A相电感电流系数
    INV_B_ind_Cur_revise_explain    = new QPushButton;  //逆变B相电感电流系数
    INV_C_ind_Cur_revise_explain    = new QPushButton;  //逆变C相电感电流系数

    INV_On_off_flag_explain         = new QPushButton;  //开关机状态字
    Logic_state_explain             = new QPushButton;  //逻辑状态字
    INV_flag_explain                = new QPushButton;  //逆变状态字
    Grid_flag_explain               = new QPushButton;  //电网状态字
    Grid_protect_flag_explain       = new QPushButton;  //电网保护状态字
    PV_flag_explain                 = new QPushButton;  //电池电压状态字
    DC_bus_flag_explain             = new QPushButton;  //母线状态字
    INT_main_flag_explain           = new QPushButton;  //中断状态字
    parallel_signal_explain         = new QPushButton;  //并机状态字
    Monitor_Order_explain           = new QPushButton;  //监控命令状态字
    Bat_Infor_explain               = new QPushButton;  //电池信息字
    Bat_State_explain               = new QPushButton;  //电池状态字

    /***************************DCDC调试**************************/
    DC_Debug_variable_1_explain = new QPushButton;  //调试变量1
    DC_Debug_variable_2_explain = new QPushButton;  //调试变量2
    DC_Debug_variable_3_explain = new QPushButton;  //调试变量3
    Current_ID_explain = new QPushButton;   //当前模块号
    DC_INT_main_flag_explain = new QPushButton;  //中断状态字
    DC_DC_bus_flag_explain = new QPushButton;  //母线状态字
    DC_PV_flag_explain = new QPushButton;  //电池电压状态字

    DC_Debug_variable_1_addr_explain = new QPushButton;  //调试地址变量1
    DC_Debug_variable_2_addr_explain = new QPushButton;  //调试地址变量2
    DC_Debug_variable_3_addr_explain = new QPushButton;  //调试地址变量3
    DCONV_logic_explain = new QPushButton;  //
    DC_INV_On_off_flag_explain = new QPushButton;  //开关机状态字
    DC_parallel_signal_explain = new QPushButton;  //并机状态字

    DC_Debug_memery_var_1_explain = new QPushButton;  //调试内存变量1
    DC_Debug_memery_var_2_explain = new QPushButton;  //调试内存变量2
    DC_Debug_memery_var_3_explain = new QPushButton;  //调试内存变量3
    DC_Monitor_Order_explain = new QPushButton;  //监控命令状态字
    DC_Bat_Infor_explain = new QPushButton;  //电池信息字
    DC_Bat_State_explain = new QPushButton;  //电池状态字
}

/************MPS状态释放说明弹窗的空间***************/
void MyWidget::MPS_state_delete()
{
    delete DC_input_Bre;
    delete DC_Con;
    delete M_Bypass_Bre;
    delete Output_Bre;
    delete Output_Con;
    delete Grid_Bre;
    delete DO1;
    delete DO2;
    delete DO3;

    delete DCAC_Conver_avail;
    delete DC_Soft_Start;
    delete Converter_Status;
    delete Reactive_P_Reg;
    delete LVRT;
    delete DI1;
    delete DI2;
    delete DI3;
    delete DI4;
    delete DI5;
    delete DI6;

    delete Contator_Sta_Boost;
    delete Contator_Sta_Buck;
    delete Run_mode;
    delete DCDC_Converter_ava;
    delete Soft_Start_Sta_Boost;
    delete Soft_Start_Sta_Buck;
    delete Converter_Status_V;
    delete ModeLock;
}
/************数据报表 释放 说明************/
void MyWidget::Data_Report_delete()
{
    delete PV_power_generation_Day;
    delete PV_power_generation_Month;
    delete PV_power_generation_Year;
    delete PV_power_generation_Total;
    delete Load_Discharge_Day;
    delete Load_Discharge_Month;
    delete Load_Discharge_Year;
    delete Load_Discharge_Total;
    delete Battery_Charge_Day;
    delete Battery_Charge_Month;
    delete Battery_Charge_Year;
    delete Battery_Charge_Total;
    delete Battery_Discharge_Day;
    delete Battery_Discharge_Month;
    delete Battery_Discharge_Year;
    delete Battery_Discharge_Total;
    delete Grid_Charge_Day;
    delete Grid_Charge_Month;
    delete Grid_Charge_Year;
    delete Grid_Charge_Total;
    delete Grid_Discharge_Day;
    delete Grid_Discharge_Month;
    delete Grid_Discharge_Year;
    delete Grid_Discharge_Total;
}
/************历史数据 释放 说明************/
void MyWidget::HistoryRecord_delete()
{
    delete Grade;
    delete Grade2;
    delete Grade3;
    delete Grade4;
    delete Grade5;
    delete Grade6;
    delete Grade7;
    delete Grade8;
    delete StartTime;
    delete StartTime2;
    delete StartTime3;
    delete StartTime4;
    delete StartTime5;
    delete StartTime6;
    delete StartTime7;
    delete StartTime8;
    delete EndTime;
    delete EndTime2;
    delete EndTime3;
    delete EndTime4;
    delete EndTime5;
    delete EndTime6;
    delete EndTime7;
    delete EndTime8;
    delete Describe;
    delete Describe2;
    delete Describe3;
    delete Describe4;
    delete Describe5;
    delete Describe6;
    delete Describe7;
    delete Describe8;
}
/************操作日志 释放 说明************/
void MyWidget::OperationLog_tab_delete()
{
    delete ModificationTime;
    delete ModificationTime2;
    delete ModificationTime3;
    delete ModificationTime4;
    delete ModificationTime5;
    delete ModificationTime6;
    delete ModificationTime7;
    delete ModificationTime8;
    delete ModificationTime9;
    delete ModificationTime10;
    delete ModificationTime11;
    delete ModificationTime12;
    delete EventRecord;
    delete EventRecord2;
    delete EventRecord3;
    delete EventRecord4;
    delete EventRecord5;
    delete EventRecord6;
    delete EventRecord7;
    delete EventRecord8;
    delete EventRecord9;
    delete EventRecord10;
    delete EventRecord11;
    delete EventRecord12;
}
/************DC/AC参数 释放 说明************/
void MyWidget::DC_AC_Parameter_tab_delete()
{
    delete mode_expelain;//操作模式新窗口
    delete Grid_connected_mode;
    delete Constant_power;
    delete Charging_and_discharging;
    delete Output_power_factor;
    delete Output_reactive_power;
    delete Constant_current;
    delete Constant_voltage;
    delete Control_mode;
    delete Machine_number;
    delete Parallel;
    delete Unbalance_power_enable;
}
/************DCDC参数 释放 说明************/
void MyWidget::DCDC_Paramter_tab_delete()
{
    delete Work_parttern;
    delete Boost_or_Buck;
    delete Bat_Charging_or_discharging_Model;
    delete DCDC_Capacity;
    delete Battery_position;
    delete Voltage_level;
    delete Current_value;
}
/************锂电池设置 释放 说明************/
void MyWidget::Battery_Setup_Tab_delete()
{
    delete DOD_OnGrid;
    delete DOD_OffGrid;
    delete Charge_Volt_Upper_Limit;
    delete Charge_Volt_upper_Limit_delta;
    delete Disc_Volt_lower_Limit;
    delete Discharge_Volt_upper_Limit_delta;
    delete Charge_Current_Limit;
    delete Discharge_Current_Limit;
    delete Gen_turn_off_SOC;
    delete Gen_turn_on_SOC;
}
/************铅酸电池设置 释放 说明************/
void MyWidget::Battery_Setup_Lead_Tab_delete()
{
    delete Capacity;
    delete Cell_number_2V;
    delete Charge_limiting_value;
    delete Discharge_limiting_value;
    delete Generator_turn_off_SOC_B1;
    delete Generator_turn_on_SOC_A1;
    delete Grid_off_EOD;
    delete Grid_on_EOD;
    delete Shutdown_voltage_point;
    delete Mending_center_point;
    delete Temperature_filling_coefficient;
    delete Mending_allowable_setting;
    delete Temperature_alarm_upper_limit;
}
/***********自动运行 释放 说明************/
void MyWidget::AutoOperation_delete()
{

}
/************系统信息 释放 说明************/
void MyWidget::SystemMessages_delete()
{
    delete MonitoringVersion;
    delete DCAC_SysProtocol_Version;
    delete DCAC_ConverterVersion;
    delete DCAC_CPLD_Version;
    delete DCDC_SysProtocol_Version;
    delete DCDC_ConverterVersion;
    delete DCDC_CPLD_Version;
    delete SN;
}
/************功能设置 释放 说明************/
void MyWidget::FunctionSet_delete()
{
    delete Battery_type;
    delete BMS_Comm_type;
    delete Power_control_type;
    delete EMS_Comm_type;
    delete Output_power_limit;
    delete BAT_manufacturers;
    delete Charge_SOC;
    delete Disharge_SOC;
    delete DG_capacity;
    delete Energy_priority;
    delete Host_Address;
    delete serial_port_1;
    delete serial_port_2;
    delete serial_port_3;
    delete serial_port_4;
    delete serial_port_5;
    delete Can_port_1;
    delete Can_port_2;
    delete Relese_Charge_mark;
    delete ForceCharge_start;
    delete ForceCharge_top;
    delete ProtocolVersion;
    delete UserPassPort;
    delete RootPassport;
    delete Language;
    delete System_upgrade;
    delete Sounds;
}
/************系统参数 释放 说明************/
void MyWidget::SystemParameter_delete()
{
    delete Change_rate_of_power;
    delete Grid_frequency_upper_limit;
    delete Grid_frequency_lower_limit;
    delete Vol_protection_upper_limit;
    delete Vol_protection_lower_limit;
    delete HVRT_enable;
    delete LVRT_enable;
    delete AFD_enable;
    delete Insulation_detection_enable;
    delete PrimaryFreq_enable;
    delete Inertia_enable;
    delete Load_priority;
    delete Machine_type;
    delete Machine_capacity;
    delete Output_Fre_grade;
    delete Output_vol_level;
    delete Converter_side_vol_level;
    delete Output_reactive_power_mode;
    delete Grid_recovery_scheduling;
    delete Grid_recovery_time;
    delete Grid_connected_mode_of_Inv;
    delete Pshedding_Freq;
    delete QP_curve;
    delete CV_parallel;
    delete Module_Number;
    delete Restore_factory;
    delete Clear_Data;
    delete Machine_Type;
    delete Module_max;
    delete Module_min;
    delete Insulation_detection_enable_DCDC;
}
/************系统参数 释放 说明************/
void MyWidget::ExternalDevice_delete()
{
    delete DI_1_Enable;
    delete DI_1_NC_O;
    delete DI_1_Action;
    delete DI_2_Enable;
    delete DI_2_NC_O;
    delete DI_2_Action;
    delete DI_3_Enable;
    delete DI_3_NC_O;
    delete DI_3_Action;
    delete DI_4_Enable;
    delete DI_4_NC_O;
    delete DI_4_Action;
    delete DI_5_Enable;
    delete DI_5_NC_O;
    delete DI_5_Action;
    delete DI_6_Enable;
    delete DI_6_NC_O;
    delete DI_6_Action;
    delete DO_1_Enable;
    delete DO_1_NC_O;
    delete DO_1_Action;
    delete DO_2_Enable;
    delete DO_2_NC_O;
    delete DO_2_Action;
    delete DO_3_Enable;
    delete DO_3_NC_O;
    delete DO_3_Action;
}
/************DCAC调试 释放 说明************/
void MyWidget::DCAC_Debugg_delete()
{


    delete Debug_variable_1;
    delete Debug_variable_2;
    delete Debug_variable_3;
    delete Debug_variable_1_addr;
    delete Debug_variable_2_addr;
    delete Debug_variable_3_addr;
    delete Debug_memery_var_1;
    delete Debug_memery_var_2;
    delete Debug_memery_var_3;
    delete Input_Vol_revise;
    delete Input_Cur_revise;
    delete Voltage_1_5_revise;
    delete Bus_Vol_revise;
    delete Grid_A_AB_Vol_revise;
    delete Grid_B_BC_Vol_revise;
    delete Grid_C_CA_Vol_revise;
    delete Output_A_Cur_revise;
    delete Output_B_Cur_revise;
    delete Output_C_Cur_revise;
    delete INV_A_Vol_revise;
    delete INV_B_Vol_revise;
    delete INV_C_Vol_revise;
    delete INV_A_ind_Cur_revise;
    delete INV_B_ind_Cur_revise;
    delete INV_C_ind_Cur_revise;
    delete INV_On_off_flag;
    delete Logic_state;
    delete INV_flag;
    delete Grid_flag;
    delete Grid_protect_flag;
    delete PV_flag;
    delete DC_bus_flag;
    delete INT_main_flag;
    delete parallel_signal;
    delete Monitor_Order;
    delete Bat_Infor;
    delete Bat_State;
}
/************DCDC调试 释放 说明************/
void MyWidget::DCDC_Debugg_delete()
{
    delete DC_Debug_variable_1;
    delete DC_Debug_variable_2;
    delete DC_Debug_variable_3;
    delete Current_ID;
    delete DC_INT_main_flag;
    delete DC_DC_bus_flag;
    delete DC_PV_flag;
    delete DC_Debug_variable_1_addr;
    delete DC_Debug_variable_2_addr;
    delete DC_Debug_variable_3_addr;
    delete DC_INV_On_off_flag;
    delete DCONV_logic;
    delete DC_parallel_signal;
    delete DC_Debug_memery_var_1;
    delete DC_Debug_memery_var_2;
    delete DC_Debug_memery_var_3;
    delete DC_Monitor_Order;
    delete DC_Bat_Infor;
    delete DC_Bat_State;
}
/************调用上面的释放函数************/
void MyWidget::Delete_explain()
{
    MPS_state_delete();//释放MPS状态 的空间
    Data_Report_delete();//释放 数据报表
    HistoryRecord_delete();//释放 历史记录
    OperationLog_tab_delete();//释放 操作日志
    DC_AC_Parameter_tab_delete();//释放 DC/AC参数
    DCDC_Paramter_tab_delete();//释放 DC/DC参数
    Battery_Setup_Tab_delete();//释放 电池设置
    //    AutoOperation_delete();//释放 自动运行
    SystemMessages_delete();//释放 系统消息
    FunctionSet_delete();//释放 功能设置
    SystemParameter_delete();//释放 系统参数
    ExternalDevice_delete();//释放 外设
    DCAC_Debugg_delete();//释放 DCAC调试
    DCDC_Debugg_delete();//释放 DCDC调试
    Battery_Setup_Lead_Tab_delete();
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
    SystemParam_tbnt_released();//绘制高级设置界面
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
    m_menu->hide();
    ui->UI_stackedWidget->setCurrentWidget(ui->BasicSet_page);
}
/*************************************************************************
*切换语言
* ***********************************************************************/
void MyWidget::ChangeLanguage_btn_clicked()
{
    m_menu->hide();//隐藏菜单界面

    if(LanguageType == CHINESE)
    {
        LanguageType = ENGLISH;//如果当前是中文，则切英文
        translator->load(":/Language/EN.qm");
        ui->ChangeLanguage_btn->setText(tr("Change Language"));
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        ui->retranslateUi(mode_expelain);
    }
    else if(LanguageType == ENGLISH)
    {
        LanguageType = CHINESE;//如果当前是英文，则切中文
        translator->load(":/Language/CN.qm");
        ui->ChangeLanguage_btn->setText(tr("切换语言"));
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        ui->retranslateUi(mode_expelain);
    }

    Delete_explain();//释放空间

    UIPageInit();       //初始化界面
}

void MyWidget::Operational_mode_clicked()
{
    if(mode_expelain->isHidden())
    {
        mode_expelain->show();
//        this->hide();
    }
    else
    {
        mode_expelain->hide();
//        this->show();
    }
}
//函数关联
void MyWidget::LinkRelationship()
{
    connect(timer, SIGNAL(timeout()), this, SLOT(onTimerOut()));    //关联定时器，以便实时更新时间

    connect(m_menu, SIGNAL(Sent(int)), this, SLOT(My_menuAction(int))); //菜单
    connect(Work_mode_explain, SIGNAL(clicked(bool)), this, SLOT(Operational_mode_clicked())); //

    connect(AdvancedSetup_btn,SIGNAL(clicked(bool)), this, SLOT(AdvancedSetup_btn_clicked()));//高级设置

    connect(ui->Bypass_Batt_btn, SIGNAL(clicked()), this, SLOT(on_Batt_btn_released()));    //主页电池按钮跳转电池信息
    connect(ui->Bypass_Running_btn, SIGNAL(clicked()), this, SLOT(on_Running_btn_clicked()));   //主页变流器按钮跳转变流器实时数据
    connect(ui->Bypass_Grid_btn, SIGNAL(clicked()), this, SLOT(on_Grid_clicked()));    //主页电网按钮跳转电网实时数据
    connect(ui->Bypass_Load_Btn, SIGNAL(clicked()), this, SLOT(on_Load_clicked()));    //主页负载按钮跳转负载实时数据
    connect(ui->PV_btn, SIGNAL(clicked()), this, SLOT(on_PV_clicked()));    //主页PV按钮跳转PV实时数据
    connect(ui->Alarm_Button, SIGNAL(clicked()), this,SLOT(on_Alarm_btn_clicker()));//跳转当前告警记录

    connect(pButton_BatteryData, SIGNAL(buttonClicked(int)), this,SLOT(BatteryData_clicked(int)));//电池数据
    connect(pButton_Version, SIGNAL(buttonClicked(int)), this,SLOT(SystemlnformationVer_clicked(int)));//系统信息相关按钮的说明

    connect(ui->ChangeLanguage_btn, SIGNAL(clicked(bool)), this, SLOT(ChangeLanguage_btn_clicked()));//切换语言点击槽
    connect(ui->ChangeLanguage_btn_1, SIGNAL(clicked(bool)), this, SLOT(ChangeLanguage_btn_clicked()));//切换语言点击槽_高级设置
    connect(SwitchingBatteryTypes, SIGNAL(clicked(bool)), this, SLOT(SwitchingBatteryTypes_clicked()));
    connect(SwitchingBatteryTypes_Leaad, SIGNAL(clicked(bool)), this, SLOT(SwitchingBatteryTypes_Lead_clicked()));
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
    BatterySet_tab();/*系统-电池设置表-锂电*/
    BatterySet_Lead_tab();/*系统-电池设置表-铅酸*/
    RunTimeSet_tab();/*系统-自动运行时间设置表*/

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
                        << tr("IGBT temperature") << tr("Env. temperature") << tr("Leakage current");
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
                        << tr("Voltage_L") << tr("Current_L")<< tr("Power_L")<< tr("PositiveInuslation");
    QStringList PV_Tablist2;
    PV_Tablist2  << tr("Bus_H_Vol(+)") << tr("Bus_H_Vol(-)") << tr("Bus_L_Vol(+)")<< tr("Bus_L_Vol(-)")
                 << tr("IGBT Temperature")<< tr("NegativeInuslation")<< tr("Leakage current");
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
                    << tr("Output breaker") << tr("Output contactor")<< tr("Grid breaker")
                    << tr("DO1")<< tr("DO2")<< tr("DO3");
    QStringList State_Tablist2;
    State_Tablist2  << tr("DCAC Converter available") << tr("DC Soft start") << tr("Converter status")<< tr("Reactive power Regulation")
                    << tr("LVRT")<< tr("DI1")<< tr("DI2")<< tr("DI3")<< tr("DI4")<< tr("DI5")<< tr("DI6");
    QStringList State_Tablist3;
    State_Tablist3  << tr("Contactor status boost")<< tr("Contactor status buck")<< tr("Run mode")<< tr("DCDC Converter available")
                    << tr("Soft start status boost")<< tr("Soft start status buck")<< tr("Converter status")<< tr("ModeLock");

    ui->State_tableWidget->setColumnCount(6);
    ui->State_tableWidget->setRowCount(12);
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
    DCDC_Paramter_tab(ui->DCDC_tableWidget);    //DCDC参数页说明
}
//电池设置初始化_锂电池
void MyWidget::BatterySet_tab()
{
    ui->Lithum_Tab->setColumnWidth(0,350);
    ui->Lithum_Tab->setColumnWidth(1,350);

    Battery_Setup_Tab(ui->Lithum_Tab);
}
//电池设置表初始化_铅酸
void MyWidget::BatterySet_Lead_tab()
{
    ui->Lead_Tab->setColumnWidth(0,150);
    ui->Lead_Tab->setColumnWidth(1,150);
    ui->Lead_Tab->setColumnWidth(2,50);
    ui->Lead_Tab->setColumnWidth(3,150);
    ui->Lead_Tab->setColumnWidth(4,150);
    ui->Lead_Tab->setColumnWidth(5,50);
    Battery_Setup_Lead_Tab(ui->Lead_Tab);
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

    AutoOperation(ui->Time_tableWidget);    //自动运行页说明
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
    ui->EquipmentInfor_tableWidget->setColumnWidth(0,300);
    ui->EquipmentInfor_tableWidget->horizontalHeader()->setStretchLastSection(1);//自动占用剩余空间

    SystemMessages(ui->EquipmentInfor_tableWidget);//系统信息页说明
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

    DataReportMessages(ui->Report_tableWidget); //数据报表页说明
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

    HistoryRecord(ui->Historicalfailure_tableWidget);   //历史记录页说明
}

//操作日志
void MyWidget::OperationLog()
{
    QStringList Ope_headers;
    Ope_headers.clear();
    Ope_headers << tr("ModificationTime") << tr("RecordEvent");
    ui->Operation_tableWidget->setColumnCount(Ope_headers.size());
    ui->Operation_tableWidget->setRowCount(12);
    ui->Operation_tableWidget->setHorizontalHeaderLabels(Ope_headers);
    ui->Operation_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Operation_tableWidget->setShowGrid(true);//设置显示格子
    ui->Operation_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Operation_tableWidget->setEditTriggers(QAbstractItemView::SelectedClicked);//单机修改
    ui->Operation_tableWidget->setColumnWidth(0,260);
    ui->Operation_tableWidget->horizontalHeader()->setStretchLastSection(true);

    OperationLog_tab(ui->Operation_tableWidget);    //操作日志页说明
}

//告警信息绘表
void MyWidget::RTAlarm()
{
    ui->RTAlarm_Data_page->setColumnCount(5);
    ui->RTAlarm_Data_page->setRowCount(28);
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
    RTAlarm_Title << tr("Alarm name") << tr("Alarm leve")<< tr("Trigger condition") \
                    << tr("Response action")<< tr("Whether to reset\nautomatically and reset time");
    ui->RTAlarm_Data_page->setHorizontalHeaderLabels(RTAlarm_Title);

    PCS_Alarm_information_table();  //展示PCS故障信息表
}
/*************DCAC参数*************/
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

    DC_AC_Parameter_tab(ui->System_Tab);    //DCAC参数页说明
}

//展示PCS故障信息表
void MyWidget::PCS_Alarm_information_table()
{
    ui->RTAlarm_Data_page->setRowHeight(0, 110);
    QStringList RTAlarm_List;
    RTAlarm_List << tr("Inverter overcurrent") << tr("General failure") \
                << tr("Inductive current instantaneous value >3lp or inductive current RMS value >1.36ln") \
                << tr("PCS shut down and disconnect the output contactor") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(0, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(0, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(1, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Converter fault") << tr("General failure")\
                << tr("During soft startup of converter, inverter voltage RMS more then 1.2Vgrid or inverter voltage RMS less than 0.3Vgrid after 30s") \
                << tr("PCS shut down and Stop the soft startup") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(1, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(1, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(2, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Battery low voltage") << tr("Warning") \
                << tr("The DC input/output voltage is lower than the battery EOD voltage or less than 1.414 times the grid line voltage") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(2, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(2, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(3, 200);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Low battery power") << tr("Warning") \
                << tr("The battery voltage is lower than the EOD voltage value (applicable to BMS free battery systems to prevent voltage rebound)") \
                << tr("When the PCS is in discharge state, the machine stops (the charging process is not affected) and the AC contactor is disconnected") \
                << tr("Recoverable, The alarm is cleared when the charging time of PCS is longer than 5 minutes");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(3, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(3, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(4, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("DC bus overvoltage") << tr("Serious failure") \
                << tr("DC input voltage more then 850V") \
                << tr("PCS shut down, the AC contactor is disconnected, and the DC circuit breaker is tripped") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(4, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(4, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(5, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("DC bus short circuit") << tr("Serious failure") \
                << tr("The DC bus voltage is less than 200V, the DC current is more than 50A, and the judgment time is 200us") \
                << tr("PCS shut down, the AC contactor is disconnected, and the DC circuit breaker is tripped") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(5, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(5, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(6, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The output contactor is open") << tr("General failure")\
                << tr("When PCS is running, the auxiliary contact signal of AC contactor is in the disconnected state") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(6, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(6, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(7, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Output contactor short circuit") << tr("General failure")\
                << tr("When PCS is shut down, the auxiliary contact signal of AC contactor is closed") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(7, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(7, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(8, 310);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The converter is overheated") << tr("Warning") \
                << tr("IGBT temperature exceeds 105℃ or reactor temperature exceeds 160℃") \
                << tr("IGBT overtemperature: derating operation (grid-connected); IGBT overtemperature: PCS shut down (off-grid), AC contactor is disconnected; Reactor overtemperature: PCS shut down and AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(8, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(8, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(9, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Output over load") << tr("Warning") \
                << tr("Off-grid load power >110%Pn") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(9, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(9, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(10, 170);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The positive and negative terminals of the battery are connected inversely fault") << tr("Warning") \
                << tr("The DC input is reversed") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(10, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(10, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(11, 170);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The DC contactor is faulty") << tr("General failure") \
                << tr("When the driving signal is a closed signal, the pressure difference between the battery and the bus is greater than 50V;When the driving signal is off, the auxiliary contact signal is closed") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(11, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(11, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(12, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("EMS communicate\nfault") << tr("General failure") \
                << tr("The communication between PCS and EMS is lost, and the judgment time is 3 minutes") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, the fault recovers automatically 30 seconds after it is rectified");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(12, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(12, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(13, 90);
    RTAlarm_List.clear();
    RTAlarm_List << tr("BMS communicate\nfault") << tr("General failure") \
                << tr("Communication loss between PCS and BMS, judgment time 50s") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, the fault recovers automatically 30 seconds after it is rectified");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(13, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(13, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(14, 130);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Converter phase loss fault") << tr("General failure") \
                << tr("When the grid-connected power is greater than 50%, one or more lines of the three-phase circuit have no output power, and the judgment time is 10s") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(14, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(14, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(15, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Grid overvoltage") << tr("Warning") \
                << tr("If the power grid voltage exceeds the maximum allowable voltage (90% to 70% can be set), the judgment time is 1s") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(15, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(15, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(16, 110);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Grid undervoltage") << tr("Warning") \
                << tr("If the power grid voltage exceeds the maximum allowable voltage (90% to 70% can be set), the judgment time is 1s") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(16, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(16, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(17, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Grid reverse sequence") << tr("Warning") \
                << tr("The three-phase phase sequence is reversed (the positive sequence mode value of the grid voltage is less than the negative sequence mode value), and the judgment time is 1s") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(17, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(17, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(18, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Grid frequency anomaly") << tr("Warning") \
                << tr("Grid frequency frequency beyond the allowable range of PCS (±2Hz can be set)") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(18, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(18, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(19, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Converter shutter island protection") << tr("Warning") \
                << tr("Initiative shutter island protection mode, the power grid loses power, and the load matches the grid-connected power and phase Angle of the inverter") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(19, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(19, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(20, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Drive line fault") << tr("General failure") \
                << tr("The driver cable port is loose") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(20, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(20, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(21, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Lightning protection fault") << tr("Warning") \
                << tr("Surge arrester breakdown or leakage") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(21, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(21, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(22, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The AC auxiliary power supply is faulty") << tr("General failure") \
                << tr("The AC auxiliary power output is abnormal. Procedure") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(22, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(22, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(23, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("The DC auxiliary power supply is faulty") << tr("General failure") \
                << tr("The DC auxiliary power output is abnormal. Procedure") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(23, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(23, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(24, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Fan failure") << tr("Warning") \
                << tr("The fan cannot be started") \
                << tr("PCS derating operation") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(24, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(24, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(25, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Emergency shutdown") << tr("Warning") \
                << tr("Press the EPO button on the converter control panel") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(25, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(25, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(26, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("CT or Hall open circuit fault") << tr("General failure") \
                << tr("When PCS grid-connected power is greater than 50%, CT detection current is less than 70% of the given quantity") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Recoverable, automatic recovery 5 minutes after the fault is eliminated");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(26, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(26, i)->setTextAlignment(Qt::AlignCenter);
    }

    ui->RTAlarm_Data_page->setRowHeight(27, 150);
    RTAlarm_List.clear();
    RTAlarm_List << tr("Insulation impedance anomaly") << tr("Serious failure") \
                << tr("For 1000V systems, the positive or negative ground impedance is less than 33KΩ") \
                << tr("PCS shut down and the AC contactor is disconnected") \
                << tr("Unrecoverable");
    for(int i = 0; i < RTAlarm_List.size(); i++)
    {
        ui->RTAlarm_Data_page->setItem(27, i, new QTableWidgetItem(RTAlarm_List.at(i)));
        ui->RTAlarm_Data_page->item(27, i)->setTextAlignment(Qt::AlignCenter);
    }
}

//显示菜单
void MyWidget::on_UI_MenuBtn_clicked()
{
    if(m_menu->isHidden())
    {
        if(m_menu != nullptr)
        {
            delete m_menu;
        }
        m_menu = new Menu(this);
        connect(m_menu, SIGNAL(Sent(int)), this, SLOT(My_menuAction(int)));

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
 * 根据索引打开相应的界面
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
                m_menu->hide();
                QMessageBox::question(this, tr("Stand-by"), tr("This is the converter standby switch. Click the converter to enter the standby state"), tr("OK"));
            }//这是变流器待机开关，点击后变流器进入待机状态
            break;
        case MACHINEOPEN:
            {

            }
            break;
        case MACHINESWITCH:
            ui->stackedWidget->setCurrentWidget(ui->Switch_page);
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
        QMessageBox::question(this, tr("Bat volage")\
                              ,tr("This is the total battery pressure of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol."), tr("OK"));
        break;
    case 1:
        QMessageBox::question(this, tr("Bat current")\
                              ,tr("This is the total current of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol."), tr("OK"));
        break;
    case 2:
        QMessageBox::question(this, tr("SOC")\
                              ,tr("This is the SOC of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the percentage of the current battery remaining."), tr("OK"));
        break;
    case 3:
        QMessageBox::question(this, tr("SOH")\
                              ,tr("This is the SOH of the battery pack uploaded from the BMS through the CAN/485/TCP communication protocol, the percentage of the current capacity of the battery pack to the factory capacity, that is, the health of the battery."), tr("OK"));
        break;
    case 4:
        QMessageBox::question(this, tr("Cell voltage(max)")\
                              ,tr("This is the maximum voltage of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the maximum voltage of all cell cells at present."), tr("OK"));
        break;
    case 5:
        QMessageBox::question(this, tr("Cell voltage(min)")\
                              ,tr("This is the lowest voltage of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the lowest voltage of all battery cells at present."), tr("OK"));
        break;
    case 6:
        QMessageBox::question(this, tr("Cell temp.(max)")\
                              ,tr("This is the highest temperature of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the highest temperature of all battery cells at present."), tr("OK"));
        break;
    case 7:
        QMessageBox::question(this, tr("Cell temp.(min)")\
                              ,tr("This is the lowest temperature of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the lowest temperature of all battery cells at present."), tr("OK"));
        break;
    case 8:
        QMessageBox::question(this, tr("Charging current limite")\
                              ,tr("This is the upper limit of the charging current uploaded from the BMS via the CAN/485/TCP communication protocol, the maximum charging current allowed by the current battery pack (Note: when charging the end, PCS will limit the current according to the actual current)."), tr("OK"));
        break;
    case 9:
        QMessageBox::question(this, tr("Discharging current limite")\
                              ,tr("This is the upper limit of the discharge current uploaded from the BMS via the CAN/485/TCP communication protocol, the maximum discharge current allowed by the current battery pack."), tr("OK"));
        break;
    case 10:
        QMessageBox::question(this, tr("Allow charge power")\
                              ,tr("This is the rechargeable power uploaded from the BMS through the CAN/485 communication protocol. The charging power of the battery cannot exceed this limit value."), tr("OK"));
        break;
    case 11:
        QMessageBox::question(this, tr("Allow discharge power")\
                              ,tr("This is the discharge power uploaded from the BMS using the CAN/485 communication protocol. The discharge power of the battery cannot exceed this limit."), tr("OK"));
        break;
    case 12:
        QMessageBox::question(this,tr ("Allow charge energy")\
                              ,tr("This is the allowable charge amount uploaded from the BMS via the CAN/485/TCP communication protocol, the capacity of the current battery pack allowed to charge (Note: only some BMS will provide this value)."), tr("OK"));
        break;
    case 13:
        QMessageBox::question(this,tr ("Allow discharge energy")\
                              ,tr("This is the allowable discharge from the BMS via the CAN/485/TCP communication protocol, the current capacity of the battery pack allowed to discharge (Note: only some BMS will provide this value)."), tr("OK"));
        break;
    case 14:
        QMessageBox::question(this, tr("Alarm level")\
                              ,tr("This is the alarm level icon. The color is changed according to the alarm level uploaded by the BMS. The alarm level is green for normal alarms, yellow for primary alarms, orange for secondary alarms, and red for tertiary alarms.If the alarm is Level 1 or Level 2, PCS does not respond.If the alarm is Level 3, the PCS shuts down."), tr("OK"));
        break;
    case 15:
        QMessageBox::question(this, tr("Charge enable")\
                              ,tr("This is the current battery status uploaded by BMS via CAN/485/TCP. Enable indicates that the battery can be charged. Disable indicates that the battery cannot be charged."), tr("OK"));
        break;
    case 16:
        QMessageBox::question(this, tr("Discharge enable")\
                              ,tr("This is the current state of the battery uploaded by the BMS via the CAN/485/TCP protocol. Enable indicates that the battery can be discharged. Disable indicates that the battery cannot be discharged."), tr("OK"));
        break;
    default:
        break;
    }
}

/****系统信息相关按钮的说明****/
void MyWidget::SystemlnformationVer_clicked(int nid)
{
    switch (nid)
    {
        case 0:
            QMessageBox::question(this, tr("Interface")\
                                  ,tr("This is the interface number, which defaults to eth0"), tr("OK"));
            break;//这是接口号，默认eth0\n
        case 1:
            QMessageBox::question(this, tr("Port")\
                                  ,tr("This is the port number, default 502"), tr("OK"));
            break;//这是端口号，默认502\n
        case 2:
            QMessageBox::question(this, tr("Ip")\
                                  ,tr("This is the IP address. The default is 192.168.1.100"), tr("OK"));
            break;//这是IP地址，默认192.168.1.100\n
        case 3:
            QMessageBox::question(this, tr("Netmask")\
                                  ,tr("This is the subnet mask, 255.255.255.0"), tr("OK"));
            break;//这是子网掩码，255.255.255.0\n
        case 4:
            QMessageBox::question(this, tr("Gateway")\
                                  ,tr("This is the gateway. The default is 192.168.1.1"), tr("OK"));
            break;//这是网关，默认192.168.1.1\n
        case 5:
            QMessageBox::question(this, tr("Serber ip")\
                                  ,tr("This is the server IP address. The default is 192.168.1.200"), tr("OK"));
            break;//这是服务器IP，默认192.168.1.200\n
        case 6:
            QMessageBox::question(this, tr("Apply and Restart system")\
                                  ,tr("This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program."), tr("OK"));
            break;//这是应用并重启系统，点击后将重启系统，如有升级，将会使用新的程序\n
        default:
            break;
    }
}
/*************绘制高级设置界面**************/
void MyWidget::SystemParam_tbnt_released()
{
    for(int i=0; i<11;i++)//调整功能设置、系统参数设置的列宽行高
    {
        ui->UI_Parameter_Tab->setColumnWidth(i,170);
        ui->UI_Parameter_Tab->setRowHeight(i,38);
        ui->UI_SystemParameter_Tab->setColumnWidth(i,170);
        ui->UI_SystemParameter_Tab->setRowHeight(i++,42);

        ui->UI_Parameter_Tab->setColumnWidth(i,90);
        ui->UI_Parameter_Tab->setRowHeight(i,38);
        ui->UI_SystemParameter_Tab->setColumnWidth(i,90);
        ui->UI_SystemParameter_Tab->setRowHeight(i++,42);

        ui->UI_Parameter_Tab->setColumnWidth(i,55);
        ui->UI_Parameter_Tab->setRowHeight(i,38);
        ui->UI_SystemParameter_Tab->setColumnWidth(i,55);
        ui->UI_SystemParameter_Tab->setRowHeight(i,42);
    }
    for(int i=0;i<9;i++)//调整 外设 的列宽行高
    {
        ui->ExternalDevice_tW->setColumnWidth(i,200);
        ui->ExternalDevice_tW->setRowHeight(i,50);
        if(i==3){
            ui->ExternalDevice_tW->setColumnWidth(i,280);
            ui->ExternalDevice_tW->setRowHeight(i,50);
        }
    }
    ui->ExternalDevice_tW->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->ExternalDevice_tW->verticalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->ExternalDevice_tW->setStyleSheet("selection-background-color:lightblue;");

    for(int i=0; i<14;i++)//调整 DCAC调试 的列宽行高
    {
        if(i%2==0)
        {
            ui->UI_Debug_Tab->setColumnWidth(i,175);
            ui->UI_Debug_Tab->setRowHeight(i,50);
        }
        else
        {
            ui->UI_Debug_Tab->setColumnWidth(i,140);
            ui->UI_Debug_Tab->setRowHeight(i,50);
        }
    }
    for (int i=0; i<11; i++)
    {
            ui->UI_Debug_Tab->item (i,0)->setTextAlignment(Qt::AlignHCenter | Qt::AlignVCenter);
            ui->UI_Debug_Tab->item (i,2)->setTextAlignment(Qt::AlignHCenter | Qt::AlignVCenter);
            ui->UI_Debug_Tab->item (i,4)->setTextAlignment(Qt::AlignHCenter | Qt::AlignVCenter);
    }
    for(int i=0; i<7;i++)//调整 DCDC调试 的列宽行高
    {
        if(i%2==0)
        {
            ui->UI_DCDC_Debug_tableWidget->setColumnWidth(i,180);
            ui->UI_DCDC_Debug_tableWidget->setRowHeight(i,50);
        }
        else
        {
            ui->UI_DCDC_Debug_tableWidget->setColumnWidth(i,140);
            ui->UI_DCDC_Debug_tableWidget->setRowHeight(i,50);
        }
    }

    FunctionSet(ui->UI_Parameter_Tab);  //功能设置页说明
    SystemParameter(ui->UI_SystemParameter_Tab);    //系统设置页说明
    ExternalDevice(ui->ExternalDevice_tW);  //外设页说明
    DCAC_Debugg(ui->UI_Debug_Tab);  //DCAC调试页说明
    DCDC_Debugg(ui->UI_DCDC_Debug_tableWidget); //DCDC调试页说明
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
}

void MyWidget::on_RTD_Converter_clicked()
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);
}

void MyWidget::on_RTD_DC_clicked()//显示模块的实时数据
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->DC_page);
}

void MyWidget::on_RTD_Grid_clicked()//显示电网的实时数据
{
    ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
    ui->MPS_Data_stw->setCurrentWidget(ui->Grid_page);
}

void MyWidget::on_RTD_Load_clicked()//显示负载的实时数据
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

    if(MPS_vol_AB != nullptr)
    {
        delete MPS_vol_AB;
    }
    MPS_vol_AB = new Specification(this,MPS_vol_AB_explain, myTable, line++, column, \
                                            "0V", tr("voltage(AB)"), \
                                            tr("The inverter side voltage of the current MPS is the phase voltage between phase A and phase B."));
    MPS_vol_AB->add_Specification();

    if(MPS_vol_BC != nullptr)
    {
        delete MPS_vol_BC;
    }
    MPS_vol_BC = new Specification(this,MPS_vol_BC_explain, myTable, line++, column, \
                                            "0V", "tr(voltage(BC))", \
                                            tr("The inverter side voltage of the current MPS is the phase voltage between phase B and phase C."));
    MPS_vol_BC->add_Specification();

    if(MPS_vol_CA != nullptr)
    {
        delete MPS_vol_CA;
    }
    MPS_vol_CA = new Specification(this,MPS_vol_CA_explain, myTable, line++, column, \
                                            "0V", tr("voltage(AC)"), \
                                            tr("The inverter side voltage of the current MPS is the phase voltage between phase A and phase C."));
    MPS_vol_CA->add_Specification();

    if(MPS_cur_A != nullptr)
    {
        delete MPS_cur_A;
    }
    MPS_cur_A = new Specification(this,MPS_cur_A_explain, myTable, line++, column, \
                                            "0A", tr("current(A)"), \
                                           tr("The current of the inverter side of the current MPS is the current of phase A."));
    MPS_cur_A->add_Specification();

    if(MPS_cur_B != nullptr)
    {
        delete MPS_cur_B;
    }
    MPS_cur_B = new Specification(this,MPS_cur_B_explain, myTable, line++, column, \
                                            "0A", tr("current(B)"), \
                                            tr("The current of the inverter side of the current MPS is the current of phase B."));
    MPS_cur_B->add_Specification();

    if(MPS_cur_C != nullptr)
    {
        delete MPS_cur_C;
    }
    MPS_cur_C = new Specification(this,MPS_cur_C_explain, myTable, line++, column, \
                                            "0A", tr("current(C)"), \
                                            tr("The current of the inverter side of the current MPS is the current of phase C."));
    MPS_cur_C->add_Specification();

    if(MPS_IGBT_T != nullptr)
    {
        delete MPS_IGBT_T;
    }
    MPS_IGBT_T = new Specification(this,MPS_IGBT_T_explain, myTable, line++, column, \
                                            "0℃", tr("IGBT temperature"), \
                                            tr("The current IGBT temperature of MPS shall not exceed 105℃, otherwise PCS will run derated."));
    MPS_IGBT_T->add_Specification();

    if(MPS_Env_T != nullptr)
    {
        delete MPS_Env_T;
    }
    MPS_Env_T = new Specification(this,MPS_Env_T_explain, myTable, line++, column, \
                                            "0℃", tr("Environment temperature"), \
                                            tr("The ambient temperature of the current MPS."));
    MPS_Env_T->add_Specification();

    if(MPS_Leakage_cur != nullptr)
    {
        delete MPS_Leakage_cur;
    }
    MPS_Leakage_cur = new Specification(this,MPS_Leakage_cur_explain, myTable, line++, column, \
                                            "0mA", tr("Leakage current"), \
                                            tr("Leakage current: the current to the ground of the grounding wire. If the value is larger, it indicates that there is leakage."));
    MPS_Leakage_cur->add_Specification();
    line=0;
    column=3;

    if(PV_vol != nullptr)
    {
        delete PV_vol;
    }
    PV_vol = new Specification(this,PV_vol_explain, myTable, line++, column, \
                                            "0V", tr("PV voltage"), \
                                            tr("Total voltage on the PV side collected by the current MPS."));
    PV_vol->add_Specification();

    if(PV_cur != nullptr)
    {
        delete PV_cur;
    }
    PV_cur = new Specification(this,PV_cur_explain, myTable, line++, column, \
                                            "0A", tr("PV current"), \
                                            tr("Total current on the PV side collected by MPS."));
    PV_cur->add_Specification();

    if(PV_power != nullptr)
    {
        delete PV_power;
    }
    PV_power = new Specification(this,PV_power_explain, myTable, line++, column, \
                                            "0kW", tr("PV power"), \
                                            tr("The PV side power is obtained by multiplying the total voltage and total current calculated in the current MPS."));
    PV_power->add_Specification();

    if(Batter_vol != nullptr)
    {
        delete Batter_vol;
    }
    Batter_vol = new Specification(this,Batter_vol_explain, myTable, line++, column, \
                                            "0V", tr("Battery voltage"), \
                                            tr("The current MPS samples the battery voltage from the connected battery."));
    Batter_vol->add_Specification();

    if(Batter_cur != nullptr)
    {
        delete Batter_cur;
    }
    Batter_cur = new Specification(this,Batter_cur_explain, myTable, line++, column, \
                                            "0A", tr("Battery current"), \
                                            tr("Battery current sampled by the MPS from the connected battery."));
    Batter_cur->add_Specification();

    if(Batter_power != nullptr)
    {
        delete Batter_power;
    }
    Batter_power = new Specification(this,Batter_power_explain, myTable, line++, column, \
                                            "0kW", tr("Battery power"), \
                                            tr("At present, MPS calculates the product of battery voltage and battery current to obtain battery power."));
    Batter_power->add_Specification();

    if(Bus_vol != nullptr)
    {
        delete Bus_vol;
    }
    Bus_vol = new Specification(this,Bus_vol_explain, myTable, line++, column, \
                                            "0V", tr("Bus voltage"), \
                                            tr("The current bus voltage sampled by MPS from the bus side."));
    Bus_vol->add_Specification();

    if(Bus_cur != nullptr)
    {
        delete Bus_cur;
    }
    Bus_cur = new Specification(this,Bus_cur_explain, myTable, line++, column, \
                                            "0V", tr("Bus current"), \
                                            tr("Current bus current sampled by MPS from the bus side."));
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

    if(PV_vol_H != nullptr)
    {
        delete PV_vol_H;
    }
    PV_vol_H = new Specification(this,PV_vol_H_explain, myTable, line++, column, \
                                            "0V", tr("Voltage H"), \
                                            tr("Current voltage of the high voltage side of the DCDC module."));
    PV_vol_H->add_Specification();

    if(PV_cur_H != nullptr)
    {
        delete PV_cur_H;
    }
    PV_cur_H = new Specification(this,PV_cur_H_explain, myTable, line++, column, \
                                            "0A", tr("Current H"), \
                                            tr("Current of the high voltage side of the DCDC module."));
    PV_cur_H->add_Specification();

    if(PV_power_H != nullptr)
    {
        delete PV_power_H;
    }
    PV_power_H = new Specification(this,PV_power_H_explain, myTable,line++, column, \
                                            "0kW", tr("Power H"), \
                                            tr("Power of the high voltage side of the DCDC module."));
    PV_power_H->add_Specification();

    if(PV_vol_L != nullptr)
    {
        delete PV_vol_L;
    }
    PV_vol_L = new Specification(this,PV_vol_L_explain, myTable, line++, column, \
                                            "0V", tr("Voltage L"), \
                                            tr("Voltage of the low voltage side of the DCDC module."));
    PV_vol_L->add_Specification();

    if(PV_cur_L != nullptr)
    {
        delete PV_cur_L;
    }
    PV_cur_L = new Specification(this,PV_cur_L_explain, myTable,line++, column, \
                                            "0A", tr("Current L"), \
                                            tr("Current of the low-voltage side of the DCDC module."));
    PV_cur_L->add_Specification();

    if(PV_power_L != nullptr)
    {
        delete PV_power_L;
    }
    PV_power_L = new Specification(this,PV_power_L_explain, myTable, line++, column, \
                                            "0kW", tr("Power L"), \
                                            tr("Power of the low voltage side of the DCDC module."));
    PV_power_L->add_Specification();

    if(PositiveInuslation != nullptr)
    {
        delete PositiveInuslation;
    }
    PositiveInuslation = new Specification(this,PositiveInuslation_explain, myTable, line++, column, \
                                            "0kΩ", tr("PositiveInuslation"), \
                                            tr("Positive insulation impedance of the current DCDC module."));
    PositiveInuslation->add_Specification();

    line=0;
    column=3;

    if(Bus_H_vol_add != nullptr)
    {
        delete Bus_H_vol_add;
    }
    Bus_H_vol_add = new Specification(this,Bus_H_vol_add_explain, myTable, line++, column, \
                                            "0V", tr("Bus_H_vol(+)"), \
                                            tr("Positive bus voltage of the high voltage side of the DC module."));
    Bus_H_vol_add->add_Specification();

    if(Bus_H_vol_reduce != nullptr)
    {
        delete Bus_H_vol_reduce;
    }
    Bus_H_vol_reduce = new Specification(this,Bus_H_vol_reduce_explain, myTable, line++, column, \
                                            "0V", tr("Bus_H_vol(-)"), \
                                            tr("The current high voltage side of the DC module is negative for the bus voltage."));
    Bus_H_vol_reduce->add_Specification();

    if(Bus_L_vol_add != nullptr)
    {
        delete Bus_L_vol_add;
    }
    Bus_L_vol_add = new Specification(this,Bus_L_vol_add_explain, myTable, line++, column, \
                                            "0V", tr("Bus_L_vol(+)"), \
                                            tr("Positive bus voltage of the low voltage side of the DC module."));
    Bus_L_vol_add->add_Specification();

    if(Bus_L_vol_reduce != nullptr)
    {
        delete Bus_L_vol_reduce;
    }
    Bus_L_vol_reduce = new Specification(this,Bus_L_vol_reduce_explain, myTable, line++, column, \
                                            "0V", tr("Bus_L_vol(-)"), \
                                            tr("The low voltage side of the DC module is negative for the bus voltage."));
    Bus_L_vol_reduce->add_Specification();

    if(PV_IGBT_T != nullptr)
    {
        delete PV_IGBT_T;
    }
    PV_IGBT_T = new Specification(this,PV_IGBT_T_explain, myTable, line++, column, \
                                            "0℃", tr("IGBT Temperature"), \
                                            tr("The current IGBT temperature of MPS shall not exceed 105℃, otherwise PCS will run derated."));
    PV_IGBT_T->add_Specification();

    if(NegativeInuslation != nullptr)
    {
        delete NegativeInuslation;
    }
    NegativeInuslation = new Specification(this,NegativeInuslation_explain, myTable, line++, column, \
                                            "0kΩ", tr("NegativeInuslation"), \
                                            tr("Negative insulation impedance of the current DCDC module."));
    NegativeInuslation->add_Specification();

    if(Leakage_cur != nullptr)
    {
        delete Leakage_cur;
    }
    Leakage_cur = new Specification(this,Leakage_cur_explain, myTable, line++, column, \
                                            "0mA", tr("Leakage_cur"), \
                                            tr("Current leakage current of the DCDC module."));
    Leakage_cur->add_Specification();
}
//电网数据 绘制button
void MyWidget::Grid_Data(QTableWidget *myTable)
{
    int line=0;int column=1;

    if(Grid_vol_AB != nullptr)
    {
        delete Grid_vol_AB;
    }
    Grid_vol_AB = new Specification(this,Grid_vol_AB_explain, myTable, line++, column, \
                                            "0V", tr("Voltage(AB)"), \
                                            tr("The grid side voltage of the current MPS, this item is the phase voltage between phase A and phase B."));
    Grid_vol_AB->add_Specification();

    if(Grid_vol_BC != nullptr)
    {
        delete Grid_vol_BC;
    }
    Grid_vol_BC = new Specification(this,Grid_vol_BC_explain, myTable, line++, column, \
                                            "0V", tr("Voltage(BC)"), \
                                            tr("The grid side voltage of the current MPS, this item is the phase voltage between phase B and phase C."));
    Grid_vol_BC->add_Specification();

    if(Grid_vol_CA != nullptr)
    {
        delete Grid_vol_CA;
    }
    Grid_vol_CA = new Specification(this,Grid_vol_CA_explain, myTable,line++, column, \
                                            "0V", tr("Voltage(CA)"), \
                                            tr("The grid side voltage of the current MPS, this item is the phase voltage between phase A and phase C."));
    Grid_vol_CA->add_Specification();

    if(Grid_cur_A != nullptr)
    {
        delete Grid_cur_A;
    }
    Grid_cur_A = new Specification(this,Grid_cur_A_explain, myTable, line++, column, \
                                            "0A", tr("Current(A)"), \
                                            tr("The current on the grid side of MPS, this item is the current of phase A."));
    Grid_cur_A->add_Specification();

    if(Grid_cur_B != nullptr)
    {
        delete Grid_cur_B;
    }
    Grid_cur_B = new Specification(this,Grid_cur_B_explain, myTable, line++, column, \
                                            "0A", tr("Current(B)"), \
                                            tr("The current on the grid side of MPS, this item is the current of phase B."));
    Grid_cur_B->add_Specification();

    if(Grid_cur_C != nullptr)
    {
        delete Grid_cur_C;
    }
    Grid_cur_C = new Specification(this,Grid_cur_C_explain, myTable, line++, column, \
                                            "0A", tr("Current(C)"), \
                                            tr("The current on the grid side of MPS, this item is the current of phase C."));
    Grid_cur_C->add_Specification();

    line=0;
    column=3;

    if(Grid_active_power != nullptr)
    {
        delete Grid_active_power;
    }
    Grid_active_power = new Specification(this,Grid_active_power_explain, myTable, line++, column, \
                                            "0kW", tr("Active power"), \
                                            tr("Current active power (P) on the grid side of MPS."));
    Grid_active_power->add_Specification();

    if(Grid_reactive_power != nullptr)
    {
        delete Grid_reactive_power;
    }
    Grid_reactive_power = new Specification(this,Grid_reactive_power_explain, myTable, line++, column, \
                                            "0Kvar", tr("Reactive power"), \
                                            tr("Current reactive power (Q) on the grid side of MPS."));
    Grid_reactive_power->add_Specification();

    if(Grid_apparent_power != nullptr)
    {
        delete Grid_apparent_power;
    }
    Grid_apparent_power = new Specification(this,Grid_apparent_power_explain, myTable, line++, column, \
                                            "0kVA", tr("Apparent power"), \
                                            tr("Current MPS grid side view power (S), S= √((P^2+Q^2))."));
    Grid_apparent_power->add_Specification();

    if(Grid_power_factor != nullptr)
    {
        delete Grid_power_factor;
    }
    Grid_power_factor = new Specification(this,Grid_power_factor_explain, myTable, line++, column, \
                                            "0", tr("Power factor"), \
                                            tr("Grid side power factor (Pf) of the current MPS, Pf = P/S."));
    Grid_power_factor->add_Specification();

    if(Grid_Frequency != nullptr)
    {
        delete Grid_Frequency;
    }
    Grid_Frequency = new Specification(this,Grid_Frequency_explain, myTable, line++, column, \
                                            "0Hz", tr("Frequency"), \
                                            tr("Current MPS collection of power grid frequency."));
    Grid_Frequency->add_Specification();

}
//负载数据 绘制button
void MyWidget::Load_Data(QTableWidget *myTable)
{
    int line=0;int column=1;

    if(Load_vol_AB != nullptr)
    {
        delete Load_vol_AB;
    }
    Load_vol_AB = new Specification(this,Load_vol_AB_explain, myTable, line++, column, \
                                            "0V", tr("Voltage(AB)"), \
                                            tr("The load side voltage of the current MPS, this item is the phase voltage between phase A and phase B."));
    Load_vol_AB->add_Specification();

    if(Load_vol_BC != nullptr)
    {
        delete Load_vol_BC;
    }
    Load_vol_BC = new Specification(this,Load_vol_BC_explain, myTable, line++, column, \
                                            "0V", tr("Voltage(BC)"), \
                                            tr("The load side voltage of the current MPS, this item is the phase voltage between phase B and phase C."));
    Load_vol_BC->add_Specification();

    if(Load_vol_CA != nullptr)
    {
        delete Load_vol_CA;
    }
    Load_vol_CA = new Specification(this,Load_vol_CA_explain, myTable, line++, column, \
                                            "0V", tr("Voltage(CA)"), \
                                            tr("The load side voltage of the current MPS, this item is the phase voltage between phase A and phase C."));
    Load_vol_CA->add_Specification();

    if(Load_cur_A != nullptr)
    {
        delete Load_cur_A;
    }
    Load_cur_A = new Specification(this,Load_cur_A_explain, myTable, line++, column, \
                                            "0A", tr("Current(A)"), \
                                            tr("The current on the load side of MPS, this item is the current of phase A."));
    Load_cur_A->add_Specification();

    if(Load_cur_B != nullptr)
    {
        delete Load_cur_B;
    }
    Load_cur_B = new Specification(this,Load_cur_B_explain, myTable, line++, column, \
                                            "0A", tr("Current(B)"), \
                                            tr("The current at the load side of MPS is the current of phase B."));
    Load_cur_B->add_Specification();

    if(Load_cur_C != nullptr)
    {
        delete Load_cur_C;
    }
    Load_cur_C = new Specification(this,Load_cur_C_explain, myTable, line++, column, \
                                            "0A", tr("Current(C)"), \
                                            tr("The current at the load side of MPS is the current of phase C."));
    Load_cur_C->add_Specification();

    line=0;
    column=3;

    if(Load_active_power != nullptr)
    {
        delete Load_active_power;
    }
    Load_active_power = new Specification(this,Load_active_power_explain, myTable, line++, column, \
                                            "0kW", tr("Active power"), \
                                            tr("Current MPS active power (P) on load side."));
    Load_active_power->add_Specification();

    if(Load_reactive_power != nullptr)
    {
        delete Load_reactive_power;
    }
    Load_reactive_power = new Specification(this,Load_reactive_power_explain, myTable, line++, column, \
                                            "0Kvar", tr("Reactive power"), \
                                            tr("Reactive power (Q) on the load side of current MPS."));
    Load_reactive_power->add_Specification();

    if(Load_apparent_power != nullptr)
    {
        delete Load_apparent_power;
    }
    Load_apparent_power = new Specification(this,Load_apparent_power_explain, myTable, line++, column, \
                                            "0kVA", tr("Apparent power"), \
                                            tr("Current MPS load side view at power (S), S= √((P^2+Q^2))."));
    Load_apparent_power->add_Specification();

    if(Load_power_factor != nullptr)
    {
        delete Load_power_factor;
    }
    Load_power_factor = new Specification(this,Load_power_factor_explain, myTable, line++, column, \
                                            "0", tr("Power factor"), \
                                           tr("The load side power factor (Pf) of the current MPS, Pf = P/S."));
    Load_power_factor->add_Specification();

    if(Load_Frequency != nullptr)
    {
        delete Load_Frequency;
    }
    Load_Frequency = new Specification(this,Load_Frequency_explain, myTable, line++, column, \
                                            "0Hz", tr("Frequency"), \
                                            tr("Current MPS collection of power load frequency."));
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
                                            tr("Close"), tr("DC input breaker"), \
                                            "Dc circuit breaker has three states: open, closed, trip; If the DC circuit breaker is overcurrent, the DC circuit breaker will trip.");
    DC_input_Bre->add_Specification();
    DC_Con = new Specification(this,DC_Con_explain, myTable, line++, column, \
                               tr("Close"), tr("DC contactor"), \
                               tr("DC contactor has two states: Break, Close; When the DC side is soft Break, the DC contactor is closed. When the DC side of the battery is disconnected, the DC bus voltage drops to a certain voltage, and the DC contactor is disconnected."));
    DC_Con->add_Specification();
    M_Bypass_Bre = new Specification(this,M_Bypass_Bre_explain, myTable, line++, column, \
                                            tr("Close"), tr("Maintenance Bypass Breaker"), \
                                            tr("Maintenance bypass circuit breaker has two states: Break, Close; This circuit breaker is only used for machine maintenance, if necessary, please contact the maintenance personnel."));
    M_Bypass_Bre->add_Specification();
    Output_Bre = new Specification(this,Output_Bre_explain, myTable, line++, column, \
                                            tr("Close"), tr("Output breaker"), \
                                            tr("The output circuit breaker has three states: open, closed, trip; If the output circuit breaker overcurrent, the output circuit breaker will trip."));
    Output_Bre->add_Specification();
    Output_Con = new Specification(this,Output_Con_explain, myTable, line++, column, \
                                            tr("Close"), tr("Output contactor"), \
                                            tr("The output contactor has two states: Break, Close; When the DC side soft opening is completed, the output contactor is closed; When the converter is turned off, the output contactor is disconnected."));
    Output_Con->add_Specification();
    Grid_Bre = new Specification(this,Grid_Bre_explain, myTable, line++, column, \
                                            tr("Close"), tr("Grid breaker"), \
                                            tr("The power grid circuit breaker has three states: Break, Close, Trip; The power grid circuit breaker can only be manually disconnected. If the power grid circuit breaker overflows, the power grid circuit breaker may trip."));
    Grid_Bre->add_Specification();
    DO1 = new Specification(this,DO1_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DO1"), \
                                            tr("This is the status of the output dry contact 1, which can be enabled or disabled."));
    DO1->add_Specification();
    DO2 = new Specification(this,DO2_explain, myTable,line++, column, \
                                            tr("Disable"), tr("DO2"), \
                                            tr("This is the status of the output dry contact 2, which can be enabled or disabled."));
    DO2->add_Specification();
    DO3 = new Specification(this,DO3_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DO3"), \
                                            tr("This is the status of the output dry contact 3, which can be enabled or disabled."));
    DO3->add_Specification();

    line = 0;
    column += 2;
    DCAC_Conver_avail = new Specification(this,DCAC_Conver_avail_explain, myTable, line++, column, \
                                            tr("Enable"), tr("DCAC Converter available"), \
                                            tr("The converter can be enabled in two states: enable and disable; If the internal self-test of the machine is no problem, the converter is enabled; Otherwise the converter is prohibited."));
    DCAC_Conver_avail->add_Specification();
    DC_Soft_Start = new Specification(this,DC_Soft_Start_explain, myTable, line++, column, \
                                            tr("Not starting"), tr("DC Soft start"), \
                                            tr("The DC Soft boot has three states: Soft starting, complete, and Not starting. Soft start means that when the converter is started, it gradually accelerates or decelerates the device to the normal operating state by controlling the change of current or voltage, so as to reduce the current shock and voltage peak in the circuit, protect the circuit components and reduce the mechanical damage of the device. Soft start can increase device life, reduce energy consumption, and improve system efficiency."));
    DC_Soft_Start->add_Specification();
    Converter_Status = new Specification(this,Converter_Status_explain, myTable, line++, column, \
                                            tr("OFF"), tr("Converter Status"), \
                                            tr("There are eight converter states:Shut down, Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Drop and Connected,Standby, Grid-OFF Charge."));
    Converter_Status->add_Specification();
    Reactive_P_Reg = new Specification(this,Reactive_P_Reg_explain, myTable, line++, column, \
                                            tr("Disable"), tr("Reactive power Regulation"), \
                                            tr("There are three types of reactive power regulation: Disable, Pf regulation, and Q regulation."));
    Reactive_P_Reg->add_Specification();
    LVRT = new Specification(this,LVRT_explain, myTable, line++, column, \
                                            tr("LVRT"), tr("LVRT"), \
                                            tr("This is the current state of low voltage crossing (LVRT). Low voltage crossing refers to the ability to withstand a certain limit of low voltage of the grid within a certain period of time without exiting the operation. There are two states here, namely Non and LVRT."));
    LVRT->add_Specification();
    DI1 = new Specification(this,DI1_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI1"), \
                                            tr("This is the status of the input dry contact 1. The status can be Enable or Disable."));
    DI1->add_Specification();
    DI2 = new Specification(this,DI2_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI2"), \
                                            tr("This is the status of the input dry contact 2. The status can be Enable or Disable."));
    DI2->add_Specification();
    DI3 = new Specification(this,DI3_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI3"), \
                                            tr("This is the status of the input dry contact 3. The status can be Enable or Disable."));
    DI3->add_Specification();
    DI4 = new Specification(this,DI4_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI4"), \
                                            tr("This is the status of the input dry contact 4. The status can be Enable or Disable."));
    DI4->add_Specification();
    DI5 = new Specification(this,DI5_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI5"), \
                                            tr("This is the status of the input dry contact 5. The status can be Enable or Disable."));
    DI5->add_Specification();
    DI6 = new Specification(this,DI6_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DI6"), \
                                            tr("This is the status of the input dry contact 6. The status can be Enable or Disable."));
    DI6->add_Specification();
    line = 0;
    column += 2;
    Contator_Sta_Boost = new Specification(this,Contator_Sta_Boost_explain, myTable, line++, column, \
                                            tr("OFF"), tr("Contator Status Boost"), \
                                            tr("DC module high voltage contactor has two states: open, closed; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected."));
    Contator_Sta_Boost->add_Specification();
    Contator_Sta_Buck = new Specification(this,Contator_Sta_Buck_explain, myTable, line++, column, \
                                            tr("OFF"), tr("Contator Status Buck"), \
                                            tr("DC module low voltage contactor has two states: open, closed; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected."));
    Contator_Sta_Buck->add_Specification();
    Run_mode = new Specification(this,Run_mode_explain, myTable, line++, column, \
                                            tr("Buck"), tr("Run mode"), \
                                            tr("This is the current 'DC' module operation mode, there are Buck (Buck), Boost (Boost) two states."));
    Run_mode->add_Specification();
    DCDC_Converter_ava = new Specification(this,DCDC_Converter_ava_explain, myTable, line++, column, \
                                            tr("Disable"), tr("DCDC Converter available"), \
                                            tr("The DC converter can be enabled in two states: Enable and disable. If the internal self-test of the machine is no problem, the DC converter is enabled. Otherwise, the DC converter is prohibited."));
    DCDC_Converter_ava->add_Specification();
    Soft_Start_Sta_Boost = new Specification(this,Soft_Start_Sta_Boost_explain, myTable, line++, column, \
                                            tr("Not starting"), tr("Soft Start Status Boost"), \
                                            tr("This is the current high voltage side soft start state of the 'DC' module. There are three states: Not starting, Soft start, and Soft Start completion."));
    Soft_Start_Sta_Boost->add_Specification();
    Soft_Start_Sta_Buck = new Specification(this,Soft_Start_Sta_Buck_explain, myTable, line++, column, \
                                            tr("Not starting"), tr("Soft Start Status Buck"), \
                                            tr("This is the soft start state of the low voltage side of the current 'DC' module. There are three states: Not starting, Soft start, and Soft Start completion."));
    Soft_Start_Sta_Buck->add_Specification();
    Converter_Status_V = new Specification(this,Converter_Status_V_explain, myTable, line++, column, \
                                            tr("Turn off"), tr("Converter Status"), \
                                            tr("This is the working mode state of the current 'DC' module, including six states: Turn off, Standby, Constant VOL, Constant CUR, optimal power point tracking and Fault Recovery."));
    Converter_Status_V->add_Specification();
    ModeLock = new Specification(this,ModeLock_explain, myTable, line++, column, \
                                            tr("OFF"), tr("ModeLock"), \
                                            tr("This is the lock status of the current 'DC' module, with two states: ON and OFF."));
    ModeLock->add_Specification();

}
/************************DCAC参数页说明*********************/
void MyWidget::DC_AC_Parameter_tab(QTableWidget *myTable)
{
    Grid_connected_mode = new Specification(this,Grid_connected_mode_explain, myTable, 0, 1, \
                                            tr("automatic"), tr("Grid connected mode of PCS"), \
                                            tr("    When automatic and off-grid is selected, it will automatically identify and switch and off-grid. When the voltage on the grid side is normal, the contactor on the grid side will close, and the machine is in grid-connected mode (PQ).When the grid is out of power, the grid side contactor will be disconnected, and the machine is in off-grid mode (VF).\n   When the grid-connected mode is selected, and the grid side voltage is normal, the grid side contactor will close, and the machine is in grid-connected mode (PQ);If the power grid loses power, the machine will give an alarm warning of the power grid low voltage.\n    When off-grid mode is selected, the machine will disconnect the grid side contactor, and the machine is in off-grid mode (VF)."));
    Grid_connected_mode->add_Specification();

    Constant_power = new Specification(this,Constant_power_explain, myTable, 1, 1, \
                                       tr("0"), tr("Constant power(AC)"), \
                                       tr("    This is the power setting of the AC side. The charging and discharging power of the AC side can be controlled by modifying the value of this item.When advanced Settings control power mode select constant power mode (CP_N&P), positive value indicates discharge, negative value indicates charging.\n    For example, set -5, indicating that the AC side will charge the battery with a power of -5kW, due to the loss of the inverter, the power on the DC side will be less than the power on the AC side.\n    For example, set 5, indicating that the AC side will be 5kW power output, due to the loss of the inverter, the DC side of the power will be greater than the AC side of the power."));
    Constant_power->add_Specification();

    Charging_and_discharging = new Specification(this,Charging_and_discharging_explain, myTable, 2, 1, \
                                                 tr("Charge"), tr("Charging and discharging"), \
                                                 tr("Reserve."));
    Charging_and_discharging->add_Specification();

//    Work_mode = new Specification(this,Work_mode_explain, myTable, 3, 1, \
//                                  tr("Manual"), tr("Operational mode"), \
//                                  tr("这是工作模式，有三项可选：自发自用(System for self-use)，电池优先(Battery priority)，削峰填谷(Peak shaving)\n选择自发自用模式时，优先给负载供电\n选择电池优先模式时，优先给电池充电\n削峰填谷模式时，用电高峰时优先使用电池给负载供电，用电低谷时优先给电池充电\nThis is the working mode with three options: System for self use, Battery priority, and Peak shaving; When selecting the self use mode, priority is given to supplying power to the load; When selecting battery priority mode, priority is given to charging the battery; During peak shaving and valley filling mode, priority is given to using batteries to supply power to the load during peak electricity usage, and to charging batteries during low electricity usage."));
//    Work_mode->add_Specification();

    mode_expelain = new OperMode(this);
    Work_mode_explain->setText(tr("Manual"));
    myTable->setCellWidget(3, 1, (QWidget *)Work_mode_explain);

    Output_power_factor = new Specification(this,Output_power_factor_explain, myTable, 4, 1, \
                                            tr("1"), tr("Output power factor"), \
                                            tr("    The power factor Pf can be modified. The power factor is equal to the ratio of active power and reactive power. Positive value indicates reactive power lead and negative value indicates reactive power lag.\n    The power factor is a coefficient used to measure the output efficiency of electrical equipment, and the power factor is equal to the ratio of active power to reactive power. When the output reactive power factor is selected in the advanced settings 'system Settings' page, this output power factor can be modified to control the output of active power and reactive power."));
    Output_power_factor->add_Specification();

    Output_reactive_power = new Specification(this,Output_reactive_power_explain, myTable, 5, 1, \
                                              tr("1"), tr("Output reactive power"), \
                                              tr("    This parameter can change the reactive power Q, positive value indicates reactive power lead, negative value indicates reactive power lag."));
    Output_reactive_power->add_Specification();

    Constant_current = new Specification(this,Constant_current_explain, myTable, 6, 1, \
                                         tr("100"), tr("Constant current"), \
                                         tr("    When the control power mode of the advanced Settings page is set to constant current (CC), modify the constant current value, then the machine will charge and discharge the battery with the current value, positive value represents discharge, negative value represents charging."));
    Constant_current->add_Specification();

    Constant_voltage = new Specification(this,Constant_voltage_explain, myTable, 7, 1, \
                                         tr("600"), tr("Constant voltage"), \
                                         tr("    When the control power mode of the Advanced Settings 'Function Settings' page is set to constant voltage (CV), modify the constant voltage value, the machine will operate at a constant voltage value, and the machine will be used as a constant voltage source."));
    Constant_voltage->add_Specification();

    Control_mode = new Specification(this,Control_mode_explain, myTable, 0, 4, \
                                     tr("Local"), tr("Control mode"), \
                                     tr("    This is the control mode;If the local mode is selected, the dispatcher (EMS, RS485) can only monitor data but cannot control PCS. If the remote mode is selected,PCS parameter setting is disabled and the dispatcher (EMS,  RS485) can read and write data."));
    Control_mode->add_Specification();

    Machine_number = new Specification(this,Machine_number_explain, myTable, 1, 4, \
                                       tr("Master_00"), tr("Machine number"), \
                                       tr("    This is the device number, and you can choose host(Master) or slave(Slave), where master is Master_00 and Slave_01 to Slave_08 are slaves."));
    Machine_number->add_Specification();

    Parallel = new Specification(this,Parallel_explain, myTable, 2, 4, \
                                 tr("Disable"), tr("Parallel"), \
                                 tr("Reserve."));
    Parallel->add_Specification();

    Unbalance_power_enable = new Specification(this,Unbalance_power_enable_explain, myTable, 3, 4, \
                                               tr("Disable"), tr("Run time enable"), \
                                               tr("    This is to Enable the run time function. Two options are available: Enable and Disable."));
    Unbalance_power_enable->add_Specification();//这是运行时段使能，有两项可选：使能(Enable)，禁止(Disable)\n

}
/************************DCDC参数页说明*********************/
void MyWidget::DCDC_Paramter_tab(QTableWidget *myTable)
{
    //DCDC工作模式说明
    Work_parttern = new Specification(this,Work_parttern_explain, myTable, 0, 1, \
                                      tr("MPPT"), tr("Work parttern"), \
                                      tr("This is the working mode of 'DC' module, which has four states: Rest (Rest), constant voltage (CV), constant current (CC) and tracking optimal power point (MPPT)."));
    Work_parttern->add_Specification();//这是'DC'模块的工作模式，有休息(Rest)、恒压(CV)、恒流(CC)、追踪最佳功率点(MPPT)四种状态\n

    //升/降压说明
    Boost_or_Buck = new Specification(this,Boost_or_Buck_explain, myTable, 1, 1, \
                                      tr("Buck"), tr("Boost or Buck"), \
                                      tr("This is the operation mode of 'DC' module, which has three modes: Rest, Buck and Boost. It can be modified into Rest, Buck or Boost mode according to project requirements."));
    Boost_or_Buck->add_Specification();//这是'DC'模块的运行模式，有休息(Rest)、降压(Buck)、升压(Boost)三种模式，可根据项目需求，修改成休息(Rest)、降压(Buck)或者升压(Boost)模式\n

    //电池充放电模式说明
    Bat_Charging_or_discharging_Model = new Specification(this,Bat_Charging_or_discharging_Model_explain, myTable, 2, 1, \
                                                          tr("Discharging"), tr("Bat Charging or discharging Model"), \
                                                          tr("This is the battery Charging and Discharging mode. There are two charging and discharging modes."));
    Bat_Charging_or_discharging_Model->add_Specification();//这是电池充放电模式，有充电(Charging)，放电(Discharging)两种模式\n

    //DCDC容量说明
    DCDC_Capacity = new Specification(this,DCDC_Capacity_explain, myTable, 3, 1, \
                                      tr("50"), tr("DCDC Capacity"), \
                                      tr("This is the capacity of the 'DC' module."));
    DCDC_Capacity->add_Specification();//这是'DC'模块的容量\n

    //电池位置说明
    Battery_position = new Specification(this,Battery_position_explain, myTable, 0, 4, \
                                         tr("LowSide"), tr("Battery position"), \
                                         tr("This is the position of the current battery, which needs to be selected according to the operation mode of the 'DC' module currently selected. If Buck is selected, select the LowSide. If Boost is selected, select HightSide. If Rest is selected, please select NON."));
    Battery_position->add_Specification();//这是当前电池所处位置，需要根据当前选择的'DC'模块运行模式来进行选择；如果选择了降压(Buck)，请选择低压侧(LowSide)；如果选择了升压(Boost)，请选择高压侧(HightSide)；如果选择了休息(Rest)，请选择无(NON)\n

    //电压等级说明
    Voltage_level = new Specification(this,Voltage_level_explain, myTable, 1, 4, \
                                      tr("300"), tr("Voltage level"), \
                                      tr("This is the voltage level of the 'DC' module."));
    Voltage_level->add_Specification();//这是'DC'模块的电压等级\n

    //电流值说明
    Current_value = new Specification(this,Current_value_explain, myTable, 2, 4, \
                                      tr("60"), tr("Current value"), \
                                      tr("This is the current value of the 'DC' module."));
    Current_value->add_Specification();//这是'DC'模块的电流值\n
}

//电池设置页说明_锂电池
void MyWidget::Battery_Setup_Tab(QTableWidget *myTable)
{
    //并网DOD说明
    DOD_OnGrid = new Specification(this,DOD_OnGrid_explain, myTable, 0, 1, \
                                   "90", tr("DOD_OnGrid"), \
                                   tr("Grid-connected DOD, the depth of discharge allowed in grid-connected mode."));
    DOD_OnGrid->add_Specification();

    //离网DOD说明
    DOD_OffGrid = new Specification(this,DOD_OffGrid_explain, myTable, 1, 1, \
                                    "90", tr("DOD_OffGrid"), \
                                    tr("Off-network DOD: Discharge depth allowed in off-network mode."));
    DOD_OffGrid->add_Specification();

    //充电电压上限说明
    Charge_Volt_Upper_Limit = new Specification(this,Charge_Volt_Upper_Limit_explain, myTable, 2, 1, \
                                               "792", tr("Charge_Vol_Up_Limit"), \
                                                tr("This is the upper limit of the charging voltage. When the total battery voltage reaches this value during charging, the PCS will enter the constant voltage mode to prevent the battery from overcharging."));
    Charge_Volt_Upper_Limit->add_Specification();

    //充电电压上限回差说明
    Charge_Volt_upper_Limit_delta = new Specification(this,Charge_Volt_upper_Limit_delta_explain, myTable, 3, 1, \
                                                      "10", tr("Charge Volt upper Limit delta"), \
                                                      tr("Upper return difference of charging voltage: When the total battery voltage reaches the upper limit of charging voltage during battery charging, the constant voltage mode is removed when the total battery voltage is lower than the upper limit of charging voltage minus the return difference."));
    Charge_Volt_upper_Limit_delta->add_Specification();

    //放电电压限制说明
    Disc_Volt_lower_Limit = new Specification(this,Disc_Volt_lower_Limit_explain, myTable, 4, 1, \
                                              "616", tr("Disc_Vol_lower_Limit"), \
                                              tr("Lower limit of discharge voltage. When the total battery voltage reaches this value during discharge, MPS will enter the constant voltage mode to prevent battery overdischarge."));
    Disc_Volt_lower_Limit->add_Specification();

    //放电电压下限回差说明
    Discharge_Volt_upper_Limit_delta = new Specification(this,Discharge_Volt_upper_Limit_delta_explain, myTable, 5, 1, \
                                                         "10", tr("Discharge Volt upper Limit delta"), \
                                                         tr("When the battery is discharging and the total voltage of the battery reaches the lower limit of the discharge voltage, MPS enters the constant voltage mode. When the total voltage of the battery rises to the lower limit of the discharge voltage and the return difference value is added, the constant voltage mode is removed."));
    Discharge_Volt_upper_Limit_delta->add_Specification();

    //充电电流限制说明
    Charge_Current_Limit = new Specification(this,Charge_Current_Limit_explain, myTable, 6, 1, \
                                             "240", tr("Charge Current Limit"), \
                                             tr("Upper limit of charging current, which is the maximum current allowed on the DC side of PCS to prevent charging overcurrent."));
    Charge_Current_Limit->add_Specification();

    //放电电流限制说明
    Discharge_Current_Limit = new Specification(this,Discharge_Current_Limit_explain, myTable, 7, 1, \
                                                "240", tr("Discharge Current Limit"), \
                                                tr("The upper limit of discharge current, which is the maximum current allowed to discharge on the DC side of PCS to prevent discharge from overcurrent."));
    Discharge_Current_Limit->add_Specification();

    //柴发关闭SOC说明
    Gen_turn_off_SOC = new Specification(this,Gen_turn_off_SOC_explain, myTable, 8, 1, \
                                         "85", tr("Gen_turn_off_SOC"), \
                                         tr("When the specified SCO value is reached, the diesel generator shuts down."));
    Gen_turn_off_SOC->add_Specification();

    //柴发开启SOC说明
    Gen_turn_on_SOC = new Specification(this,Gen_turn_on_SOC_explain, myTable, 9, 1, \
                                        "25", tr("Gen_turn_on_SOC"), \
                                        tr("When the specified SOC value is reached, the diesel generator starts."));
    Gen_turn_on_SOC->add_Specification();


    SwitchingBatteryTypes->setText(tr("Lithium"));
    myTable->setCellWidget(10, 1, (QWidget *)SwitchingBatteryTypes);
}
void MyWidget::Battery_Setup_Lead_Tab(QTableWidget *myTable)
{

    //容量
    Capacity = new Specification(this,Capacity_explain, myTable, 0, 1, \
                                        "0", tr("Capacity"), \
                                        tr("Capacity, the capacity of the lead-acid battery."));
    Capacity->add_Specification();//容量，铅酸电池的容量大小
    //电池节数
    Cell_number_2V = new Specification(this,Cell_number_2V_explain, myTable, 1, 1, \
                                        "0", tr("Cell_number_2V"), \
                                        tr("Number of batteries, the number of lead-acid batteries."));
    Cell_number_2V->add_Specification();//电池节数，一块铅酸电池的节数
    //充电限流值
    Charge_limiting_value = new Specification(this,Charge_limiting_value_explain, myTable, 2, 1, \
                                        "0", tr("Charge_limiting_value"), \
                                        tr("Upper limit of charging current, which is the maximum current allowed on the DC side of PCS to prevent charging overcurrent."));
    Charge_limiting_value->add_Specification();
    //放电限流值
    Discharge_limiting_value = new Specification(this,Discharge_limiting_value_explain, myTable, 3, 1, \
                                        "0", tr("Discharge_limiting_value"), \
                                        tr("The upper limit of discharge current, which is the maximum current allowed to discharge on the DC side of PCS to prevent discharge from overcurrent."));
    Discharge_limiting_value->add_Specification();
    //发电机关闭SOC
    Generator_turn_off_SOC_B1 = new Specification(this,Generator_turn_off_SOC_B1_explain, myTable, 4, 1, \
                                        "0", tr("Generator_turn_off_SOC_B1"), \
                                        tr("When the specified SCO value is reached, the diesel generator shuts down."));
    Generator_turn_off_SOC_B1->add_Specification();
    //发电机开启SOC
    Generator_turn_on_SOC_A1 = new Specification(this,Generator_turn_on_SOC_A1_explain, myTable, 5, 1, \
                                        "0", tr("Generator_turn_on_SOC_A1"), \
                                        tr("When the specified SOC value is reached, the diesel generator starts."));
    Generator_turn_on_SOC_A1->add_Specification();
    //离网EOD
    Grid_off_EOD = new Specification(this,Grid_off_EOD_explain, myTable, 0, 4, \
                                        "0", tr("Grid_off_EOD"), \
                                        tr("Off-grid discharge terminal voltage, the voltage when the battery power is used up in the off-grid state, and the discharge stops when the battery voltage reaches this value."));
    Grid_off_EOD->add_Specification();//离网放电终点电压，离网状态下电池的电量用完时的电压，电池电压达到该值时停止放电
    //并网EOD
    Grid_on_EOD = new Specification(this,Grid_on_EOD_explain, myTable, 1, 4, \
                                        "0", tr("Grid_on_EOD"), \
                                        tr("The terminal voltage of grid-connected discharge, the voltage when the battery power is used up in the grid-connected state, and the discharge stops when the battery voltage reaches this value."));
    Grid_on_EOD->add_Specification();//并网放电终点电压，并网状态下电池的电量用完时的电压，电池电压达到该值时停止放电
    //关机电压点
    Shutdown_voltage_point = new Specification(this,Shutdown_voltage_point_explain, myTable, 2, 4, \
                                        "0", tr("Shutdown_voltage_point"), \
                                        tr("Shutdown voltage point. When the voltage is lower than this value, the device will shut down."));
    Shutdown_voltage_point->add_Specification();//关机电压点，电压低于该电压值时设备将会关机
    //温补中心点
    Mending_center_point = new Specification(this,Mending_center_point_explain, myTable, 3, 4, \
                                        "0", tr("Mending_center_point"), \
                                        tr("Temperature compensation center point, the battery in the state of floating charge, floating charge voltage can be compensated according to the temperature."));
    Mending_center_point->add_Specification();//温度补偿中心点，电池在浮充状态下，浮充电压可以根据温度进行补偿
    //温补系数
    Temperature_filling_coefficient = new Specification(this,Temperature_filling_coefficient_explain, myTable, 4, 4, \
                                        "0", tr("Temperature_filling_coefficient"), \
                                        tr("Temperature compensation coefficient, the coefficient when temperature compensation is performed."));
    Temperature_filling_coefficient->add_Specification();//温度补偿系数，进行温度补偿时的系数
    //温补允许设置
    Mending_allowable_setting = new Specification(this,Mending_allowable_setting_explain, myTable, 5, 4, \
                                        "0", tr("Mending_allowable_setting"), \
                                        tr("Temperature compensation Allow setting, you can set whether to allow temperature compensation."));
    Mending_allowable_setting->add_Specification();//温补允许设置，可设置是否允许进行温度补偿
    //温度告警上限
    Temperature_alarm_upper_limit = new Specification(this,Temperature_alarm_upper_limit_explain, myTable, 6, 4, \
                                        "0", tr("Temperature_alarm_upper_limit"), \
                                        tr("Temperature Alarm upper limit. An alarm is generated when the battery temperature reaches this threshold."));
    Temperature_alarm_upper_limit->add_Specification();//温度告警上限，电池温度达到该值时将会告警


    //选择电池类型
    SwitchingBatteryTypes_Leaad->setText(tr("Lead"));
    myTable->setCellWidget(6, 1, (QWidget *)SwitchingBatteryTypes_Leaad);

}

//自动运行 绘制button
void MyWidget::AutoOperation(QTableWidget *myTable)
{

    QString temp1 = tr("Check");
    QString temp2 = tr("Start_Time");
    QString temp3 = tr("End_Time");
    QString temp4 = tr("Features");
    QString temp5 = tr("Power");
    QString temp6 = tr("9:00");
    QString temp7 = tr("10:00");
    QString temp8 = tr("This is the end time at which the state started with the 'start time' will end.");
    QString temp9 = tr("This is the function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power, Generator Trun on and Generator Trun off.");
    QString temp10 = tr("This is the working power, which is executed according to the working state when working in this state, the positive number is discharging, and the negative number is charging.");
    QString temp11 = tr("This is the start time at which the specified state will begin to be entered with the specified power.");
    QString temp12 = tr("This is' Enable ', which will enable the specified state at the specified time with the specified power, and end at the specified time.");
    QString temp13 = tr("System for self-use");
    if(Check1 != nullptr)
    {
        delete Check1;
    }
    Check1 = new Specification(this,Check1_explain, ui->Time_tableWidget, 0, 0, "√", temp1, temp12);
    Check1->add_Specification();

    if(Check2 != nullptr)
    {
        delete Check2;
    }
    Check2 = new Specification(this,Check2_explain, ui->Time_tableWidget, 1, 0, "√", temp1, temp12);
    Check2->add_Specification();

    if(Check3 != nullptr)
    {
        delete Check3;
    }
    Check3 = new Specification(this,Check3_explain, ui->Time_tableWidget, 2, 0, "√", temp1, temp12);
    Check3->add_Specification();

    if(Check4 != nullptr)
    {
        delete Check4;
    }
    Check4 = new Specification(this,Check4_explain, ui->Time_tableWidget, 3, 0, "√", temp1, temp12);
    Check4->add_Specification();

    if(Check5 != nullptr)
    {
        delete Check5;
    }
    Check5 = new Specification(this,Check5_explain, ui->Time_tableWidget, 4, 0, "√", temp1, temp12);
    Check5->add_Specification();

    if(Check6 != nullptr)
    {
        delete Check6;
    }
    Check6 = new Specification(this,Check6_explain, ui->Time_tableWidget, 5, 0, "", temp1, temp12);
    Check6->add_Specification();

    if(Check7 != nullptr)
    {
        delete Check7;
    }
    Check7 = new Specification(this,Check7_explain, ui->Time_tableWidget, 6, 0, "", temp1, temp12);
    Check7->add_Specification();

    if(Check8 != nullptr)
    {
        delete Check8;
    }
    Check8 = new Specification(this,Check8_explain, ui->Time_tableWidget, 7, 0, "", temp1, temp12);
    Check8->add_Specification();

    if(Check9 != nullptr)
    {
        delete Check9;
    }
    Check9 = new Specification(this,Check9_explain, ui->Time_tableWidget, 8, 0, "", temp1, temp12);
    Check9->add_Specification();

    if(Check10 != nullptr)
    {
        delete Check10;
    }
    Check10 = new Specification(this,Check10_explain, ui->Time_tableWidget, 9, 0, "", temp1, temp12);
    Check10->add_Specification();

    if(Check11 != nullptr)
    {
        delete Check11;
    }
    Check11 = new Specification(this,Check11_explain, ui->Time_tableWidget, 10, 0, "", temp1, temp12);
    Check11->add_Specification();

    if(Check11 != nullptr)
    {
        delete Check12;
    }
    Check12 = new Specification(this,Check12_explain, ui->Time_tableWidget, 11, 0, "", temp1, temp12);
    Check12->add_Specification();

    if(Check13 != nullptr)
    {
        delete Check13;
    }
    Check13 = new Specification(this,Check13_explain, ui->Time_tableWidget, 12, 0, "", temp1, temp12);
    Check13->add_Specification();

    if(Check14 != nullptr)
    {
        delete Check14;
    }
    Check14 = new Specification(this,Check14_explain, ui->Time_tableWidget, 13, 0, "", temp1, temp12);
    Check14->add_Specification();

    if(Check15 != nullptr)
    {
        delete Check15;
    }
    Check15 = new Specification(this,Check15_explain, ui->Time_tableWidget, 14, 0, "", temp1, temp12);
    Check15->add_Specification();

    if(Check16 != nullptr)
    {
        delete Check16;
    }
    Check16 = new Specification(this,Check16_explain, ui->Time_tableWidget, 15, 0, "", temp1, temp12);
    Check16->add_Specification();

    if(Check17 != nullptr)
    {
        delete Check17;
    }
    Check17 = new Specification(this,Check17_explain, ui->Time_tableWidget, 16, 0, "", temp1, temp12);
    Check17->add_Specification();

    if(Check18 != nullptr)
    {
        delete Check18;
    }
    Check18 = new Specification(this,Check18_explain, ui->Time_tableWidget, 17, 0, "", temp1, temp12);
    Check18->add_Specification();

    if(Check19 != nullptr)
    {
        delete Check19;
    }
    Check19 = new Specification(this,Check19_explain, ui->Time_tableWidget, 18, 0, "", temp1, temp12);
    Check19->add_Specification();

    if(Check20 != nullptr)
    {
        delete Check20;
    }
    Check20 = new Specification(this,Check20_explain, ui->Time_tableWidget, 19, 0, "", temp1, temp12);
    Check20->add_Specification();


    if(Start_T1 != nullptr)
    {
        delete Start_T1;
    }
    Start_T1 = new Specification(this,Start_T1_explain, ui->Time_tableWidget, 0, 1, temp6, temp2, temp11);
    Start_T1->add_Specification();

    if(Start_T2 != nullptr)
    {
        delete Start_T2;
    }
    Start_T2 = new Specification(this,Start_T2_explain, ui->Time_tableWidget, 1, 1, temp6, temp2, temp11);
    Start_T2->add_Specification();

    if(Start_T3 != nullptr)
    {
        delete Start_T3;
    }
    Start_T3 = new Specification(this,Start_T3_explain, ui->Time_tableWidget, 2, 1, temp6, temp2, temp11);
    Start_T3->add_Specification();

    if(Start_T4 != nullptr)
    {
        delete Start_T4;
    }
    Start_T4 = new Specification(this,Start_T4_explain, ui->Time_tableWidget, 3, 1, temp6, temp2, temp11);
    Start_T4->add_Specification();

    if(Start_T5 != nullptr)
    {
        delete Start_T5;
    }
    Start_T5 = new Specification(this,Start_T5_explain, ui->Time_tableWidget, 4, 1, temp6, temp2, temp11);
    Start_T5->add_Specification();

    if(Start_T6 != nullptr)
    {
        delete Start_T6;
    }
    Start_T6 = new Specification(this,Start_T6_explain, ui->Time_tableWidget, 5, 1, temp6, temp2, temp11);
    Start_T6->add_Specification();

    if(Start_T7 != nullptr)
    {
        delete Start_T7;
    }
    Start_T7 = new Specification(this,Start_T7_explain, ui->Time_tableWidget, 6, 1, temp6, temp2, temp11);
    Start_T7->add_Specification();

    if(Start_T8 != nullptr)
    {
        delete Start_T8;
    }
    Start_T8 = new Specification(this,Start_T8_explain, ui->Time_tableWidget, 7, 1, temp6, temp2, temp11);
    Start_T8->add_Specification();

    if(Start_T9 != nullptr)
    {
        delete Start_T9;
    }
    Start_T9 = new Specification(this,Start_T9_explain, ui->Time_tableWidget, 8, 1, temp6, temp2, temp11);
    Start_T9->add_Specification();

    if(Start_T10 != nullptr)
    {
        delete Start_T10;
    }
    Start_T10 = new Specification(this,Start_T10_explain, ui->Time_tableWidget, 9, 1, temp6, temp2, temp11);
    Start_T10->add_Specification();

    if(Start_T11 != nullptr)
    {
        delete Start_T11;
    }
    Start_T11 = new Specification(this,Start_T11_explain, ui->Time_tableWidget, 10, 1, temp6, temp2, temp11);
    Start_T11->add_Specification();

    if(Start_T12 != nullptr)
    {
        delete Start_T12;
    }
    Start_T12 = new Specification(this,Start_T12_explain, ui->Time_tableWidget, 11, 1, temp6, temp2, temp11);
    Start_T12->add_Specification();

    if(Start_T13 != nullptr)
    {
        delete Start_T13;
    }
    Start_T13 = new Specification(this,Start_T13_explain, ui->Time_tableWidget, 12, 1, temp6, temp2, temp11);
    Start_T13->add_Specification();

    if(Start_T14 != nullptr)
    {
        delete Start_T14;
    }
    Start_T14 = new Specification(this,Start_T14_explain, ui->Time_tableWidget, 13, 1, temp6, temp2, temp11);
    Start_T14->add_Specification();

    if(Start_T15 != nullptr)
    {
        delete Start_T15;
    }
    Start_T15 = new Specification(this,Start_T15_explain, ui->Time_tableWidget, 14, 1, temp6, temp2, temp11);
    Start_T15->add_Specification();

    if(Start_T16 != nullptr)
    {
        delete Start_T16;
    }
    Start_T16 = new Specification(this,Start_T16_explain, ui->Time_tableWidget, 15, 1, temp6, temp2, temp11);
    Start_T16->add_Specification();

    if(Start_T17 != nullptr)
    {
        delete Start_T17;
    }
    Start_T17 = new Specification(this,Start_T17_explain, ui->Time_tableWidget, 16, 1, temp6, temp2, temp11);
    Start_T17->add_Specification();

    if(Start_T18 != nullptr)
    {
        delete Start_T18;
    }
    Start_T18 = new Specification(this,Start_T18_explain, ui->Time_tableWidget, 17, 1, temp6, temp2, temp11);
    Start_T18->add_Specification();

    if(Start_T19 != nullptr)
    {
        delete Start_T19;
    }
    Start_T19 = new Specification(this,Start_T19_explain, ui->Time_tableWidget, 18, 1, temp6, temp2, temp11);
    Start_T19->add_Specification();

    if(Start_T20 != nullptr)
    {
        delete Start_T20;
    }
    Start_T20 = new Specification(this,Start_T20_explain, ui->Time_tableWidget, 19, 1, temp6, temp2, temp11);
    Start_T20->add_Specification();


    if(End_T1 != nullptr)
    {
        delete End_T1;
    }
    End_T1 = new Specification(this,End_T1_explain, ui->Time_tableWidget, 0, 2, temp7, temp3, temp8);
    End_T1->add_Specification();

    if(End_T2 != nullptr)
    {
        delete End_T2;
    }
    End_T2 = new Specification(this,End_T2_explain, ui->Time_tableWidget, 1, 2, temp7, temp3, temp8);
    End_T2->add_Specification();

    if(End_T3 != nullptr)
    {
        delete End_T3;
    }
    End_T3 = new Specification(this,End_T3_explain, ui->Time_tableWidget, 2, 2, temp7, temp3, temp8);
    End_T3->add_Specification();

    if(End_T4 != nullptr)
    {
        delete End_T4;
    }
    End_T4 = new Specification(this,End_T4_explain, ui->Time_tableWidget, 3, 2, temp7, temp3, temp8);
    End_T4->add_Specification();

    if(End_T5 != nullptr)
    {
        delete End_T5;
    }
    End_T5 = new Specification(this,End_T5_explain, ui->Time_tableWidget, 4, 2, temp7, temp3, temp8);
    End_T5->add_Specification();

    if(End_T6 != nullptr)
    {
        delete End_T6;
    }
    End_T6 = new Specification(this,End_T6_explain, ui->Time_tableWidget, 5, 2, temp7, temp3, temp8);
    End_T6->add_Specification();

    if(End_T7 != nullptr)
    {
        delete End_T7;
    }
    End_T7 = new Specification(this,End_T7_explain, ui->Time_tableWidget, 6, 2, temp7, temp3, temp8);
    End_T7->add_Specification();

    if(End_T8 != nullptr)
    {
        delete End_T8;
    }
    End_T8 = new Specification(this,End_T8_explain, ui->Time_tableWidget, 7, 2, temp7, temp3, temp8);
    End_T8->add_Specification();

    if(End_T9 != nullptr)
    {
        delete End_T9;
    }
    End_T9 = new Specification(this,End_T9_explain, ui->Time_tableWidget, 8, 2, temp7, temp3, temp8);
    End_T9->add_Specification();

    if(End_T10 != nullptr)
    {
        delete End_T10;
    }
    End_T10 = new Specification(this,End_T10_explain, ui->Time_tableWidget, 9, 2, temp7, temp3, temp8);
    End_T10->add_Specification();

    if(End_T11 != nullptr)
    {
        delete End_T11;
    }
    End_T11 = new Specification(this,End_T11_explain, ui->Time_tableWidget, 10, 2, temp7, temp3, temp8);
    End_T11->add_Specification();

    if(End_T12 != nullptr)
    {
        delete End_T12;
    }
    End_T12 = new Specification(this,End_T12_explain, ui->Time_tableWidget, 11, 2, temp7, temp3, temp8);
    End_T12->add_Specification();

    if(End_T13 != nullptr)
    {
        delete End_T13;
    }
    End_T13 = new Specification(this,End_T13_explain, ui->Time_tableWidget, 12, 2, temp7, temp3, temp8);
    End_T13->add_Specification();

    if(End_T14 != nullptr)
    {
        delete End_T14;
    }
    End_T14 = new Specification(this,End_T14_explain, ui->Time_tableWidget, 13, 2, temp7, temp3, temp8);
    End_T14->add_Specification();

    if(End_T15 != nullptr)
    {
        delete End_T15;
    }
    End_T15 = new Specification(this,End_T15_explain, ui->Time_tableWidget, 14, 2, temp7, temp3, temp8);
    End_T15->add_Specification();

    if(End_T16 != nullptr)
    {
        delete End_T16;
    }
    End_T16 = new Specification(this,End_T16_explain, ui->Time_tableWidget, 15, 2, temp7, temp3, temp8);
    End_T16->add_Specification();

    if(End_T17 != nullptr)
    {
        delete End_T17;
    }
    End_T17 = new Specification(this,End_T17_explain, ui->Time_tableWidget, 16, 2, temp7, temp3, temp8);
    End_T17->add_Specification();

    if(End_T18 != nullptr)
    {
        delete End_T18;
    }
    End_T18 = new Specification(this,End_T18_explain, ui->Time_tableWidget, 17, 2, temp7, temp3, temp8);
    End_T18->add_Specification();

    if(End_T19 != nullptr)
    {
        delete End_T19;
    }
    End_T19 = new Specification(this,End_T19_explain, ui->Time_tableWidget, 18, 2, temp7, temp3, temp8);
    End_T19->add_Specification();

    if(End_T20 != nullptr)
    {
        delete End_T20;
    }
    End_T20 = new Specification(this,End_T20_explain, ui->Time_tableWidget, 19, 2, temp7, temp3, temp8);
    End_T20->add_Specification();


    if(State1 != nullptr)
    {
        delete State1;
    }
    State1 = new Specification(this,State1_explain, ui->Time_tableWidget, 0, 3,temp13, temp4, temp9);
    State1->add_Specification();

    if(State2 != nullptr)
    {
        delete State2;
    }
    State2 = new Specification(this,State2_explain, ui->Time_tableWidget, 1, 3,temp13, temp4, temp9);
    State2->add_Specification();

    if(State3 != nullptr)
    {
        delete State3;
    }
    State3 = new Specification(this,State3_explain, ui->Time_tableWidget, 2, 3,temp13, temp4, temp9);
    State3->add_Specification();

    if(State4 != nullptr)
    {
        delete State4;
    }
    State4 = new Specification(this,State4_explain, ui->Time_tableWidget, 3, 3,temp13, temp4, temp9);
    State4->add_Specification();

    if(State5 != nullptr)
    {
        delete State5;
    }
    State5 = new Specification(this,State5_explain, ui->Time_tableWidget, 4, 3, temp13, temp4, temp9);
    State5->add_Specification();

    if(State6 != nullptr)
    {
        delete State6;
    }
    State6 = new Specification(this,State6_explain, ui->Time_tableWidget, 5, 3,temp13, temp4, temp9);
    State6->add_Specification();

    if(State7 != nullptr)
    {
        delete State7;
    }
    State7 = new Specification(this,State7_explain, ui->Time_tableWidget, 6, 3, temp13, temp4, temp9);
    State7->add_Specification();

    if(State8 != nullptr)
    {
        delete State8;
    }
    State8 = new Specification(this,State8_explain, ui->Time_tableWidget, 7, 3, temp13, temp4, temp9);
    State8->add_Specification();

    if(State9 != nullptr)
    {
        delete State9;
    }
    State9 = new Specification(this,State9_explain, ui->Time_tableWidget, 8, 3, temp13, temp4, temp9);
    State9->add_Specification();

    if(State10 != nullptr)
    {
        delete State10;
    }
    State10 = new Specification(this,State10_explain, ui->Time_tableWidget, 9, 3, temp13, temp4, temp9);
    State10->add_Specification();

    if(State11 != nullptr)
    {
        delete State11;
    }
    State11 = new Specification(this,State11_explain, ui->Time_tableWidget, 10, 3, temp13, temp4, temp9);
    State11->add_Specification();

    if(State12 != nullptr)
    {
        delete State12;
    }
    State12 = new Specification(this,State12_explain, ui->Time_tableWidget, 11, 3, temp13, temp4, temp9);
    State12->add_Specification();

    if(State13 != nullptr)
    {
        delete State13;
    }
    State13 = new Specification(this,State13_explain, ui->Time_tableWidget, 12, 3, temp13, temp4, temp9);
    State13->add_Specification();

    if(State14 != nullptr)
    {
        delete State14;
    }
    State14 = new Specification(this,State14_explain, ui->Time_tableWidget, 13, 3, temp13, temp4, temp9);
    State14->add_Specification();

    if(State15 != nullptr)
    {
        delete State15;
    }
    State15 = new Specification(this,State15_explain, ui->Time_tableWidget, 14, 3, temp13, temp4, temp9);
    State15->add_Specification();

    if(State16 != nullptr)
    {
        delete State16;
    }
    State16 = new Specification(this,State16_explain, ui->Time_tableWidget, 15, 3, temp13, temp4, temp9);
    State16->add_Specification();

    if(State17 != nullptr)
    {
        delete State17;
    }
    State17 = new Specification(this,State17_explain, ui->Time_tableWidget, 16, 3, temp13, temp4, temp9);
    State17->add_Specification();

    if(State18 != nullptr)
    {
        delete State18;
    }
    State18 = new Specification(this,State18_explain, ui->Time_tableWidget, 17, 3, temp13, temp4, temp9);
    State18->add_Specification();

    if(State19 != nullptr)
    {
        delete State19;
    }
    State19 = new Specification(this,State19_explain, ui->Time_tableWidget, 18, 3, temp13, temp4, temp9);
    State19->add_Specification();

    if(State20 != nullptr)
    {
        delete State20;
    }
    State20 = new Specification(this,State20_explain, ui->Time_tableWidget, 19, 3, temp13, temp4, temp9);
    State20->add_Specification();


    if(Power1 != nullptr)
    {
        delete Power1;
    }
    Power1 = new Specification(this,Power1_explain, ui->Time_tableWidget, 0, 4, "10", temp5, temp10);
    Power1->add_Specification();

    if(Power2 != nullptr)
    {
        delete Power2;
    }
    Power2 = new Specification(this,Power2_explain, ui->Time_tableWidget, 1, 4, "10", temp5, temp10);
    Power2->add_Specification();

    if(Power3 != nullptr)
    {
        delete Power3;
    }
    Power3 = new Specification(this,Power3_explain, ui->Time_tableWidget, 2, 4, "10", temp5, temp10);
    Power3->add_Specification();

    if(Power4 != nullptr)
    {
        delete Power4;
    }
    Power4 = new Specification(this,Power4_explain, ui->Time_tableWidget, 3, 4, "10", temp5, temp10);
    Power4->add_Specification();


    if(Power5 != nullptr)
    {
        delete Power5;
    }
    Power5 = new Specification(this,Power5_explain, ui->Time_tableWidget, 4, 4, "10", temp5, temp10);
    Power5->add_Specification();

    if(Power6 != nullptr)
    {
        delete Power6;
    }
    Power6 = new Specification(this,Power6_explain, ui->Time_tableWidget, 5, 4, "10", temp5, temp10);
    Power6->add_Specification();


    if(Power7 != nullptr)
    {
        delete Power7;
    }
    Power7 = new Specification(this,Power7_explain, ui->Time_tableWidget, 6, 4, "10", temp5, temp10);
    Power7->add_Specification();

    if(Power8 != nullptr)
    {
        delete Power8;
    }
    Power8 = new Specification(this,Power8_explain, ui->Time_tableWidget, 7, 4, "10", temp5, temp10);
    Power8->add_Specification();


    if(Power9 != nullptr)
    {
        delete Power9;
    }
    Power9 = new Specification(this,Power9_explain, ui->Time_tableWidget, 8, 4, "10", temp5, temp10);
    Power9->add_Specification();

    if(Power10 != nullptr)
    {
        delete Power10;
    }
    Power10 = new Specification(this,Power10_explain, ui->Time_tableWidget, 9, 4, "10", temp5, temp10);
    Power10->add_Specification();


    if(Power11 != nullptr)
    {
        delete Power11;
    }
    Power11 = new Specification(this,Power11_explain, ui->Time_tableWidget, 10, 4, "10", temp5, temp10);
    Power11->add_Specification();

    if(Power12 != nullptr)
    {
        delete Power12;
    }
    Power12 = new Specification(this,Power12_explain, ui->Time_tableWidget, 11, 4, "10", temp5, temp10);
    Power12->add_Specification();


    if(Power13 != nullptr)
    {
        delete Power13;
    }
    Power13 = new Specification(this,Power13_explain, ui->Time_tableWidget, 12, 4, "10", temp5, temp10);
    Power13->add_Specification();

    if(Power14 != nullptr)
    {
        delete Power14;
    }
    Power14 = new Specification(this,Power14_explain, ui->Time_tableWidget, 13, 4, "10", temp5, temp10);
    Power14->add_Specification();


    if(Power15 != nullptr)
    {
        delete Power15;
    }
    Power15 = new Specification(this,Power15_explain, ui->Time_tableWidget, 14, 4, "10", temp5, temp10);
    Power15->add_Specification();

    if(Power16 != nullptr)
    {
        delete Power16;
    }
    Power16 = new Specification(this,Power16_explain, ui->Time_tableWidget, 15, 4, "10", temp5, temp10);
    Power16->add_Specification();


    if(Power17 != nullptr)
    {
        delete Power17;
    }
    Power17 = new Specification(this,Power17_explain, ui->Time_tableWidget, 16, 4, "10", temp5, temp10);
    Power17->add_Specification();

    if(Power18 != nullptr)
    {
        delete Power18;
    }
    Power18 = new Specification(this,Power18_explain, ui->Time_tableWidget, 17, 4, "10", temp5, temp10);
    Power18->add_Specification();

    if(Power19 != nullptr)
    {
        delete Power19;
    }
    Power19 = new Specification(this,Power19_explain, ui->Time_tableWidget, 18, 4, "10", temp5, temp10);
    Power19->add_Specification();

    if(Power20 != nullptr)
    {
        delete Power20;
    }
    Power20 = new Specification(this,Power20_explain, ui->Time_tableWidget, 19, 4, "10", temp5, temp10);
    Power20->add_Specification();
}
//系统消息 绘制button
void MyWidget::SystemMessages(QTableWidget *myTable)
{
    int line=0;int column=1;
    MonitoringVersion = new Specification(this,MonitoringVersion_explain, myTable, line++, column, \
                                     "V103B500D004", tr("Monitoring software version"), \
                                     tr("This is the monitor screen version number."));
    MonitoringVersion->add_Specification();//这是监控屏版本号\n
    DCAC_SysProtocol_Version = new Specification(this,DCAC_SysProtocol_Version_explain, myTable, line++, column, \
                                     "V001B001D001", tr("DCAC Protocol version"), \
                                     tr("This is the DCAC protocol version number."));
    DCAC_SysProtocol_Version->add_Specification();//这是DCAC协议版本号\n
    DCAC_ConverterVersion = new Specification(this,DCAC_ConverterVersion_explain, myTable, line++, column, \
                                     "V105B500D008", tr("DCAC Converter software version"), \
                                     tr("This is the DCAC converter software version."));
    DCAC_ConverterVersion->add_Specification();//这是DCAC变流器软件版本\n
    DCAC_CPLD_Version = new Specification(this,DCAC_CPLD_Version_explain, myTable, line++, column, \
                                     "V001B001D000", tr("DCAC CPLD software version"), \
                                     tr("This is the DCAC CPLD software version."));
    DCAC_CPLD_Version->add_Specification();//这是DCAC CPLD软件版本\n
    DCDC_SysProtocol_Version = new Specification(this,DCDC_SysProtocol_Version_explain, myTable, line++, column, \
                                     "V001B001D001", tr("DCDC Protocol version"), \
                                     tr("This is the DCDC protocol version number."));
    DCDC_SysProtocol_Version->add_Specification();//这是DCDC协议版本号\n
    DCDC_ConverterVersion = new Specification(this,DCDC_ConverterVersion_explain, myTable, line++, column, \
                                     "V105B500D008", tr("DCDC Converter software version"), \
                                     tr("This is the DCDC converter software version."));
    DCDC_ConverterVersion->add_Specification();//这是DCDC变流器软件版本\n
    DCDC_CPLD_Version = new Specification(this,DCDC_CPLD_Version_explain, myTable, line++, column, \
                                     "V001B001D000", tr("DCDC CPLD software version"), \
                                     tr("This is the DCDC CPLD software version."));
    DCDC_CPLD_Version->add_Specification();//这是DCDC CPLD软件版本\n
    SN = new Specification(this,SN_explain, myTable, line++, column, \
                                     "F12200000001", tr("SN"), \
                                     tr("This is SN, the serial number of the product."));
    SN->add_Specification();//这是SN，即产品序列号\n
}

/******数据报表说明******/
void MyWidget::DataReportMessages(QTableWidget *myTable)
{
    int line=0, column=1;
    PV_power_generation_Day = new Specification(this,PV_power_generation_Day_explain, myTable, line, column++, \
                                            "0", tr("PV power generation Day"), \
                                            tr("This is the electricity generation of photovoltaic today."));
    PV_power_generation_Day->add_Specification();
    PV_power_generation_Month = new Specification(this,PV_power_generation_Month_explain, myTable, line, column++, \
                                            "0", tr("PV power generation Month"), \
                                            tr("This is the amount of photovoltaic power generated this month."));
    PV_power_generation_Month->add_Specification();
    PV_power_generation_Year = new Specification(this,PV_power_generation_Year_explain, myTable, line, column++, \
                                            "0", tr("PV power generation Year"), \
                                            tr("This is how much photovoltaic will produce this year."));
    PV_power_generation_Year->add_Specification();
    PV_power_generation_Total = new Specification(this,PV_power_generation_Total_explain, myTable, line, column++, \
                                             "0", tr("PV power generation Total"), \
                                             tr("This is the total amount of photovoltaic power produced."));
    PV_power_generation_Total->add_Specification();

    line++;
    column = 1;
    Load_Discharge_Day = new Specification(this,Load_Discharge_Day_explain, myTable, line, column++, \
                                            "0", tr("Load Discharge Day"), \
                                            tr("This is the electricity consumption of the load today."));
    Load_Discharge_Day->add_Specification();
    Load_Discharge_Month = new Specification(this,Load_Discharge_Month_explain, myTable, line, column++, \
                                            "0", tr("Load Discharge Month"), \
                                            tr("This is the electricity consumption of the load this month."));
    Load_Discharge_Month->add_Specification();
    Load_Discharge_Year = new Specification(this,Load_Discharge_Year_explain, myTable, line, column++, \
                                            "0", tr("Load Discharge Year"), \
                                            tr("This is how much electricity the load is using this year."));
    Load_Discharge_Year->add_Specification();
    Load_Discharge_Total = new Specification(this,Load_Discharge_Total_explain, myTable, line, column++, \
                                            "0", tr("Load Discharge Total"), \
                                            tr("This is the total power consumption of the load."));
    Load_Discharge_Total->add_Specification();

    line++;
    column = 1;
    Battery_Charge_Day = new Specification(this,Battery_Charge_Day_explain, myTable, line, column++, \
                                            "0", tr("Battery Charge Day"), \
                                            tr("This is the charging capacity of the battery today."));
    Battery_Charge_Day->add_Specification();
    Battery_Charge_Month = new Specification(this,Battery_Charge_Month_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Month"), \
                                            tr("This is how much the battery has been charged for the month."));
    Battery_Charge_Month->add_Specification();
    Battery_Charge_Year = new Specification(this,Battery_Charge_Year_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Year"), \
                                            tr("This is how much the battery has been charged this year."));
    Battery_Charge_Year->add_Specification();
    Battery_Charge_Total = new Specification(this,Battery_Charge_Total_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Total"), \
                                            tr("This is the total charge of the battery."));
    Battery_Charge_Total->add_Specification();

    line++;
    column = 1;
    Battery_Discharge_Day = new Specification(this,Battery_Discharge_Day_explain, myTable, line, column++, \
                                            "0", tr("Battery Charge Day"), \
                                            tr("This is the discharging capacity of the battery today."));
    Battery_Discharge_Day->add_Specification();
    Battery_Discharge_Month = new Specification(this,Battery_Discharge_Month_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Month"), \
                                            tr("This is how much the battery has been discharged for the month."));
    Battery_Discharge_Month->add_Specification();
    Battery_Discharge_Year = new Specification(this,Battery_Discharge_Year_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Year"), \
                                            tr("This is how much the battery has been discharged this year."));
    Battery_Discharge_Year->add_Specification();
    Battery_Discharge_Total = new Specification(this,Battery_Discharge_Total_explain, myTable, line, column++, \
                                            "0", tr("Battery Discharge Total"), \
                                            tr("This is the total discharge of the battery."));
    Battery_Discharge_Total->add_Specification();

    line++;
    column = 1;
    Grid_Charge_Day = new Specification(this,Grid_Charge_Day_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Day"), \
                                            tr("This is the amount of charging from the grid today."));
    Grid_Charge_Day->add_Specification();
    Grid_Charge_Month = new Specification(this,Grid_Charge_Month_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Month"), \
                                            tr("This is the amount of charging from the grid for the month."));
    Grid_Charge_Month->add_Specification();
    Grid_Charge_Year = new Specification(this,Grid_Charge_Year_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Year"), \
                                            tr("This is the amount of charging from the grid this year."));
    Grid_Charge_Year->add_Specification();
    Grid_Charge_Total = new Specification(this,Grid_Charge_Total_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Total"), \
                                            tr("This is the total amount of charge from the grid."));
    Grid_Charge_Total->add_Specification();

    line++;
    column = 1;
    Grid_Discharge_Day = new Specification(this,Grid_Discharge_Day_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Day"), \
                                            tr("This is the amount of energy being discharged into the grid today."));
    Grid_Discharge_Day->add_Specification();
    Grid_Discharge_Month = new Specification(this,Grid_Discharge_Month_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Month"), \
                                            tr("This is the amount of electricity discharged into the grid this month."));
    Grid_Discharge_Month->add_Specification();
    Grid_Discharge_Year = new Specification(this,Grid_Discharge_Year_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Year"), \
                                            tr("This is the amount of energy that has been discharged into the grid this year."));
    Grid_Discharge_Year->add_Specification();
    Grid_Discharge_Total = new Specification(this,Grid_Discharge_Total_explain, myTable, line, column++, \
                                            "0", tr("Grid Charge Total"), \
                                            tr("This is the total amount of discharge to the grid."));
    Grid_Discharge_Total->add_Specification();
}

//历史记录   绘制button
void MyWidget::HistoryRecord(QTableWidget *myTable)
{
    QString str1 = tr("0");
    QString str2 = tr("Level");
    QString str3 = tr("This is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.");//这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息
    QString str4 = tr("Start Time");
    QString str5 = tr("This is the event start time, which means that the record started appearing at this time.");//这是事件开始时间，表示这条记录从这个时间开始出现。
    QString str6 = tr("End Time");
    QString str7 = tr("This is the event end time, which means the end time of this record,'... 'means no end time.");//这是事件结束时间，表示这条记录的结束时间,...'表示无结束时间。

    QString str8 = tr("CAN communication failure");
    QString str9 = tr("Description");//描述
    QString str10 = tr("This is the event description, when there is an alarm information, the alarm information will be recorded here.");//这是事件描述，当有告警信息时，会将告警信息记录在这里。
    QString str11 = tr("Fire alarm (High temp. alarm)");//消防告警(高温告警)
    QString str12 = tr("Power Meter Comm fualttLead-acid abnormal");//电能表通讯故障
    int line=0;int column=0;
    Grade = new Specification(this,Grade_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade->add_Specification();
    Grade2 = new Specification(this,Grade2_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade2->add_Specification();
    Grade3 = new Specification(this,Grade3_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade3->add_Specification();
    Grade4 = new Specification(this,Grade4_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade4->add_Specification();
    Grade5 = new Specification(this,Grade5_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade5->add_Specification();
    Grade6 = new Specification(this,Grade6_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade6->add_Specification();
    Grade7 = new Specification(this,Grade7_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade7->add_Specification();
    Grade8 = new Specification(this,Grade8_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);
    Grade8->add_Specification();
    line=0;
    column=1;
    StartTime = new Specification(this,StartTime_explain, myTable, line++, column, \
                                                    "2023.5.6 15:49:50", str4, \
                                                    str5);
    StartTime->add_Specification();
    StartTime2 = new Specification(this,StartTime2_explain, myTable, line++, column, \
                                                    "2023.5.6 15:48:18", str4, \
                                                    str5);
    StartTime2->add_Specification();
    StartTime3 = new Specification(this,StartTime3_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", str4, \
                                                    str5);
    StartTime3->add_Specification();
    StartTime4 = new Specification(this,StartTime4_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", str4, \
                                                    str5);
    StartTime4->add_Specification();
    StartTime5 = new Specification(this,StartTime5_explain, myTable, line++, column, \
                                                    "2023.5.6 15:39:3", str4, \
                                                    str5);
    StartTime5->add_Specification();
    StartTime6 = new Specification(this,StartTime6_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:56", str4, \
                                                    str5);
    StartTime6->add_Specification();
    StartTime7 = new Specification(this,StartTime7_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:38", str4, \
                                                    str5);
    StartTime7->add_Specification();
    StartTime8 = new Specification(this,StartTime8_explain, myTable, line++, column, \
                                                    "2023.5.6 15:21:38", str4, \
                                                    str5);
    StartTime8->add_Specification();
    line=0;
    column=2;
    EndTime = new Specification(this,EndTime_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime->add_Specification();
    EndTime2 = new Specification(this,EndTime2_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime2->add_Specification();
    EndTime3 = new Specification(this,EndTime3_explain, myTable, line++, column, \
                                                    "...", str6, \
                                                    str7);
    EndTime3->add_Specification();
    EndTime4 = new Specification(this,EndTime4_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime4->add_Specification();
    EndTime5 = new Specification(this,EndTime5_explain, myTable, line++, column, \
                                                    "...", str6, \
                                                    str7);
    EndTime5->add_Specification();
    EndTime6 = new Specification(this,EndTime6_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime6->add_Specification();
    EndTime7 = new Specification(this,EndTime7_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime7->add_Specification();
    EndTime8 = new Specification(this,EndTime8_explain, myTable, line++, column, \
                                                    "-", str6, \
                                                    str7);
    EndTime8->add_Specification();
    line=0;
    column=3;
    Describe = new Specification(this,Describe_explain, myTable, line++, column, \
                                                    str8, str9, \
                                                    str10);
    Describe->add_Specification();
    Describe2 = new Specification(this,Describe2_explain, myTable, line++, column, \
                                                    str8, str9, \
                                                    str10);
    Describe2->add_Specification();
    Describe3 = new Specification(this,Describe3_explain, myTable, line++, column, \
                                                    str11, str9, \
                                                    str10);
    Describe3->add_Specification();
    Describe4 = new Specification(this,Describe4_explain, myTable, line++, column, \
                                                    str8, str9, \
                                                    str10);
    Describe4->add_Specification();
    Describe5 = new Specification(this,Describe5_explain, myTable, line++, column, \
                                                    str12, str9, \
                                                    str10);
    Describe5->add_Specification();
    Describe6 = new Specification(this,Describe6_explain, myTable, line++, column, \
                                                    str8, str9, \
                                                    str10);
    Describe6->add_Specification();
    Describe7 = new Specification(this,Describe7_explain, myTable, line++, column, \
                                                    str11, str9, \
                                                    str10);
    Describe7->add_Specification();
    Describe8 = new Specification(this,Describe8_explain, myTable, line++, column, \
                                                    str12, str9, \
                                                    str10);
    Describe8->add_Specification();
}

//操作日志 绘制button
void MyWidget::OperationLog_tab(QTableWidget *myTable)
{
    QString str = tr("ModificationTime");
    QString str1 = tr("Time when the system Settings are modified.");
    QString str2 = tr("RecordEvent");
    QString str3 = tr("Here is a record of the operation when a change is made to the system Settings.");
    int line=0;int column=0;
    ModificationTime = new Specification(this,ModificationTime_explain, myTable, line++, column, \
                                                    "2023-05-12 11:32:45", str, \
                                                    str1);
    ModificationTime->add_Specification();
    ModificationTime2 = new Specification(this,ModificationTime2_explain, myTable, line++, column, \
                                                    "2023-05-12 11:32:33", str, \
                                                    str1);
    ModificationTime2->add_Specification();
    ModificationTime3 = new Specification(this,ModificationTime3_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:24", str, \
                                                    str1);
    ModificationTime3->add_Specification();
    ModificationTime4 = new Specification(this,ModificationTime4_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:21", str, \
                                                    str1);
    ModificationTime4->add_Specification();
    ModificationTime5 = new Specification(this,ModificationTime5_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:10", str, \
                                                    str1);
    ModificationTime5->add_Specification();
    ModificationTime6 = new Specification(this,ModificationTime6_explain, myTable, line++, column, \
                                                    "2023-05-11 19:29:07", str, \
                                                    str1);
    ModificationTime6->add_Specification();
    ModificationTime7 = new Specification(this,ModificationTime7_explain, myTable, line++,column, \
                                                    "2023-05-11 17:21:16", str, \
                                                    str1);
    ModificationTime7->add_Specification();
    ModificationTime8 = new Specification(this,ModificationTime8_explain, myTable, line++, column, \
                                                    "2023-05-11 11:21:02", str, \
                                                    str1);
    ModificationTime8->add_Specification();
    ModificationTime9 = new Specification(this,ModificationTime9_explain, myTable, line++, column, \
                                                    "2023-05-11 11:20:58", str, \
                                                    str1);
    ModificationTime9->add_Specification();
    ModificationTime10 = new Specification(this,ModificationTime10_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:22", str, \
                                                    str1);
    ModificationTime10->add_Specification();
    ModificationTime11 = new Specification(this,ModificationTime11_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:18", str, \
                                                    str1);
    ModificationTime11->add_Specification();
    ModificationTime12 = new Specification(this,ModificationTime12_explain, myTable, line++, column, \
                                                    "2023-05-11 11:02:14", str, \
                                                    str1);
    ModificationTime12->add_Specification();
    line=0;
    column=1;
    EventRecord = new Specification(this,EventRecord_explain, myTable, line++, column, \
                                                    tr("Power control type：CP_P->CP_N&&P"), str2, \
                                                    str3);
    EventRecord->add_Specification();
    EventRecord2 = new Specification(this,EventRecord2_explain, myTable, line++, column, \
                                                    tr("Power control type：CP_N&&P->CP_P"), str2, \
                                                    str3);
    EventRecord2->add_Specification();
    EventRecord3 = new Specification(this,EventRecord3_explain, myTable,line++, column, \
                                                    tr("Grid Fre Upper limit：0.2->3"), str2, \
                                                    str3);
    EventRecord3->add_Specification();
    EventRecord4 = new Specification(this,EventRecord4_explain, myTable, line++, column, \
                                                    tr("Grid Fre Upper limit：3->0.2"), str2, \
                                                    str3);
    EventRecord4->add_Specification();
    EventRecord5 = new Specification(this,EventRecord5_explain, myTable, line++, 1, \
                                                    tr("Voltage protection Lower limit：-10->-15"), str2, \
                                                    str3);
    EventRecord5->add_Specification();
    EventRecord6 = new Specification(this,EventRecord6_explain, myTable, line++, column, \
                                                    tr("Voltage protection Lower limit：-15->-10"), str2, \
                                                    str3);
    EventRecord6->add_Specification();
    EventRecord7 = new Specification(this,EventRecord7_explain, myTable, line++, column, \
                                                    tr("Operation mode：Prevent countercurrnet->Peak valley"), str2, \
                                                    str3);
    EventRecord7->add_Specification();
    EventRecord8 = new Specification(this,EventRecord8_explain, myTable, line++, column, \
                                                    tr("Operation mode：UPS->Prevent countercurrnet"), str2, \
                                                    str3);
    EventRecord8->add_Specification();
    EventRecord9 = new Specification(this,EventRecord9_explain, myTable, line++, column, \
                                                    tr("Operation mode：Manual->UPS"), str2, \
                                                    str3);
    EventRecord9->add_Specification();
    EventRecord10 = new Specification(this,EventRecord10_explain, myTable, line++, column, \
                                                    tr("Operation mode：Peak valley->Manual"), str2, \
                                                    str3);
    EventRecord10->add_Specification();
    EventRecord11 = new Specification(this,EventRecord11_explain, myTable, line++, column, \
                                                    tr("Inv ON/Off-Grid：Off->automatic"), str2, \
                                                    str3);
    EventRecord11->add_Specification();
    EventRecord12 = new Specification(this,EventRecord12_explain, myTable, line++, column, \
                                                    tr("Inv ON/Off-Grid：automatic->Off"), str2, \
                                                    str3);
    EventRecord12->add_Specification();
}
/******************功能设置页说明**********************/
void MyWidget::FunctionSet(QTableWidget *myTable)
{
    //电池类型说明
    Battery_type = new Specification(this,Battery_type_explain, myTable, 0, 1, \
                                     tr("Lithium"), tr("Battery type"), \
                                     tr("Choose the battery type according to the actual situation, there are two types of Lithium and LeadAcid to choose from."));
    Battery_type->add_Specification();

    //电池通信方式说明
    BMS_Comm_type = new Specification(this,BMS_Comm_type_explain, myTable, 1, 1, \
                                      "CAN", tr("BMS Comm type"), \
                                      tr("Set the communication mode between the battery, RS485 or CAN communication or Ethernet can be selected according to the situation."));
    BMS_Comm_type->add_Specification();

    //功率控制类型说明
    Power_control_type = new Specification(this,Power_control_type_explain, myTable, 2, 1,\
                                           "CP_N&&P" , tr("Power control type"), \
                                           tr("Set the control power mode, including constant voltage (CV), constant current (CC), constant power (CP_P), and positive and negative power (CP_N&P).\nIf constant voltage (CV) mode is selected, the converter will operate in constant voltage mode.\nIf constant current (CC) mode is selected, the converter will operate in constant current mode.\nIf you choose constant power (CP_P) or positive and negative power (CP_N&P) mode: you can set the power size at 'constant power', the value is the size of the power size, positive for discharge, negative for charging."));
    Power_control_type->add_Specification();

    //EMS通讯方式说明
    EMS_Comm_type = new Specification(this,EMS_Comm_type_explain, myTable, 3, 1, \
                                      "RS485", tr("EMS Comm type"), \
                                      tr("You CAN set the communication mode of the EMS, including RS485,CAN, and Ethernet. Select one communication mode that can be read and written remotely, and the other two communication modes can be read only."));
    EMS_Comm_type->add_Specification();
    //输出功率上限说明
    Output_power_limit = new Specification(this,Output_power_limit_explain, myTable, 4, 1,\
                                           "100", tr("Output power limit"), \
                                           tr("HMI Limits the range of power Settings on the AC side."));
    Output_power_limit->add_Specification();

    //电池厂家说明
    BAT_manufacturers = new Specification(this,BAT_manufacturers_explain, myTable, 5, 1, \
                                          tr("Auto"), tr("BAT protocol"), \
                                          tr("This is the battery protocol that parses the packets sent by the BMS according to the selected battery protocol."));
    BAT_manufacturers->add_Specification();

    //充电SOC说明
    Charge_SOC = new Specification(this,Charge_SOC_explain, myTable, 6, 1, \
                                          "20", tr("Charge SOC"), \
                                          tr("This is the charging SOC. When the battery SOC is below 20%, the battery will start charging until the charging reaches the discharging SOC before allowing the battery to discharge again."));
    Charge_SOC->add_Specification();//这是充电SOC，当电池SOC低于20%时，电池将启动充电，直到充电达到放电SOC，才允许电池再次放电\n

    //放电SOC说明
    Disharge_SOC = new Specification(this,Disharge_SOC_explain, myTable, 7, 1, \
                                          "50", tr("Disharge SOC"), \
                                          tr("This is the discharge SOC. When the battery SOC is lower than the charging SOC, after the battery starts charging, it will be charged to the discharge SOC (50%) before allowing the battery to discharge again."));
    Disharge_SOC->add_Specification();//这是放电SOC，当电池SOC低于充电SOC，电池启动充电后，电池将充电至放电SOC(50%)时，才允许电池再次放电\n

    //柴发容量说明
    DG_capacity = new Specification(this,DG_capacity_explain, myTable, 8, 1, \
                                    "100", tr("DG capacity"), \
                                    tr("This is the maximum allowable input power of diesel generator, which shall not exceed the model capacity."));
    DG_capacity->add_Specification();//这是柴油发电机的允许输入最大功率，不得超过机型容量\n

    //能量优先级说明
    Energy_priority = new Specification(this,Energy_priority_explain, myTable, 9, 1, \
                                        tr("Bat>Grid"), tr("Energy priority"), \
                                        tr("Energy priority: In automatic self-use mode, if you choose Battery > power grid, the battery is preferred to power the load. If you choose Grid > Battery, power is supplied to the power grid first."));
    Energy_priority->add_Specification();

    //主机地址说明
    Host_Address = new Specification(this,Host_Address_explain, myTable, 0, 4,\
                                     "1", tr("Host Address"), \
                                     tr("This is the device address, which defaults to 1 and can be adjusted from 1 to 255 to match the host address during EMS communication."));
    Host_Address->add_Specification();//这是设备地址，默认值为1，可调范围在1~255之间，用于EMS通信时匹配主机地址\n

    //串口1说明
    serial_port_1 = new Specification(this,serial_port_1_explain, myTable, 1, 4, \
                                      "9600", tr("serial port 1"), \
                                      tr("This is serial port 1, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 1 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1)."));
    serial_port_1->add_Specification();//这是串口1，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口1默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）

    //串口2说明
    serial_port_2 = new Specification(this,serial_port_2_explain, myTable, 2, 4, \
                                      "9600", tr("serial port 2"), \
                                      tr("This is serial port 2, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 2 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1)."));
    serial_port_2->add_Specification();

    //串口3说明
    serial_port_3 = new Specification(this,serial_port_3_explain, myTable, 3, 4, \
                                      "9600", tr("serial port 3"), \
                                      tr("This is serial port 3, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 3 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1)."));
    serial_port_3->add_Specification();

    //串口4说明
    serial_port_4 = new Specification(this,serial_port_4_explain, myTable, 4, 4, \
                                      "9600", tr("serial port 4"), \
                                      tr("This is serial port 4, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 4 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1)."));
    serial_port_4->add_Specification();

    //串口5说明
    serial_port_5 = new Specification(this,serial_port_5_explain, myTable, 5, 4, \
                                      "9600", tr("serial port 5"), \
                                      tr("This is serial port 5, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 5 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1)."));
    serial_port_5->add_Specification();

    //CAN1说明
    Can_port_1 = new Specification(this,Can_port_1_explain, myTable, 6, 4, \
                                   "500", tr("Can port 1"), \
                                   tr("This is the CAN1 port, the baud rate of PCS internal communication, the default baud rate is 500kbps, eight data bits, no check, one stop bit(8, N, 1)."));
    Can_port_1->add_Specification();//这是CAN1端口，PCS内部通讯的波特率，默认波特率500kbps,八个数据位，无校验，一个停止位（8，N，1）

    //CAN2说明
    Can_port_2 = new Specification(this,Can_port_2_explain, myTable, 7, 4, \
                                   "250", tr("Can port 2"), \
                                   tr("This is the CAN2 port, the baud rate of communication between PCS and BMS, the default baud rate is 125, eight data bits, no check, one stop bit (8, N, 1)."));
    Can_port_2->add_Specification();//这是CAN2端口，PCS与BMS通信的波特率，默认波特率125，八个数据位，无校验，一个停止位（8，N，1）

    //释放充电标志说明
    Relese_Charge_mark = new Specification(this,Relese_Charge_mark_explain, myTable, 8, 4, \
                                           tr("Follow battery"), tr("Release Charging Ban Sign"), \
                                           tr("This is the release of the forbidden charge flag, when the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%."));
    Relese_Charge_mark->add_Specification();//这是释放禁充标志，当电池SOC低于选择值时解除禁充，有四项可选：跟随电池(Follow battery)、95%、90%、85%

    //强充开启说明
    ForceCharge_start = new Specification(this,ForceCharge_start_explain, myTable, 9, 4, \
                                          "2.85", tr("ForceCharge start"), \
                                          tr("When the minimum battery voltage is lower than this value, switch to the battery priority mode first, and the AC side will charge the battery with 10kw power."));
    ForceCharge_start->add_Specification();

    // 强充结束说明
    ForceCharge_top = new Specification(this,ForceCharge_top_explain, myTable, 10, 4, \
                                        "3.2", tr("ForceCharge top"), \
                                        tr("When the maximum battery voltage is higher than this value, exit the battery priority mode and return to the pre-strong charge mode."));
    ForceCharge_top->add_Specification();

    //协议版本说明
    ProtocolVersion = new Specification(this,ProtocolVersion_explain, myTable, 0, 7, \
                                        "V1.0", tr("ProtocolVersion"), \
                                        tr("This is the protocol version number, which is used to view the current protocol version. The protocol version number defaults to V1.0."));
    ProtocolVersion->add_Specification();//这是协议版本号，用于查看当前协议版本,协议版本号默认为V1.0

    //用户密码说明
    UserPassPort = new Specification(this,UserPassPort_explain, myTable, 1, 7, \
                                     "123456", tr("UserPassPort"), \
                                     tr("This is the user password, you can reset the user password, the default user password 123456, (note: User password must be six digits)."));
    UserPassPort->add_Specification();//这是用户密码，可供重新设置用户密码，默认用户密码123456,(注：用户密码必须为六位数)

    //超级权限说明
    RootPassport = new Specification(this,RootPassport_explain, myTable, 2, 7,\
                                     "888888", tr("RootPassport"), \
                                     tr("This is the super permission password, you can reset the super permission password, the default super permission password 888888, (Note: super permission password must be six digits)."));
    RootPassport->add_Specification();//这是超级权限密码，可供重新设置超级权限密码，默认超级权限密码888888,(注超级权限密码必须为六位数）

    //语言说明
    Language = new Specification(this,Language_explain, myTable, 3, 7, \
                                 tr("English"), tr("Language"), \
                                 tr("You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language."));
    Language->add_Specification();//设置显示屏的显示语言，可供选择为中文与英文，切换语言时系统需重启\n

    //系统升级说明
    System_upgrade = new Specification(this,System_upgrade_explain, myTable, 4, 7, \
                                       tr("upgrade"), tr("System_upgrade"), \
                                       tr("Click to enter the system upgrade application and upgrade the system according to the upgrade document."));
    System_upgrade->add_Specification();//点击即可进入系统升级应用程序，根据升级文档进行系统升级

    //声音说明
    Sounds = new Specification(this,Sounds_explain, myTable, 5, 7, \
                               tr("Allow"), tr("Sounds"), \
                               tr("Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid)."));
    Sounds->add_Specification();//设置显示屏是否开启声音，可供选择为允许(Allow)、禁止(forbid)

}
/********************系统参数设置页说明***********************/
void MyWidget::SystemParameter(QTableWidget *myTable)
{
    //功率变化率说明
    Change_rate_of_power = new Specification(this,Change_rate_of_power_explain, myTable, 0, 1, \
                                             "20", tr("Change rate of power"), \
                                             tr("How fast the power changes per unit time."));
    Change_rate_of_power->add_Specification();

    //电网频率变化范围上限说明
    Grid_frequency_upper_limit = new Specification(this,Grid_frequency_upper_limit_explain, myTable, 1, 1, \
                                                   "0.2", tr("Grid frequency upper limit"), \
                                                   tr("The upper limit of the frequency range allowed on the AC side is 0.2, 0.5, 1, and 3."));
    Grid_frequency_upper_limit->add_Specification();

    //电网频率变化范围下限说明
    Grid_frequency_lower_limit = new Specification(this,Grid_frequency_lower_limit_explain, myTable, 2, 1, \
                                                   "-0.5", tr("Grid frequency lower limit"), \
                                                   tr("The lower limit of the frequency range allowed on the AC side can be selected as -0.2, -0.5, -1, or -3."));
    Grid_frequency_lower_limit->add_Specification();

    //电压保护范围上限说明
    Vol_protection_upper_limit = new Specification(this,Vol_protection_upper_limit_explain, myTable, 3, 1, \
                                                   "+15", tr("Vol protection upper limit"), \
                                                   tr("The upper limit of the voltage range allowed on the AC side can be +10, +15, +20, or +30."));
    Vol_protection_upper_limit->add_Specification();

    //电压保护范围下限说明
    Vol_protection_lower_limit = new Specification(this,Vol_protection_lower_limit_explain, myTable, 4, 1, \
                                                   "-15", tr("Vol protection lower limit"), \
                                                   tr("The lower limit of the voltage variation range allowed on the AC side can be -10, -15, -20, or -30."));
    Vol_protection_lower_limit->add_Specification();

    //高穿使能说明
    HVRT_enable = new Specification(this,HVRT_enable_explain, myTable, 5, 1, \
                                                    tr("prohibit"), tr("HVRT enable"), \
                                    tr("This is the high voltage crossing (HVRT) Enable, enable the device will not stop because of a short period of high voltage, the option is to Enable, prohibit, (note: this is generally used in large grid-connected power stations)."));
    HVRT_enable->add_Specification();

    //低穿使能说明
    LVRT_enable = new Specification(this,LVRT_enable_explain, myTable, 6, 1, \
                                    tr("prohibit"), "LVRT enable", \
                                    tr("This is the low voltage crossing (LVRT) Enable, enable the device will not stop because of a short period of low voltage, the option is to Enable, prohibit, (note: this is generally used in large grid-connected power stations)."));
    LVRT_enable->add_Specification();

    //孤岛使能说明
    AFD_enable = new Specification(this,AFD_enable_explain, myTable, 7, 1, \
                                   tr("prohibit"), tr("AFD enable"), \
                                   tr("Prevent islanding effect, When the detection of the island effect (in the photovoltaic grid-connected system, when the power failure occurs in the large power grid, the photovoltaic grid-connected inverter power generation and the local load on the low-voltage side of the grid if the power is just matched, it is easy to appear self-sufficient maintenance power state, resulting in the 'island' phenomenon, thereby endangering the safety of maintenance personnel), the inverter automatically shut down, and the option is allowed Enable, prohibit, (Note: this is generally used in large grid-connected power stations)."));
    AFD_enable->add_Specification();

    //绝缘监测使能说明
    Insulation_detection_enable = new Specification(this,Insulation_detection_enable_explain, myTable, 8, 1, \
                                                    tr("prohibit"), tr("Insulation detection enable"), \
                                                    tr("Insulation detection Enable, insulation resistance greater than 33KΩ to be able to operate normally, less than 33KΩ can not start, and to alarm, the default prohibition, the choice is to Enable, prohibit, (Note: this is generally used in large grid-connected power stations)."));
    Insulation_detection_enable->add_Specification();

    //一次调频使能说明
    PrimaryFreq_enable = new Specification(this,PrimaryFreq_enable_explain, myTable, 9, 1, \
                                           tr("prohibit"), tr("PrimaryFreq enable"), \
                                           tr("When the frequency of the power grid deviates from the rated value, the power grid frequency is maintained stable by controlling the increase or decrease of the active power, which can be selected to Enable, prohibit, (Note: this is generally used in large grid-connected power stations)."));
    PrimaryFreq_enable->add_Specification();

    //转动惯量使能说明
    Inertia_enable = new Specification(this,Inertia_enable_explain, myTable, 10, 1, \
                                       tr("prohibit"), tr("Inertia enable"), \
                                       tr("Moment of inertia Enable, can be selected to Enable, prohibit, (Note: this is generally used in large grid-connected power stations)."));
    Inertia_enable->add_Specification();

    //负载优先说明
    Load_priority = new Specification(this,Load_priority_explain, myTable, 11, 1, \
                                      tr("prohibit"), tr("Load priority"), \
                                      tr("Reserve"));
    Load_priority->add_Specification();

    //机器型号说明
    Machine_type = new Specification(this,Machine_type_explain, myTable, 0, 4, \
                                     "MPS-TS", tr("Machine type"), \
                                     tr("Set according to the machine model on site, the factory value prevails, the default MPS-TS, but MPS and MPS-T are not optional.if you need to change, please contact customer service."));
    Machine_type->add_Specification();

    //机器容量说明
    Machine_capacity = new Specification(this,Machine_capacity_explain, myTable, 1, 4, \
                                     "100", tr("Machine capacity"), \
                                         tr("The rated capacity of PCS is subject to the ex-factory value and cannot be changed."));
    Machine_capacity->add_Specification();

    //输出频率等级说明
    Output_Fre_grade = new Specification(this,Output_Fre_grade_explain, myTable, 2, 4, \
                                         "50", tr("Output Fre grade"), \
                                         tr("Set the output frequency level, the default is 50Hz, generally 50Hz or 60Hz, can be fine-tuned according to the project."));
    Output_Fre_grade->add_Specification();

    //输出电压等级说明
    Output_vol_level = new Specification(this,Output_vol_level_explain, myTable, 3, 4, \
                                         "400", tr("Output vol level"), \
                                         tr("The voltage level is changed according to the actual local power grid voltage. The voltage level is subject to delivery. If you need to change it, contact customer service for confirmation."));
    Output_vol_level->add_Specification();

    //逆变电压等级说明
    Converter_side_vol_level = new Specification(this,Converter_side_vol_level_explain, myTable, 4, 4, \
                                         "270:400", tr("Converter side vol level"), \
                                                 tr("The inverter voltage level is the voltage level of the inverter, which should be set according to the transformer nameplate, subject to the factory default value, and cannot be changed at will. If you need to change, please contact customer service to confirm."));
    Converter_side_vol_level->add_Specification();

    //输出无功方式说明
    Output_reactive_power_mode = new Specification(this,Output_reactive_power_mode_explain, myTable, 5, 4, \
                                                   tr("Non adjustable"), tr("Output reactive power mode"), \
                                                   tr("Output reactive mode, the default is not adjustable, can be selected as power factor (Pf), reactive power (Q), Non adjustable."));
    Output_reactive_power_mode->add_Specification();

    //电网恢复调度开机说明
    Grid_recovery_scheduling = new Specification(this,Grid_recovery_scheduling_explain, myTable, 6, 4, \
                                                 tr("Not Allow"), tr("Grid recovery scheduling"), \
                                                 tr("This is the power grid recovery scheduling startup Settings, there are two options: Allow (Allow), Not allow (Not Allow), the setting is invalid."));
    Grid_recovery_scheduling->add_Specification();//这是电网恢复调度开机设置，有两项可选：允许(Allow)、不允许(Not Allow),设置无效

    //电网恢复并网时间说明
    Grid_recovery_time = new Specification(this, Grid_recovery_time_explain, myTable, 7, 4, \
                                           "0", tr("Grid recovery time"), \
                                           tr("This is the grid restoration and grid connection time, when the grid restoration and dispatching start-up allows, according to the actual demand can be set."));
    Grid_recovery_time->add_Specification();//这是电网恢复并网时间，当电网恢复调度开机允许时，根据实际需求设置即可

    //逆变器并网方式说明
    Grid_connected_mode_of_Inv = new Specification(this,Grid_connected_mode_of_Inv_explain, myTable, 8, 4, \
                                                   tr("Non\ncountercurrent"), tr("Grid connected mode of Inv"), \
                                                   tr("Set the grid-connected mode of the inverter, which can be countercurrent, that is, DC can be converted into AC power and then incorporated into the power grid; Irreversible means that the current on the DC side does not flow to the grid. The default value can be Countercurrent. The options can be countercurrent or Non countercurrent. With the local grid qualification, it can be changed to 'countercurrent'; When using Prevent countercurrent mode, you can change to 'countercurrent'."));
    Grid_connected_mode_of_Inv->add_Specification();

    //过频降载说明
    Pshedding_Freq = new Specification(this,Pshedding_Freq_explain, myTable, 9, 4, \
                                       tr("prohibit"), tr("Pshedding Freq"), \
                                       tr("This is the overfrequency load reduction setting, there are two options: allow (Enable), do not allow (prohibit),(note: used in large grid-connected power stations)."));
    Pshedding_Freq->add_Specification();//这是过频降载设置，有两项可选：允许(Enable)、不允许(prohibit),(注：在大型并网电站使用）

    //QP曲线说明
    QP_curve = new Specification(this,QP_curve_explain, myTable, 10, 4, \
                                 tr("prohibit"), tr("QP curve"), \
                                 tr("This is the QP curve setting, with two options: Enable (Enable), prohibit (prohibit),(note: used in large grid-connected power stations)."));
    QP_curve->add_Specification();//这是QP曲线设置，有两项可选：允许(Enable)、不允许(prohibit),(注：在大型并网电站使用）

    //恒压并机说明
    CV_parallel = new Specification(this,CV_parallel_explain, myTable, 11, 4, \
                                    tr("prohibit"), tr("CV parallel"), \
                                    tr("Constant voltage parallel Enable, you can choose to Enable, prohibit, (Note: this setting is used in constant voltage parallel mode)."));
    CV_parallel->add_Specification();

    //模块数量说明
    Module_Number = new Specification(this,Module_Number_explain, myTable, 0, 7, \
                                      "1", tr("Module Number"), \
                                      tr("Number of modules for PCS, default 1(invalid setting)."));
    Module_Number->add_Specification();

    //恢复出厂说明
    Restore_factory = new Specification(this,Restore_factory_explain, myTable,1, 7, \
                                        tr("restore"), tr("Restore factory"), \
                                        tr("Restore the factory default Settings."));
    Restore_factory->add_Specification();

    //清除数据说明
    Clear_Data = new Specification(this,Clear_Data_explain, myTable, 2, 7, \
                                   tr("Clear"), tr("Clear Data"), \
                                   tr("Clear previous recorded data and operation data of the system."));
    Clear_Data->add_Specification();

    //机架说明
    Machine_Type = new Specification(this,Machine_Type_explain, myTable, 3, 7, \
                                     "Single", tr("Machine Type"), \
                                     tr("Select single when the MPS power is less than 250kw, select more when the MPS power is greater than or equal to 250, and change the maximum and minimum number of modules."));
    Machine_Type->add_Specification();

    //最大模块数说明
    Module_max = new Specification(this,Module_max_explain, myTable, 4, 7, \
                                   "2", tr("Module max"), \
                                   tr("This is the maximum number of modules in the current system."));
    Module_max->add_Specification();//这是当前系统的最大模块数\n

    //最小模块数说明
    Module_min = new Specification(this,Module_min_explain, myTable, 5, 7, \
                                   "1", tr("Module min"), \
                                   tr("This is the minimum number of modules in the current system."));
    Module_min->add_Specification();//这是当前系统的最小模块数\n

    //DCDC绝缘监测使能说明
    Insulation_detection_enable_DCDC = new Specification(this,Insulation_detection_enable_DCDC_explain, myTable, 6, 7, \
                                                         tr("Disable"), tr("Insulation detection enable DCDC"), \
                                                         tr("This is the DCDC insulation monitoring Enable setting, with two options: enable (Enable), Disable (Disable),(Note: The default disable)."));
    Insulation_detection_enable_DCDC->add_Specification();//这是DCDC绝缘监测使能设置，有两项可选：允许(Enable)、禁止(Disable),(注：默认禁止)

}
/***********************外设页说明********************/
void MyWidget::ExternalDevice(QTableWidget *myTable)
{
    QString str = tr("Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.");
    QString str1 = tr("When the dry contact is enabled and an abnormal signal is received, the device performs the selected action.");

    DI_1_Enable = new Specification(this,DI_1_Enable_explain, myTable, 0, 0, \
                                    tr("Enable"), tr("DI_1_Enable"), \
                                    tr("Enter dry contact 1. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_1_Enable->add_Specification();
    DI_2_Enable = new Specification(this,DI_2_Enable_explain, myTable, 1, 0, \
                                    tr("Disable"), tr("DI_2_Enable"), \
                                    tr("Enter dry contact 2. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_2_Enable->add_Specification();
    DI_3_Enable = new Specification(this,DI_3_Enable_explain, myTable, 2, 0, \
                                    tr("Enable"), tr("DI_3_Enable"), \
                                    tr("Enter dry contact 3. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_3_Enable->add_Specification();
    DI_4_Enable = new Specification(this,DI_4_Enable_explain, myTable, 3, 0, \
                                    tr("Enable"), tr("DI_4_Enable"), \
                                    tr("Enter dry contact 4. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_4_Enable->add_Specification();
    DI_5_Enable = new Specification(this,DI_5_Enable_explain, myTable, 4, 0, \
                                    tr("Enable"), tr("DI_5_Enable"), \
                                    tr("Enter dry contact 5. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_5_Enable->add_Specification();
    DI_6_Enable = new Specification(this,DI_6_Enable_explain, myTable, 5, 0, \
                                    tr("Enable"), tr("DI_6_Enable"), \
                                    tr("Enter dry contact 6. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DI_6_Enable->add_Specification();
    DO_1_Enable = new Specification(this,DO_1_Enable_explain, myTable, 6, 0, \
                                    tr("Disable"), tr("DO_1_Enable"), \
                                    tr("Output dry contact 1. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DO_1_Enable->add_Specification();
    DO_2_Enable = new Specification(this,DO_2_Enable_explain, myTable, 7, 0, \
                                    tr("Disable"), tr("DO_2_Enable"), \
                                    tr("Output dry contact 2. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DO_2_Enable->add_Specification();
    DO_3_Enable = new Specification(this,DO_3_Enable_explain, myTable, 8, 0, \
                                    tr("Disable"), tr("DO_3_Enable"), \
                                    tr("Output dry contact 3. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set."));
    DO_3_Enable->add_Specification();

    DI_1_NC_O = new Specification(this,DI_1_NC_O_explain, myTable, 0, 1, \
                                   "N_O", tr("DI_1_NC_O"), str);
    DI_1_NC_O->add_Specification();
    DI_2_NC_O = new Specification(this,DI_2_NC_O_explain, myTable, 1, 1, \
                                   "N_O", tr("DI_2_NC_O"), str);
    DI_2_NC_O->add_Specification();
    DI_3_NC_O = new Specification(this,DI_3_NC_O_explain, myTable, 2, 1, \
                                   "N_C", tr("DI_3_NC_O"), str);
    DI_3_NC_O->add_Specification();
    DI_4_NC_O = new Specification(this,DI_4_NC_O_explain, myTable, 3, 1, \
                                   "N_O", tr("DI_4_NC_O"), str);
    DI_4_NC_O->add_Specification();
    DI_5_NC_O = new Specification(this,DI_5_NC_O_explain, myTable, 4, 1, \
                                   "N_O", tr("DI_5_NC_O"), str);
    DI_5_NC_O->add_Specification();
    DI_6_NC_O = new Specification(this,DI_6_NC_O_explain, myTable, 5, 1, \
                                   "N_O", tr("DI_6_NC_O"), str);
    DI_6_NC_O->add_Specification();
    DO_1_NC_O = new Specification(this,DO_1_NC_O_explain, myTable, 6, 1, \
                                   "N_O", tr("DO_1_NC_O"), str);
    DO_1_NC_O->add_Specification();
    DO_2_NC_O = new Specification(this,DO_2_NC_O_explain, myTable, 7, 1, \
                                   "N_O", tr("DO_2_NC_O"), str);
    DO_2_NC_O->add_Specification();
    DO_3_NC_O = new Specification(this,DO_3_NC_O_explain, myTable, 8, 1, \
                                   "N_O", tr("DO_3_NC_O"), str);
    DO_3_NC_O->add_Specification();

    DI_1_Action = new Specification(this,DI_1_Action_explain, myTable, 0, 2, \
                                   tr("Shut down"), tr("DI_1_Action"), str1);
    DI_1_Action->add_Specification();
    DI_2_Action = new Specification(this,DI_2_Action_explain, myTable, 1, 2, \
                                   tr("Prompt"), tr("DI_2_Action"), str1);
    DI_2_Action->add_Specification();
    DI_3_Action = new Specification(this,DI_3_Action_explain, myTable, 2, 2, \
                                   tr("Prompt"), tr("DI_3_Action"), str1);
    DI_3_Action->add_Specification();
    DI_4_Action = new Specification(this,DI_4_Action_explain, myTable, 3, 2, \
                                   tr("Prompt"), tr("DI_4_Action"), str1);
    DI_4_Action->add_Specification();
    DI_5_Action = new Specification(this,DI_5_Action_explain, myTable, 4, 2, \
                                   tr("Shut down"), tr("DI_5_Action"), str1);
    DI_5_Action->add_Specification();
    DI_6_Action = new Specification(this,DI_6_Action_explain, myTable, 5, 2, \
                                   tr("Shut down"), tr("DI_6_Action"), str1);
    DI_6_Action->add_Specification();
    DO_1_Action = new Specification(this,DO_1_Action_explain, myTable, 6, 2, \
                                   tr("Prompt"), tr("DO_1_Action"), str1);
    DO_1_Action->add_Specification();
    DO_2_Action = new Specification(this,DO_2_Action_explain, myTable, 7, 2, \
                                   tr("Prompt"), tr("DO_2_Action"), str1);
    DO_2_Action->add_Specification();
    DO_3_Action = new Specification(this,DO_3_Action_explain, myTable, 8, 2, \
                                   tr("Prompt"), tr("DO_3_Action"), str1);
    DO_3_Action->add_Specification();

}
/*****************DCAC调试页说明*********************/
void MyWidget::DCAC_Debugg(QTableWidget *myTable)
{
    QString str = tr("It is used for internal debugging only.");
    //调试变量1
    Debug_variable_1 = new Specification(this,Debug_variable_1_explain, myTable, 0, 1, \
                                   "0", tr("Debug variable 1"), \
                                   str);
    Debug_variable_1->add_Specification();

    //调试变量2
    Debug_variable_2 = new Specification(this,Debug_variable_2_explain, myTable, 1, 1, \
                                   "0", tr("Debug variable 2"), \
                                   str);
    Debug_variable_2->add_Specification();

    //调试变量3
    Debug_variable_3 = new Specification(this,Debug_variable_3_explain, myTable, 2, 1, \
                                   "0", tr("Debug variable 3"), \
                                   str);
    Debug_variable_3->add_Specification();

    //调试地址变量1
    Debug_variable_1_addr = new Specification(this,Debug_variable_1_addr_explain, myTable, 3, 1, \
                                   "4096", tr("Debug variable 1 addr"), \
                                   str);
    Debug_variable_1_addr->add_Specification();

    //调试地址变量2
    Debug_variable_2_addr = new Specification(this,Debug_variable_2_addr_explain, myTable, 4, 1, \
                                   "4096", tr("Debug variable 2 addr"), \
                                   str);
    Debug_variable_2_addr->add_Specification();

    //调试地址变量3
    Debug_variable_3_addr = new Specification(this,Debug_variable_3_addr_explain, myTable, 5, 1, \
                                   "4096", tr("Debug variable 3 addr"), \
                                   str);
    Debug_variable_3_addr->add_Specification();

    //调试内存变量1
    Debug_memery_var_1 = new Specification(this,Debug_memery_var_1_explain, myTable, 6, 1, \
                                   "0", tr("Debug memery var 1"), \
                                   str);
    Debug_memery_var_1->add_Specification();

    //调试内存变量2
    Debug_memery_var_2 = new Specification(this,Debug_memery_var_2_explain, myTable, 7, 1, \
                                   "0", tr("Debug memery var 2"), \
                                   str);
    Debug_memery_var_2->add_Specification();

    //调试内存变量3
    Debug_memery_var_3 = new Specification(this,Debug_memery_var_3_explain, myTable, 8, 1, \
                                   "0", tr("Debug memery var 3"), \
                                   str);
    Debug_memery_var_3->add_Specification();

    //输入电压系数
    Input_Vol_revise = new Specification(this,Input_Vol_revise_explain, myTable, 9, 1, \
                                   "", tr("Input Vol revise"), \
                                   str);
    Input_Vol_revise->add_Specification();

    //输入电流系数
    Input_Cur_revise = new Specification(this,Input_Cur_revise_explain, myTable, 10, 1, \
                                   "", tr("Input Cur revise"), \
                                   str);
    Input_Cur_revise->add_Specification();

    //1.5V电压系数
    Voltage_1_5_revise = new Specification(this,Voltage_1_5_revise_explain, myTable, 0, 3, \
                                   "", tr("Voltage 1.5 revise"), \
                                   str);
    Voltage_1_5_revise->add_Specification();

    //母线电压系数
    Bus_Vol_revise = new Specification(this,Bus_Vol_revise_explain, myTable, 1, 3, \
                                   "", tr("Bus Vol revise"), \
                                   str);
    Bus_Vol_revise->add_Specification();

    //电网A相电压系数
    Grid_A_AB_Vol_revise = new Specification(this,Grid_A_AB_Vol_revise_explain, myTable, 2, 3, \
                                   "", tr("Grid A AB Vol revise"), \
                                   str);
    Grid_A_AB_Vol_revise->add_Specification();

    //电网B相电压系数
    Grid_B_BC_Vol_revise = new Specification(this,Grid_B_BC_Vol_revise_explain, myTable, 3, 3, \
                                   "", tr("Grid B BC Vol revise"), \
                                   str);
    Grid_B_BC_Vol_revise->add_Specification();

    //电网C相电压系数
    Grid_C_CA_Vol_revise = new Specification(this,Grid_C_CA_Vol_revise_explain, myTable, 4, 3, \
                                   "", tr("Grid C CA Vol revise"), \
                                   str);
    Grid_C_CA_Vol_revise->add_Specification();

    //输出A相电流系数
    Output_A_Cur_revise = new Specification(this,Output_A_Cur_revise_explain, myTable, 5, 3, \
                                   "", tr("Output A Cur revise"), \
                                   str);
    Output_A_Cur_revise->add_Specification();

    //输出B相电流系数
    Output_B_Cur_revise = new Specification(this,Output_B_Cur_revise_explain, myTable, 6, 3, \
                                   "", tr("Output B Cur revise"), \
                                   str);
    Output_B_Cur_revise->add_Specification();

    //输出C相电流系数
    Output_C_Cur_revise = new Specification(this,Output_C_Cur_revise_explain, myTable, 7, 3, \
                                   "", tr("Output C Cur revise"), \
                                   str);
    Output_C_Cur_revise->add_Specification();

    //逆变A相电压系数
    INV_A_Vol_revise = new Specification(this,INV_A_Vol_revise_explain, myTable, 8, 3, \
                                   "", tr("INV A Vol revise"), \
                                   str);
    INV_A_Vol_revise->add_Specification();

    //逆变B相电压系数
    INV_B_Vol_revise = new Specification(this,INV_B_Vol_revise_explain, myTable, 9, 3, \
                                   "", tr("INV B Vol revise"), \
                                   str);
    INV_B_Vol_revise->add_Specification();

    //逆变C相电压系数
    INV_C_Vol_revise = new Specification(this,INV_C_Vol_revise_explain, myTable, 10, 3, \
                                   "", tr("INV C Vol revise"), \
                                   str);
    INV_C_Vol_revise->add_Specification();

    //逆变A相电感电流系数
    INV_A_ind_Cur_revise = new Specification(this,INV_A_ind_Cur_revise_explain, myTable, 11, 3, \
                                   "", tr("INV A inductance Cur revise"), \
                                   str);
    INV_A_ind_Cur_revise->add_Specification();

    //逆变B相电感电流系数
    INV_B_ind_Cur_revise = new Specification(this,INV_B_ind_Cur_revise_explain, myTable, 12, 3, \
                                   "", tr("INV B inductance Cur revise"), \
                                   str);
    INV_B_ind_Cur_revise->add_Specification();

    //逆变C相电感电流系数
    INV_C_ind_Cur_revise = new Specification(this,INV_C_ind_Cur_revise_explain, myTable, 13, 3, \
                                   "", tr("INV C inductance Cur revise"), \
                                   str);
    INV_C_ind_Cur_revise->add_Specification();

    //开关机状态字
    INV_On_off_flag = new Specification(this,INV_On_off_flag_explain, myTable, 0, 5, \
                                   "0", tr("INV On off flag"), \
                                   str);
    INV_On_off_flag->add_Specification();

    //逻辑状态字
    Logic_state = new Specification(this,Logic_state_explain, myTable, 1, 5, \
                                   "0", tr("Logic state"), \
                                   str);
    Logic_state->add_Specification();

    //逆变状态字
    INV_flag = new Specification(this,INV_flag_explain, myTable, 2, 5, \
                                   "0", tr("INV flag"), \
                                   str);
    INV_flag->add_Specification();

    //电网状态字
    Grid_flag = new Specification(this,Grid_flag_explain, myTable, 3, 5, \
                                   "0", tr("Grid flag"), \
                                   str);
    Grid_flag->add_Specification();

    //电网保护状态字
    Grid_protect_flag = new Specification(this,Grid_protect_flag_explain, myTable, 4, 5, \
                                   "0", tr("Grid protect flag"), \
                                   str);
    Grid_protect_flag->add_Specification();

    //电池电压状态字
    PV_flag = new Specification(this,PV_flag_explain, myTable, 5, 5, \
                                   "0", tr("PV flag"), \
                                   str);
    PV_flag->add_Specification();

    //母线状态字
    DC_bus_flag = new Specification(this,DC_bus_flag_explain, myTable, 6, 5, \
                                   "0", tr("DC bus flag"), \
                                   str);
    DC_bus_flag->add_Specification();

    //中断状态字
    INT_main_flag = new Specification(this,INT_main_flag_explain, myTable, 7, 5, \
                                   "0", tr("INT main flag"), \
                                   str);
    INT_main_flag->add_Specification();

    //并机状态字
    parallel_signal = new Specification(this,parallel_signal_explain, myTable, 8, 5, \
                                   "0", tr("parallel signal"), \
                                   str);
    parallel_signal->add_Specification();

    //监控命令状态字
    Monitor_Order = new Specification(this,Monitor_Order_explain, myTable, 9, 5, \
                                   "0", tr("Monitor Order"), \
                                   str);
    Monitor_Order->add_Specification();

    //电池信息字
    Bat_Infor = new Specification(this,Bat_Infor_explain, myTable, 10, 5, \
                                   "0", tr("Bat Infor"), \
                                   str);
    Bat_Infor->add_Specification();

    //电池状态字
    Bat_State = new Specification(this,Bat_State_explain, myTable, 11, 5, \
                                   "0", tr("Bat State"), \
                                   str);
    Bat_State->add_Specification();
}
/*****************DCDC调试页说明*******************/
void MyWidget::DCDC_Debugg(QTableWidget *myTable)
{
    QString str = tr("It is used for internal debugging only.");
    //调试变量1
    DC_Debug_variable_1 = new Specification(this,DC_Debug_variable_1_explain, myTable, 0, 1, \
                                   "0", tr("Debug variable 1"), \
                                   str);
    DC_Debug_variable_1->add_Specification();

    //调试变量2
    DC_Debug_variable_2 = new Specification(this,DC_Debug_variable_2_explain, myTable, 1, 1, \
                                   "0", tr("Debug variable 2"), \
                                   str);
    DC_Debug_variable_2->add_Specification();

    //调试变量3
    DC_Debug_variable_3 = new Specification(this,DC_Debug_variable_3_explain, myTable, 2, 1, \
                                   "0", tr("Debug variable 3"), \
                                   str);
    DC_Debug_variable_3->add_Specification();

    //当前模块号
    Current_ID = new Specification(this,Current_ID_explain, myTable, 3, 1, \
                                   "1", tr("Debug variable 3"), \
                                   str);
    Current_ID->add_Specification();

    //中断状态字
    DC_INT_main_flag = new Specification(this,DC_INT_main_flag_explain, myTable, 4, 1, \
                                   "0", tr("INT main flag"), \
                                   str);
    DC_INT_main_flag->add_Specification();

    //母线状态字
    DC_DC_bus_flag = new Specification(this,DC_DC_bus_flag_explain, myTable, 5, 1, \
                                   "0", tr("DC bus flag"), \
                                   str);
    DC_DC_bus_flag->add_Specification();

    //电池电压状态字
    DC_PV_flag = new Specification(this,DC_PV_flag_explain, myTable, 6, 1, \
                                   "0", tr("PV flag"), \
                                   str);
    DC_PV_flag->add_Specification();

    //调试地址变量1
    DC_Debug_variable_1_addr = new Specification(this,DC_Debug_variable_1_addr_explain, myTable, 0, 3, \
                                   "0", tr("Debug variable 1 addr"), \
                                   str);
    DC_Debug_variable_1_addr->add_Specification();

    //调试地址变量2
    DC_Debug_variable_2_addr = new Specification(this,DC_Debug_variable_2_addr_explain, myTable, 1, 3, \
                                   "0", tr("Debug variable 2 addr"), \
                                   str);
    DC_Debug_variable_2_addr->add_Specification();

    //调试地址变量3
    DC_Debug_variable_3_addr = new Specification(this,DC_Debug_variable_3_addr_explain, myTable, 2, 3, \
                                   "0", tr("Debug variable 3 addr"), \
                                   str);
    DC_Debug_variable_3_addr->add_Specification();

    //开关机状态字
    DC_INV_On_off_flag = new Specification(this,DC_INV_On_off_flag_explain, myTable, 4, 3, \
                                   "0", tr("INV On off flag"), \
                                   str);
    DC_INV_On_off_flag->add_Specification();

    //
    DCONV_logic = new Specification(this,DCONV_logic_explain, myTable, 5, 3, \
                                    "0", tr("DCONV logic"), \
                                    str);
    DCONV_logic->add_Specification();

    //并机状态字
    DC_parallel_signal = new Specification(this,DC_parallel_signal_explain, myTable, 6, 3, \
                                   "0", tr("parallel signal"), \
                                   str);
    DC_parallel_signal->add_Specification();

    //调试内存变量1
    DC_Debug_memery_var_1 = new Specification(this,DC_Debug_memery_var_1_explain, myTable, 0, 5, \
                                   "0", tr("Debug memery var 1"), \
                                   str);
    DC_Debug_memery_var_1->add_Specification();

    //调试内存变量2
    DC_Debug_memery_var_2 = new Specification(this,DC_Debug_memery_var_2_explain, myTable, 1, 5, \
                                   "0", tr("Debug memery var 2"), \
                                   str);
    DC_Debug_memery_var_2->add_Specification();

    //调试内存变量3
    DC_Debug_memery_var_3 = new Specification(this,DC_Debug_memery_var_3_explain, myTable, 2, 5, \
                                   "0", tr("Debug memery var 3"), \
                                   str);
    DC_Debug_memery_var_3->add_Specification();

    //监控命令状态字
    DC_Monitor_Order = new Specification(this,DC_Monitor_Order_explain, myTable, 4, 5, \
                                   "0", tr("Monitor Order"), \
                                   str);
    DC_Monitor_Order->add_Specification();

    //电池信息字
    DC_Bat_Infor = new Specification(this,DC_Bat_Infor_explain, myTable, 5, 5, \
                                   "0", tr("Bat Infor"), \
                                   str);
    DC_Bat_Infor->add_Specification();

    //电池状态字
    DC_Bat_State = new Specification(this,DC_Bat_State_explain, myTable, 6, 5, \
                                   "0", tr("Bat State"), \
                                   str);
    DC_Bat_State->add_Specification();
}
/*********选中第一个模块*********/
void MyWidget::on_RTD_module_1_clicked()
{
    QMessageBox::question(this , "1", tr("Choose the first module to view the real-time data of the first module"), tr("OK"));
}
/*********选中第二个模块*********/
void MyWidget::on_RTD_module_2_clicked()
{
    QMessageBox::question(this , "2", tr("Choose the second module to view the real-time data of the second module"), tr("OK"));
}
/********* 点击Y- *********/
void MyWidget::on_Subtract_Y_clicked()
{
    QMessageBox::question(this, "Y-"\
                          ,tr("To view the previous year's data, click on it to display the previous year's data for the current displayed year."), tr("OK"));
}
/********* 点击Y+ *********/
void MyWidget::on_Add_Y_clicked()
{
    QMessageBox::question(this, "Y+"\
                          ,tr("To view the data for the next year, click on it to display the data for the next year of the current displayed year."), tr("OK"));
}
/********* 点击M- *********/
void MyWidget::on_Subtract_M_clicked()
{
    QMessageBox::question(this, "M-"\
                          ,tr("To view the data of the previous month, click on it to display the data of the previous month of the current displayed month."), tr("OK"));
}
/********* 点击M+ *********/
void MyWidget::on_Add_M_clicked()
{
    QMessageBox::question(this, "M+"\
                          ,tr("To view the data for the next month, click to display the data for the next month of the current displayed month."), tr("OK"));
}
/********* 点击D- *********/
void MyWidget::on_Subtract_D_clicked()
{
    QMessageBox::question(this, "D-"\
                          ,tr("To view the data of the previous day. Click to display the data of the previous day of the current day."), tr("OK"));
}
/********* 点击D+ *********/
void MyWidget::on_Add_D_clicked()
{
    QMessageBox::question(this, "D+"\
                          ,tr("To view the data of the next day. Click to display the data of the next day of the current day."), tr("OK"));
}
/********* 导出历史记录 *********/
void MyWidget::on_OutPut_historyFailuer_clicked()
{
    QMessageBox::question(this, tr("HistoricalFailure")\
                          ,tr("To export history records, click here to export history records to the USB flash drive. The file exported to the USB flash drive is HistoryRecord.csv, which needs to be opened with Excel."), tr("OK"));//导出历史记录，点击此处将会导出历史记录到U盘里,导出到U盘的文件为HistoryRecord.csv，此文件需要用Excel打开
}
/********* 导出操作日志 *********/
void MyWidget::on_Output_OperationLog_clicked()
{
    QMessageBox::question(this, tr("OperationLog")\
                          ,tr("Export operation log. Click here to export operation log to U disk."), tr("OK"));//导出操作日志，点击此处将会导出操作日志到U盘里\n
}
/********* 导出电量统计表 *********/
void MyWidget::on_CoulombmeterReport_btn_clicked()
{
    QMessageBox::question(this, tr("Coulombmeter report")\
                          ,tr("Export the battery statistics. Click here to export the battery statistics to the U disk."), tr("OK"));//导出电量统计表，点击此处将会导出电量统计表到U盘里\n
}
/********* 退出U盘 *********/
void MyWidget::on_Eject_btn_clicked()
{
    QMessageBox::question(this, tr("Eject Udisk")\
                          ,tr("Exit the U disk and unmount the U disk mounted to the display control to ensure that the data in the U disk will not be damaged."), tr("OK"));//退出U盘，将挂载到显控的U盘取消挂载，以保证U盘数据不会损坏\n
}
/*********选中第一个模块*********/
void MyWidget::on_RTS_module_1_clicked()
{
    QMessageBox::question(this , "1", tr("Choose the first module to view the real-time status of the first module"), tr("OK"));
}
/*********选中第二个模块*********/
void MyWidget::on_RTS_module_2_clicked()
{
    QMessageBox::question(this , "2", tr("Choose the second module to view the real-time status of the second module"), tr("OK"));
}

void MyWidget::on_UI_Complete_Btn_clicked()//退出高级设置
{
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
}
/********* 电池上电 *********/
void MyWidget::on_Battery_PowerOn_clicked()
{
    QMessageBox::question(this , tr("Power On"), \
                          tr("When the battery is powered on, this item can give the BMS instructions to close the contactor (Note: only some BMS manufacturers support this function)."), tr("OK"));
}
/********* 电池下电 *********/
void MyWidget::on_Battery_PowerOff_clicked()
{
    QMessageBox::question(this , tr("Power Off"), \
                          tr("Battery power off, this item can give the BMS to disconnect the contactor command (note: only some BMS manufacturers support this function)."), tr("OK"));
}
/*********** 选择静态IP地址 ************/
void MyWidget::on_radio_static_clicked()
{
    IPShow = true;
    if(IPShow)
    {
        ui->ip_explain_btn->show();
        ui->netmask_explain_btn->show();
        ui->gateway_explain_btn->show();
        ui->server_ip_explain_btn->show();
    }
    else
    {
        ui->ip_explain_btn->hide();
        ui->netmask_explain_btn->hide();
        ui->gateway_explain_btn->hide();
        ui->server_ip_explain_btn->hide();
    }
    QMessageBox::question(this ,tr("STATIC"), tr("If this parameter is selected, static IP addresses are used"), tr("OK"));//如果选择此项，表示使用静态的IP地址\n
}
/*********** 选择自动分配IP地址 ************/
void MyWidget::on_radio_dhcp_clicked()
{
    IPShow = false;
    if(IPShow)
    {
        ui->ip_explain_btn->show();
        ui->netmask_explain_btn->show();
        ui->gateway_explain_btn->show();
        ui->server_ip_explain_btn->show();
    }
    else
    {
        ui->ip_explain_btn->hide();
        ui->netmask_explain_btn->hide();
        ui->gateway_explain_btn->hide();
        ui->server_ip_explain_btn->hide();
    }
    QMessageBox::question(this ,tr("DHCP"), tr("If this parameter is selected, the automatically assigned IP address is used"), tr("OK"));//如果选择此项，表示使用自动分配的IP地址\n

}
/****************DCDC 变流器开启*****************/
void MyWidget::on_Switch_on_Inv_clicked()
{
    QMessageBox::question(this, tr("Turn on"), tr("This is the DCDC converter turn on the switch, click to turn on the DCDC converter."), tr("OK"));
}//这是DCDC变流器打开开关,点击后开启DCDC变流器\n
/****************DCDC 变流器关闭*****************/
void MyWidget::on_Switch_off_Inv_clicked()
{
    QMessageBox::question(this, tr("Turn off"), tr("This is the DCDC converter off switch. Click to turn off the DCDC converter."), tr("OK"));
}//这是DCDC变流器关闭开关，点击后关闭DCDC变流器\n
/****************DCAC 变流器开启*****************/
void MyWidget::on_Switch_on_clicked()
{
    QMessageBox::question(this, tr("Turn on"), tr("This is the DCAC converter turn on the switch, click to turn on the DCAC converter."), tr("OK"));
}//这是DCAC变流器打开开关,点击后开启DCAC变流器\n
/****************DCAC 变流器关闭*****************/
void MyWidget::on_Switch_off_clicked()
{
    QMessageBox::question(this, tr("Turn off"), tr("This is the DCAC converter off switch. Click to turn off the DCAC converter."), tr("OK"));
}//这是DCAC变流器关闭开关，点击后关闭DCAC变流器\n
//每月深度放电日期+
void MyWidget::on_pushButton_add_clicked()
{
    QMessageBox::question(this, tr("Date +"), tr("Clicking will move the monthly deep discharge date back one day."), tr("OK"));
}
//每月深度放电日期-
void MyWidget::on_pushButton_sub_clicked()
{
    QMessageBox::question(this, tr("Date -"), tr("Clicking will move the monthly deep discharge date forward by one day."), tr("OK"));
}
//切换电池类型 锂电
void MyWidget::SwitchingBatteryTypes_clicked()
{
    ui->stackedWidget->setCurrentWidget(ui->System_page);
    ui->System_tabWidget->setCurrentWidget(ui->BatterySet_page);
    ui->BatterSet_stackedWidget->setCurrentWidget(ui->Lead_stackedWidgetPage);
}
//切换电池类型 铅酸
void MyWidget::SwitchingBatteryTypes_Lead_clicked()
{
    ui->stackedWidget->setCurrentWidget(ui->System_page);
    ui->System_tabWidget->setCurrentWidget(ui->BatterySet_page);
    ui->BatterSet_stackedWidget->setCurrentWidget(ui->Lithium_stackedWidgetPage);
}
/***************************************************************
 * 故障信息表搜索功能
 ***************************************************************/
void MyWidget::on_search_btn_clicked()
{
    QString search = ui->search_le->text();
    int row=ui->RTAlarm_Data_page->rowCount();

    if (search == "")   //判断搜索框是否是空，如果是空就显示所有行
    {
        for(int i=0; i<row; i++)
        {
            ui->RTAlarm_Data_page->setRowHidden(i,false);
        }
    }
    else
    {
        //通过你输入的和表格里面所有内容进行比对，找到符合条件的索引
        QList <QTableWidgetItem *> item = ui->RTAlarm_Data_page->findItems(ui->search_le->text(), Qt::MatchContains);

        for(int i=0; i<row; i++)
        {
            ui->RTAlarm_Data_page->setRowHidden(i,true);//然后把所有行都隐藏
        }

        if(!item.empty())   //判断符合条件索引是不是空
        {
            //恢复对应的行
            for(int i=0; i<item.count(); i++)
            {
                ui->RTAlarm_Data_page->setRowHidden(item.at(i)->row(),false);//恢复对应的行
            }
        }
    }
}

