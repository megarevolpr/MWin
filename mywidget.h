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
#ifndef MYWIDGET_H
#define MYWIDGET_H

#include <QWidget>
#include <QDialog>
#include <qtoolbar.h>
#include <qtoolbutton.h>
#include <qcombobox.h>

#include <stdio.h>
#include <QObject>
#include <QMessageBox>
#include <QTimer>
#include <QButtonGroup>
#include <QTranslator>
#include <QApplication>
#include <QTableWidgetItem>
#include <QToolTip>
#include "OperMode.h"
#include "upgradetools.h"
#include "FaultTableInterface.h"
#include "SpecificationData/specificationdata.h"

//菜单类型
#define HOSTPAGE            1
#define RTDATAPAGE          2
#define RECORDPAGE          3
#define SYSTEMPAGE          4
#define MACHINESWITCH       5
#define SYSTEMINFORMATION   6
#define USER_LOGIN          7

//操作模式介绍
#define BATTERY_AREA_EXP            0
#define Mode_SELF_USE_EXP           1
#define Mode_BATTERY_PRIORITY_EXP   2
#define Mode_OPTIMAL_MODE_EXP       3
#define Mode_MIXED_MODE_EXP         4
#define Mode_MANUAL_EXP             5

//操作模式
#define Mode_SELF_USE           0
#define Mode_BATTERY_PRIORITY   1
#define Mode_OPTIMAL_MODE       2
#define Mode_MIXED_MODE         3
#define Mode_MANUAL             4

//高级设置
#define ADVANCED_SETTING        5

//系统基础设置 页码
#define SystemTotal_PAGE        4
#define DCAC_PAGE_NUM           0
#define DCDC_PAGE_NUM           1
#define Lithium_PAGE_NUM        2
#define Lead_PAGE_NUM           3
#define MixedMode_PAGE_NUM      4

//系统高级设置 页码
#define AdvancedTotal_PAGE      7
#define Advanced_PAGE1_NUM      5
#define Advanced_PAGE2_NUM      6
#define Advanced_PAGE3_NUM      7
#define Device_PAGE_NUM         8
#define DCACDebug_PAGE_NUM      9
#define DCDCDebug_PAGE_NUM      10
#define PORTDATA_PAGE_NUM       11

//当前登录角色
#define Login_User                    0
#define Login_Maintain                1
#define Login_Root                    2
#define Login_None                    3

namespace Ui {
class MyWidget;
}

class MyWidget : public QWidget
{
    Q_OBJECT

public:
    explicit MyWidget(QWidget *parent = nullptr);
    ~MyWidget();

    OperMode *mode_expelain;
    UpgradeTools *UpgradeInterface;
    QPushButton *AdvancedSetup_btn;//高级设置入口
    FaultTableInterface *FaultTable;
    SpecificationData *ButtonToTable;
    /************************实时数据******************************/
    //变流器
    QPushButton *MPS_vol_AB_explain;
    QPushButton *MPS_vol_BC_explain;
    QPushButton *MPS_vol_CA_explain;
    QPushButton *MPS_cur_A_explain;
    QPushButton *MPS_cur_B_explain;
    QPushButton *MPS_cur_C_explain;
    QPushButton *MPS_IGBT_T_explain;
    QPushButton *MPS_Env_T_explain;
    QPushButton *MPS_Leakage_cur_explain;
    QPushButton *PV_vol_explain;
    QPushButton *PV_cur_explain;
    QPushButton *PV_power_explain;
    QPushButton *Batter_vol_explain;
    QPushButton *Batter_cur_explain;
    QPushButton *Batter_power_explain;
    QPushButton *Bus_vol_explain;
    QPushButton *Bus_cur_explain;
    //光伏
    QPushButton *PV_vol_H_explain;
    QPushButton *PV_cur_H_explain;
    QPushButton *PV_power_H_explain;
    QPushButton *PV_vol_L_explain;
    QPushButton *PV_cur_L_explain;
    QPushButton *PV_power_L_explain;
    QPushButton *PositiveInuslation_explain;
    QPushButton *Bus_H_vol_add_explain;
    QPushButton *Bus_H_vol_reduce_explain;
    QPushButton *Bus_L_vol_add_explain;
    QPushButton *Bus_L_vol_reduce_explain;
    QPushButton *PV_IGBT_T_explain;
    QPushButton *NegativeInuslation_explain;
    QPushButton *Leakage_cur_explain;
    //电网
    QPushButton *Grid_vol_AB_explain;
    QPushButton *Grid_vol_BC_explain;
    QPushButton *Grid_vol_CA_explain;
    QPushButton *Grid_cur_A_explain;
    QPushButton *Grid_cur_B_explain;
    QPushButton *Grid_cur_C_explain;
    QPushButton *Grid_active_power_explain;
    QPushButton *Grid_reactive_power_explain;
    QPushButton *Grid_apparent_power_explain;
    QPushButton *Grid_power_factor_explain;
    QPushButton *Grid_Frequency_explain;
    //负载
    QPushButton *Load_vol_AB_explain;
    QPushButton *Load_vol_BC_explain;
    QPushButton *Load_vol_CA_explain;
    QPushButton *Load_cur_A_explain;
    QPushButton *Load_cur_B_explain;
    QPushButton *Load_cur_C_explain;
    QPushButton *Load_active_power_explain;
    QPushButton *Load_reactive_power_explain;
    QPushButton *Load_apparent_power_explain;
    QPushButton *Load_power_factor_explain;
    QPushButton *Load_Frequency_explain;


    /******************************MPS状态**********************************/
    QPushButton *DC_input_Bre_explain;
    QPushButton *DC_Con_explain;
    QPushButton *M_Bypass_Bre_explain;
    QPushButton *Output_Bre_explain;
    QPushButton *Output_Con_explain;
    QPushButton *Grid_Bre_explain;
    QPushButton *DCACinsulation_detection_explain;
    QPushButton *DO1_explain;
    QPushButton *DO2_explain;
    QPushButton *DO3_explain;

    QPushButton *DCAC_Conver_avail_explain;
    QPushButton *DC_Soft_Start_explain;
    QPushButton *Converter_Status_explain;
    QPushButton *Reactive_P_Reg_explain;
    QPushButton *LVRT_explain;
    QPushButton *DI1_explain;
    QPushButton *DI2_explain;
    QPushButton *DI3_explain;
    QPushButton *DI4_explain;
    QPushButton *DI5_explain;
    QPushButton *DI6_explain;

    QPushButton *Contator_Sta_Boost_explain;
    QPushButton *Contator_Sta_Buck_explain;
    QPushButton *Run_mode_explain;
    QPushButton *DCDC_Converter_ava_explain;
    QPushButton *Soft_Start_Sta_Boost_explain;
    QPushButton *Soft_Start_Sta_Buck_explain;
    QPushButton *Converter_Status_V_explain;
    QPushButton *ModeLock_explain;
    QPushButton *DCDCinsulation_detection_explain;

    /***************************DC/AC参数****************************/
    QPushButton *Grid_connected_mode_explain;//并网方式说明
    QPushButton *Constant_power_explain;     //恒功率说明
//    QPushButton *Charging_and_discharging_explain;  //充放电说明
    QPushButton *Work_mode_explain;  //工作模式说明
    QPushButton *Output_power_factor_explain;    //输出功率因素说明
    QPushButton *Output_reactive_power_explain;  //输出无功功率说明
    QPushButton *Constant_current_explain;  //恒流说明
    QPushButton *Constant_voltage_explain; //恒压说明
    QPushButton *Control_mode_explain;  //控制模式说明
    QPushButton *Machine_number_explain;    //设备号说明
    QPushButton *Parallel_explain;  //并机说明
    QPushButton *G_Constant_power_explain;
    QPushButton *Grid_capacity_explain;
    QPushButton *DG_Charging_power_limit;



    /***************************DC参数****************************/
    QPushButton *Work_parttern_explain; //DCDC工作模式说明
    QPushButton *Boost_or_Buck_explain; //升/降压说明
    QPushButton *Bat_Charging_or_discharging_Model_explain; //电池充放电模式说明
    QPushButton *DCDC_Capacity_explain; //DCDC容量说明
    QPushButton *Voltage_level_explain; //电压等级说明
    QPushButton *Current_value_explain; //电流值说明
    QPushButton *OuterLoopControl_explain; //电流值说明
    QPushButton *IV_curve_scanning_explain;
    QPushButton *IV_curve_scanning_low_explain;
    QPushButton *IV_curve_scanning_high_explain;

    /***************************电池设置-锂电****************************/

    QPushButton *DOD_OnGrid_explain;                //并网DOD说明
    QPushButton *DOD_OffGrid_explain;               //离网DOD说明
    QPushButton *Charge_Volt_Upper_Limit_explain;   //充电电压上限说明
    QPushButton *Charge_Volt_upper_Limit_delta_explain; //充电电压上限回差说明
    QPushButton *Disc_Volt_lower_Limit_explain;     //放电电压限制说明
    QPushButton *Discharge_Volt_upper_Limit_delta_explain; //放电电压下限回差说明
    QPushButton *Charge_Current_Limit_explain;      //充电电流限制说明
    QPushButton *Discharge_Current_Limit_explain;   //放电电流限制说明
//    QPushButton *Floating_charge_explain;         //浮充电压说明
//    QPushButton *Equalized_charge_explain;        //均充电压说明
    QPushButton *Gen_turn_off_SOC_explain;          //柴发关闭SOC说明
    QPushButton *Gen_turn_on_SOC_explain;           //柴发开启SOC说明
    QPushButton *Relese_Charge_mark_explain;        //释放充电标志说明
    QPushButton *MeterModel_explain;                //电表型号
    QPushButton *ElectricityMeterAntiBackflow_explain;//电表防逆流
    QPushButton *Relese_discharge_mark_explain;     //释放充电标志说明
    QPushButton *ForceCharge_start_explain;         //强充开启说明
    QPushButton *ForceCharge_top_explain;           // 强充结束说明
    QPushButton *DOD_Protection_Release_SOC_explain;//DOD保护解除SOC
    QPushButton *Cell_Voltage_max_explain;          //最高单体电压
    QPushButton *Cell_Voltage_max_delta_explain;    //最高单体电压回差
    QPushButton *Cell_Voltage_min_explain;          //最低单体电压
    QPushButton *Cell_Voltage_min_delta_explain;    //最低单体电压回差
    QPushButton *DCAC_cell_protect_explain;         //DCAC单体保护电压
    QPushButton *DCAC_cell_delta_explain;           //DCAC单体保护电压回差

    /***************************电池设置-铅酸****************************/
    QPushButton *Capacity_explain;
    QPushButton *Cell_number_2V_explain;
    QPushButton *Bat_float_vol_explain;
    QPushButton *Bat_filling_vol_explain;
    QPushButton *Charge_limiting_value_explain;
    QPushButton *Discharge_limiting_value_explain;
    QPushButton *Generator_turn_off_SOC_B1_explain;
    QPushButton *Generator_turn_on_SOC_A1_explain;
    QPushButton *Grid_off_EOD_explain;
    QPushButton *Grid_on_EOD_explain;
    QPushButton *DCACReferenceVoltage_explain;
    /*QPushButton *Shutdown_voltage_point_explain;
    QPushButton *Mending_center_point_explain;
    QPushButton *Temperature_filling_coefficient_explain;
    QPushButton *Mending_allowable_setting_explain;
    QPushButton *Temperature_alarm_upper_limit_explain;*/
    QPushButton *Uniform_To_Flushing_current_explain;
    QPushButton *Flushing_To_Uniform_current_explain;

    /***************************自动运行**************************/
    //选择
    QPushButton *Check1_explain,*Check2_explain,*Check3_explain,*Check4_explain,*Check5_explain;
    QPushButton *Check6_explain,*Check7_explain,*Check8_explain,*Check9_explain,*Check10_explain;
    QPushButton *Check11_explain,*Check12_explain,*Check13_explain,*Check14_explain,*Check15_explain;
    QPushButton *Check16_explain,*Check17_explain,*Check18_explain,*Check19_explain,*Check20_explain;

    QPushButton *Peak1_explain,*Peak2_explain,*Peak3_explain,*Peak4_explain,*Peak5_explain;
    QPushButton *Peak6_explain,*Peak7_explain,*Peak8_explain,*Peak9_explain,*Peak10_explain;
    QPushButton *Peak11_explain,*Peak12_explain,*Peak13_explain,*Peak14_explain,*Peak15_explain;
    QPushButton *Peak16_explain,*Peak17_explain,*Peak18_explain,*Peak19_explain,*Peak20_explain;

    //开始时间
    QPushButton *Start_T1_explain,*Start_T2_explain,*Start_T3_explain,*Start_T4_explain,*Start_T5_explain;
    QPushButton *Start_T6_explain,*Start_T7_explain,*Start_T8_explain,*Start_T9_explain,*Start_T10_explain;
    QPushButton *Start_T11_explain,*Start_T12_explain,*Start_T13_explain,*Start_T14_explain,*Start_T15_explain;
    QPushButton *Start_T16_explain,*Start_T17_explain,*Start_T18_explain,*Start_T19_explain,*Start_T20_explain;

    //结束时间
    QPushButton *End_T1_explain,*End_T2_explain,*End_T3_explain,*End_T4_explain,*End_T5_explain;
    QPushButton *End_T6_explain,*End_T7_explain,*End_T8_explain,*End_T9_explain,*End_T10_explain;
    QPushButton *End_T11_explain,*End_T12_explain,*End_T13_explain,*End_T14_explain,*End_T15_explain;
    QPushButton *End_T16_explain,*End_T17_explain,*End_T18_explain,*End_T19_explain,*End_T20_explain;

    //状态
    QPushButton *State1_explain,*State2_explain,*State3_explain,*State4_explain,*State5_explain;
    QPushButton *State6_explain,*State7_explain,*State8_explain,*State9_explain,*State10_explain;
    QPushButton *State11_explain,*State12_explain,*State13_explain,*State14_explain,*State15_explain;
    QPushButton *State16_explain,*State17_explain,*State18_explain,*State19_explain,*State20_explain;

    //功率
    QPushButton *Power1_explain,*Power2_explain,*Power3_explain,*Power4_explain,*Power5_explain;
    QPushButton *Power6_explain,*Power7_explain,*Power8_explain,*Power9_explain,*Power10_explain;
    QPushButton *Power11_explain,*Power12_explain,*Power13_explain,*Power14_explain,*Power15_explain;
    QPushButton *Power16_explain,*Power17_explain,*Power18_explain,*Power19_explain,*Power20_explain;

    //发电机开关
    QPushButton *Generator1_explain,*Generator2_explain,*Generator3_explain,*Generator4_explain,*Generator5_explain
    ,*Generator6_explain,*Generator7_explain,*Generator8_explain,*Generator9_explain,*Generator10_explain
    ,*Generator11_explain,*Generator12_explain,*Generator13_explain,*Generator14_explain,*Generator15_explain
    ,*Generator16_explain,*Generator17_explain,*Generator18_explain,*Generator19_explain,*Generator20_explain;

    /***************************系统信息**************************/

    QButtonGroup *pButton_Version;
    QPushButton *MonitoringVersion_explain;
    QPushButton *DCAC_SysProtocol_Version_explain;
    QPushButton *DCAC_ConverterVersion_explain;
    QPushButton *DCAC_CPLD_Version_explain;
    QPushButton *DCDC_SysProtocol_Version_explain;
    QPushButton *DCDC_ConverterVersion_explain;
    QPushButton *DCDC_CPLD_Version_explain;
    QPushButton *SN_explain;



    /***********************数据报表************************/
    QPushButton *PV_power_generation_Day_explain;
    QPushButton *PV_power_generation_Month_explain;
    QPushButton *PV_power_generation_Year_explain;
    QPushButton *PV_power_generation_Total_explain;
    QPushButton *Load_Discharge_Day_explain;
    QPushButton *Load_Discharge_Month_explain;
    QPushButton *Load_Discharge_Year_explain;
    QPushButton *Load_Discharge_Total_explain;
    QPushButton *Battery_Charge_Day_explain;
    QPushButton *Battery_Charge_Month_explain;
    QPushButton *Battery_Charge_Year_explain;
    QPushButton *Battery_Charge_Total_explain;
    QPushButton *Battery_Discharge_Day_explain;
    QPushButton *Battery_Discharge_Month_explain;
    QPushButton *Battery_Discharge_Year_explain;
    QPushButton *Battery_Discharge_Total_explain;
    QPushButton *Grid_Charge_Day_explain;
    QPushButton *Grid_Charge_Month_explain;
    QPushButton *Grid_Charge_Year_explain;
    QPushButton *Grid_Charge_Total_explain;
    QPushButton *Grid_Discharge_Day_explain;
    QPushButton *Grid_Discharge_Month_explain;
    QPushButton *Grid_Discharge_Year_explain;
    QPushButton *Grid_Discharge_Total_explain;

    /**********************历史记录*************************/
    QPushButton *Grade_explain;
    QPushButton *Grade2_explain;
    QPushButton *Grade3_explain;
    QPushButton *Grade4_explain;
    QPushButton *Grade5_explain;
    QPushButton *Grade6_explain;
    QPushButton *Grade7_explain;
    QPushButton *Grade8_explain;
    QPushButton *Grade9_explain;
    QPushButton *Grade10_explain;
    QPushButton *Grade11_explain;
    QPushButton *Grade12_explain;
    QPushButton *Grade13_explain;
    QPushButton *Grade14_explain;
    QPushButton *Grade15_explain;
    QPushButton *StartTime_explain;
    QPushButton *StartTime2_explain;
    QPushButton *StartTime3_explain;
    QPushButton *StartTime4_explain;
    QPushButton *StartTime5_explain;
    QPushButton *StartTime6_explain;
    QPushButton *StartTime7_explain;
    QPushButton *StartTime8_explain;
    QPushButton *StartTime9_explain;
    QPushButton *StartTime10_explain;
    QPushButton *StartTime11_explain;
    QPushButton *StartTime12_explain;
    QPushButton *StartTime13_explain;
    QPushButton *StartTime14_explain;
    QPushButton *StartTime15_explain;
    QPushButton *EndTime_explain;
    QPushButton *EndTime2_explain;
    QPushButton *EndTime3_explain;
    QPushButton *EndTime4_explain;
    QPushButton *EndTime5_explain;
    QPushButton *EndTime6_explain;
    QPushButton *EndTime7_explain;
    QPushButton *EndTime8_explain;
    QPushButton *EndTime9_explain;
    QPushButton *EndTime10_explain;
    QPushButton *EndTime11_explain;
    QPushButton *EndTime12_explain;
    QPushButton *EndTime13_explain;
    QPushButton *EndTime14_explain;
    QPushButton *EndTime15_explain;
    QPushButton *Describe_explain;
    QPushButton *Describe2_explain;
    QPushButton *Describe3_explain;
    QPushButton *Describe4_explain;
    QPushButton *Describe5_explain;
    QPushButton *Describe6_explain;
    QPushButton *Describe7_explain;
    QPushButton *Describe8_explain;
    QPushButton *Describe9_explain;
    QPushButton *Describe10_explain;
    QPushButton *Describe11_explain;
    QPushButton *Describe12_explain;
    QPushButton *Describe13_explain;
    QPushButton *Describe14_explain;
    QPushButton *Describe15_explain;


    /**********************操作日志*************************/
    QPushButton *ModificationTime_explain;
    QPushButton *ModificationTime2_explain;
    QPushButton *ModificationTime3_explain;
    QPushButton *ModificationTime4_explain;
    QPushButton *ModificationTime5_explain;
    QPushButton *ModificationTime6_explain;
    QPushButton *ModificationTime9_explain;
    QPushButton *ModificationTime11_explain;
    QPushButton *ModificationTime12_explain;
    QPushButton *EventRecord_explain;
    QPushButton *EventRecord2_explain;
    QPushButton *EventRecord3_explain;
    QPushButton *EventRecord4_explain;
    QPushButton *EventRecord5_explain;
    QPushButton *EventRecord6_explain;
    QPushButton *EventRecord9_explain;
    QPushButton *EventRecord11_explain;
    QPushButton *EventRecord12_explain;


    /*************************功能设置*************************/
    QPushButton *Battery_type_explain;  //电池类型说明
    QPushButton *BMS_Comm_type_explain; //电池通信方式说明
    QPushButton *Power_control_type_explain;    //功率控制类型说明
    QPushButton *EMS_Comm_type_explain; //EMS通讯方式说明
    QPushButton *Output_power_limit_explain;    //输出功率上限说明
    QPushButton *BAT_manufacturers_explain; //电池协议说明
    QPushButton *Charge_SOC_explain;    //充电SOC说明
    QPushButton *Disharge_SOC_explain;  //放电SOC说明
    QPushButton *DG_capacity_explain;   //柴发容量说明
    QPushButton *Energy_priority_explain;   //能量优先级说明
    QPushButton *Host_Address_explain;  //主机地址说明
    QPushButton *serial_port_1_explain; //串口1说明
    QPushButton *serial_port_2_explain; //串口2说明
    QPushButton *serial_port_3_explain; //串口3说明
    QPushButton *serial_port_4_explain; //串口4说明
    QPushButton *serial_port_5_explain; //串口5说明
    QPushButton *Can_port_1_explain;    //CAN1说明
    QPushButton *Can_port_2_explain;    //CAN2说明
    QPushButton *BatteryCapacityAlarm_explain;//电池容量告警

    QPushButton *ProtocolVersion_explain;   //协议版本说明
    QPushButton *UserPassPort_explain;  //用户密码说明
    QPushButton *RootPassport_explain;  //超级权限说明
    QPushButton *Language_explain;  //语言说明
    QPushButton *System_upgrade_explain;    //系统升级说明
    QPushButton *Sounds_explain;    //声音说明
    QPushButton *BmsComFaultTime_explain;
    QPushButton *EMSComFaultModel_explain;
    QPushButton *DG_ECP_explain;
    QPushButton *DG_FCP_explain;
    QPushButton *Grid_ECP_explain;
    QPushButton *Grid_FCP_explain;
    QPushButton *Grid_EDP_explain;
    QPushButton *Grid_FDP_explain;


    /***************************系统参数**************************/
    QPushButton *Change_rate_of_power_explain;  //功率变化率说明
    QPushButton *Grid_frequency_upper_limit_explain;  //电网频率变化范围上限说明
    QPushButton *Grid_frequency_lower_limit_explain;  //电网频率变化范围下限说明
    QPushButton *Vol_protection_upper_limit_explain;  //电压保护范围上限说明
    QPushButton *Vol_protection_lower_limit_explain;  //电压保护范围下限说明
    QPushButton *HVRT_enable_explain;  //高穿使能说明
    QPushButton *LVRT_enable_explain;  //低穿使能说明
    QPushButton *AFD_enable_explain;  //孤岛使能说明
    QPushButton *Insulation_detection_enable_explain;  //绝缘监测使能说明
    QPushButton *PrimaryFreq_enable_explain;  //一次调频使能说明
    QPushButton *Inertia_enable_explain;  //转动惯量使能说明
    QPushButton *Machine_type_explain;  //机器型号说明
    QPushButton *Machine_capacity_explain;  //机器容量说明
    QPushButton *Output_Fre_grade_explain;  //输出频率等级说明
    QPushButton *Output_vol_level_explain;  //输出电压等级说明
    QPushButton *Converter_side_vol_level_explain;  //逆变电压等级说明
    QPushButton *Output_reactive_power_mode_explain;  //输出无功方式说明
    QPushButton *Grid_recovery_time_explain;  //电网恢复并网时间说明
    QPushButton *Grid_connected_mode_of_Inv_explain;  //逆变器并网方式说明

    QPushButton *Pshedding_Freq_explain;  //过频降载说明
    QPushButton *QP_curve_explain;  //QP曲线说明
    QPushButton *CV_parallel_explain;  //恒压并机说明
    QPushButton *Module_Number_explain;  //模块数量说明
    QPushButton *Restore_factory_explain;  //恢复出厂说明
    QPushButton *BackupSetParameters_explain;
    QPushButton *RestoreBackupSetParameters_explain;
    QPushButton *Clear_Data_explain;  //清除数据说明
    QPushButton *Machine_Type_explain;  //机架说明
    QPushButton *Module_max_explain;  //最大模块数说明
    QPushButton *Module_min_explain;  //最小模块数说明
    QPushButton *Insulation_detection_enable_DCDC_explain;  //DCDC绝缘监测使能说明
    QPushButton *Insulation_detection_enable_DCAC_explain;  //DCAC绝缘监测使能说明
    QPushButton *Grid_expansion_explain;
    QPushButton *BatteryCurrentFeedbackType_explain;



    /***************************外设**************************/
    QPushButton *DI_1_Enable_explain;   //输入干接点1说明
    QPushButton *DI_1_NC_O_explain;
    QPushButton *DI_1_Action_explain;
    QPushButton *DI_2_Enable_explain;   //输入干接点2说明
    QPushButton *DI_2_NC_O_explain;
    QPushButton *DI_2_Action_explain;
    QPushButton *DI_3_Enable_explain;   //输入干接点3说明
    QPushButton *DI_3_NC_O_explain;
    QPushButton *DI_3_Action_explain;
    QPushButton *DI_4_Enable_explain;   //输入干接点4说明
    QPushButton *DI_4_NC_O_explain;
    QPushButton *DI_4_Action_explain;
    QPushButton *DI_5_Enable_explain;   //输入干接点5说明
    QPushButton *DI_5_NC_O_explain;
    QPushButton *DI_5_Action_explain;
    QPushButton *DI_6_Enable_explain;   //输入干接点6说明
    QPushButton *DI_6_NC_O_explain;
    QPushButton *DI_6_Action_explain;
    /*QPushButton *DO_1_Enable_explain;   //输出干接点1说明
    QPushButton *DO_1_NC_O_explain;
    QPushButton *DO_1_Action_explain;
    QPushButton *DO_2_Enable_explain;   //输出干接点2说明
    QPushButton *DO_2_NC_O_explain;
    QPushButton *DO_2_Action_explain;
    QPushButton *DO_3_Enable_explain;   //输出干接点3说明
    QPushButton *DO_3_NC_O_explain;
    QPushButton *DO_3_Action_explain;*/



    /***************************DCAC调试**************************/
    QPushButton *Debug_variable_1_explain;  //调试变量1
    QPushButton *Debug_variable_2_explain;  //调试变量2
    QPushButton *Debug_variable_3_explain;  //调试变量3
    QPushButton *Debug_variable_1_addr_explain; //调试地址变量1
    QPushButton *Debug_variable_2_addr_explain; //调试地址变量2
    QPushButton *Debug_variable_3_addr_explain; //调试地址变量3
    QPushButton *Debug_memery_var_1_explain;    //调试内存变量1
    QPushButton *Debug_memery_var_2_explain;    //调试内存变量2
    QPushButton *Debug_memery_var_3_explain;    //调试内存变量3
    QPushButton *Input_Vol_revise_explain;  //输入电压系数
    QPushButton *Input_Cur_revise_explain;  //输入电流系数
    QPushButton *Voltage_1_5_revise_explain;   //1.5V电压系数
    QPushButton *Bus_Vol_revise_explain;    //母线电压系数
    QPushButton *Grid_A_AB_Vol_revise_explain;  //电网A相电压系数
    QPushButton *Grid_B_BC_Vol_revise_explain;  //电网B相电压系数
    QPushButton *Grid_C_CA_Vol_revise_explain;  //电网C相电压系数
    QPushButton *Output_A_Cur_revise_explain; //输出A相电流系数
    QPushButton *Output_B_Cur_revise_explain;   //输出B相电流系数
    QPushButton *Output_C_Cur_revise_explain;   //输出C相电流系数
    QPushButton *INV_A_Vol_revise_explain;  //逆变A相电压系数
    QPushButton *INV_B_Vol_revise_explain;  //逆变B相电压系数
    QPushButton *INV_C_Vol_revise_explain;  //逆变C相电压系数
    QPushButton *INV_A_ind_Cur_revise_explain;  //逆变A相电感电流系数
    QPushButton *INV_B_ind_Cur_revise_explain;  //逆变B相电感电流系数
    QPushButton *INV_C_ind_Cur_revise_explain;  //逆变C相电感电流系数
    QPushButton *INV_On_off_flag_explain;   //开关机状态字
    QPushButton *Logic_state_explain;   //逻辑状态字
    QPushButton *INV_flag_explain;  //逆变状态字
    QPushButton *Grid_flag_explain; //电网状态字
    QPushButton *Grid_protect_flag_explain; //电网保护状态字
    QPushButton *PV_flag_explain; //电池电压状态字
    QPushButton *DC_bus_flag_explain;  //母线状态字
    QPushButton *INT_main_flag_explain; //中断状态字
    QPushButton *parallel_signal_explain;  //并机状态字
    QPushButton *Monitor_Order_explain;  //监控命令状态字
    QPushButton *Bat_Infor_explain;  //电池信息字
    QPushButton *Bat_State_explain;  //电池状态字



    /***************************DCDC调试**************************/
    QPushButton *DC_Debug_variable_1_explain;  //调试变量1
    QPushButton *DC_Debug_variable_2_explain;  //调试变量2
    QPushButton *DC_Debug_variable_3_explain;  //调试变量3
    QPushButton *Current_ID_explain;  //当前模块号
    QPushButton *DC_INT_main_flag_explain;  //中断状态字
    QPushButton *DC_DC_bus_flag_explain;  //母线状态字
    QPushButton *DC_PV_flag_explain;  //电池电压状态字
    QPushButton *DC_Debug_variable_1_addr_explain;  //调试地址变量1
    QPushButton *DC_Debug_variable_2_addr_explain;  //调试地址变量2
    QPushButton *DC_Debug_variable_3_addr_explain;  //调试地址变量3
    QPushButton *DC_INV_On_off_flag_explain;  //开关机状态字
    QPushButton *DCONV_logic_explain;  //逻辑状态字
    QPushButton *DC_parallel_signal_explain;  //并机状态字
    QPushButton *DC_Debug_memery_var_1_explain;    //调试内存变量1
    QPushButton *DC_Debug_memery_var_2_explain;    //调试内存变量2
    QPushButton *DC_Debug_memery_var_3_explain;    //调试内存变量3
    QPushButton *DC_Monitor_Order_explain;  //监控命令状态字
    QPushButton *DC_Bat_Infor_explain;  //电池信息字
    QPushButton *DC_Bat_State_explain;  //电池状态字



private:

    void LoadLanguageInit();    //初始化语言
    void MemoryAllocation();    //初始化内存空间
    void UIPageInit();          //初始化界面

    void FirstPage();           //触摸点击
    void RunStatePage();        //运行状态页
    void SystemSettingPage();   //系统设置界面初始化
    void LCDSetting();          //LCD标签初始化和定时器设置
    void RecordPage();          //记录页面初始化
    void LinkRelationship();    //函数关联


    void MPS_Data_Tab();        //MPS数据表初始化
    void ModuleState_Tab();     //MPS状态表初始化
    void RTAlarm();             //告警信息绘表
    void UserParam_tab();       //一般设置表初始化
    void DCDCParam_tab();       //DCDC表初始化
    void BatterySet_tab();      //电池设置表初始化_锂电
    void BatterySet_Lead_tab(); //电池设置表初始化_铅酸
    void RunTimeSet_tab();      //自动运行时间表初始化
    void Information_tbnt_released();//系统信息槽
    void Data_Report();         //数据报表
    void History();             //历史记录
    void OperationLog();        //操作日志
    void WorkingModeInit();     //新界面工作模式初始化
    void Account_Change( uint8_t Account_Type );//切换登录信息
    void ReloadLabel();         //切换语言重新加载Lable
    void DisabldAllBasisButton();//失能所有基础控件
    void DisableTableButton(QTableWidget *myTable);//失能表格的控件
    void EnableTableButton(QTableWidget *myTable,int rowCount,int columnCount);//使能表格控件



    void MPS_Data(QTableWidget *myTable);//MPS数据 绘制button
    void PV_Data(QTableWidget *myTable);//PV数据 绘制button
    void Grid_Data(QTableWidget *myTable);//电网数据 绘制button
    void Load_Data(QTableWidget *myTable);//负载数据 绘制button
    void MPSState(QTableWidget *myTable);  //MPS状态 绘制button
    void DC_AC_Parameter_tab(QTableWidget *myTable);    //DC/AC参数页说明
    void DCDC_Paramter_tab(QTableWidget *myTable);       //DCDC参数页说明
    void Battery_Setup_Tab(QTableWidget *myTable);      //电池设置页说明_锂电
    void Battery_Setup_Lead_Tab(QTableWidget *myTable); //电池设置页说明_铅酸
    void PCS_Alarm_information_table();  //PCS故障信息表 绘制
    void AutoOperation(QTableWidget *myTable);//自动运行 绘制button
    void SystemMessages(QTableWidget *myTable);//系统信息 绘制button
    void DataReportMessages(QTableWidget *myTable);//数据报表 绘制button
    void HistoryRecord(QTableWidget *myTable); //历史记录   绘制button
    void OperationLog_tab(QTableWidget *myTable);//操作日志 绘制button
    void FunctionSet(QTableWidget *myTable);    //功能设置页说明
    void SystemParameter(QTableWidget *myTable);//系统参数页说明
    void ExternalDevice(QTableWidget *myTable);//外设页说明

    void SetControlToTable();//设置控件到表格
    void SetDCACToTable(QTableWidget *myTable);//设置DCAC控件到表格
    void SetDCDCToTable(QTableWidget *myTable);//设置DCDC控件到表格
    void SetLithiumToTable(QTableWidget *myTable);//设置锂电池页控件到表格
    void SetLead_acidToTable(QTableWidget *myTable);//设置铅酸电池页控件到表格
    void SetMixedTime_TabToTable(QTableWidget *myTable);//设置混合模式页控件到表格
    void SetAdvancedSetup1ToTable(QTableWidget *myTable);//设置高级设置页1控件到表格
    void SetAdvancedSetup2ToTable(QTableWidget *myTable);//设置高级设置页2控件到表格
    void SetAdvancedSetup3ToTable(QTableWidget *myTable);//设置高级设置页3控件到表格
    void Device_TabToTable(QTableWidget *myTable);//设置高级设置外设页控件到表格
    void DCAC_Debugg(QTableWidget *myTable); //设置高级设置DCAC调试页控件到表格
    void DCDC_Debugg(QTableWidget *myTable); //设置高级设置DCDC调试页控件到表格



private slots:
    void on_UI_MenuBtn_clicked();//转到槽

    void onTimerOut();  //时间显示
    void My_menuAction(int Index);
    void WordingMode(int Index);//系统模式
    void ModeSwitchExplain(int Index);//模式切换说明
    void Home_Click(int Index);//主页点击
    void Return(int Index);//返回退出键
    void combox_Account_change(int Index);//下拉框选择登录用户

    void on_RTD_Converter_clicked();

    void BatteryData_clicked(int nid);//电池数据
    void SystemlnformationVer_clicked(int nid);//系统信息相关按钮的说明


    void on_RTD_module_1_clicked();

    void ChangeLanguage_btn_clicked();//切换语言
    void UpgradeInterface_clicked();//升级界面

    void on_RTD_DC_clicked();

    void on_RTD_Grid_clicked();

    void on_RTD_Load_clicked();

    void on_RTD_module_2_clicked();

    void on_Subtract_Y_clicked();

    void on_Add_Y_clicked();

    void on_Subtract_M_clicked();

    void on_Add_M_clicked();

    void on_Subtract_D_clicked();

    void on_Add_D_clicked();

    void on_OutPut_historyFailuer_clicked();

    void on_Output_OperationLog_clicked();

    void on_CoulombmeterReport_btn_clicked();

    void on_Eject_btn_clicked();

    void on_RTS_module_1_clicked();

    void on_RTS_module_2_clicked();




    void on_Switch_on_Inv_clicked();

    void on_Switch_off_Inv_clicked();

    void on_Switch_on_clicked();

    void on_Switch_off_clicked();

    void on_search_btn_clicked();

    void on_TimeSeting_btn_clicked();

    void on_Converter_State_btn_clicked();

    void on_DCDC_Module_State_btn_clicked();

    void on_ModeInfo_bt_clicked();

    void on_SetNext_bt_clicked();

    void on_SetPrevious_bt_clicked();

    void on_IntroPrevious_bt_clicked();

    void on_IntroNext_bt_clicked();

    void on_ToLogin_bt_clicked();

    void on_Cancel_bt_clicked();

    void on_Advanced_bt_clicked();

    void on_InfoNext_bt_clicked();

    void on_InfoPrevious_bt_clicked();

    void on_pushButton_16_clicked();

    void on_Details_bt_clicked();

    void on_Information_btn_clicked();

    void on_PortNum_bt_clicked();

    void on_Bengin_bt_clicked();

    void on_comboBox_currentIndexChanged(int index);

    void on_radio_static_2_clicked();

    void on_radio_dhcp_2_clicked();

    void on_PowerOn_bt_clicked();

    void on_PowerOff_bt_clicked();

private:
    Ui::MyWidget *ui;
    QStringList Mode_Str;//模式文本显示列表
    QStringList Mode_title_Str;//当前页面文本显示列表
    QList<QTableWidget*>  new_ui_TabList;
    QList<QPushButton*>  *MixedModeButtonList;
    QButtonGroup *pButton_BatteryData;
    QButtonGroup *Menu_Group;
    QButtonGroup *SystemMode_Group;
    QButtonGroup *ExitReturn_Group;
    QButtonGroup *ModeSwitch_Group;
    QButtonGroup *HomeClick_Group;
    int CurrentCheckMode;//当前模式
    int CurrentCheckModeExplain;//当前模式说明
    int System_Current_Page; //系统当前页
    int Advanced_Current_Page;//高级设置当前页
    int ModeIntr_Current_Page;//模式介绍页当前页码
    unsigned char Account_Type;//当前登录角色 -- 上电默认未登录

    QTimer *timer;
    QTimer *Update_RTData_timer;
    bool IPShow;//IP地址显示标志位
    QTranslator *translator;    //翻译
    int LanguageType;   //当前语言



};
#endif // MYWIDGET_H
