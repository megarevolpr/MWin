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
#include <fcntl.h>
#include <stdio.h>
#include <QMenu>
#include <QAction>
#include <QObject>
#include <QMessageBox>
#include <QTimer>
#include <QButtonGroup>
#include <QTranslator>

#include "Menu.h"
#include "Specification/Specification.h"

namespace Ui {
class MyWidget;
}

class MyWidget : public QWidget
{
    Q_OBJECT

public:
    explicit MyWidget(QWidget *parent = nullptr);
    ~MyWidget();

    Menu *m_menu;
    QPushButton *AdvancedSetup_btn;//高级设置入口
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

    Specification *MPS_vol_AB;
    Specification *MPS_vol_BC = nullptr;
    Specification *MPS_vol_CA;
    Specification *MPS_cur_A;
    Specification *MPS_cur_B;
    Specification *MPS_cur_C;
    Specification *MPS_IGBT_T;
    Specification *MPS_Env_T;
    Specification *MPS_Leakage_cur;
    Specification *PV_vol;
    Specification *PV_cur;
    Specification *PV_power;
    Specification *Batter_vol;
    Specification *Batter_cur;
    Specification *Batter_power;
    Specification *Bus_vol;
    Specification *Bus_cur;

    Specification *PV_vol_H;
    Specification *PV_cur_H;
    Specification *PV_power_H;
    Specification *PV_vol_L;
    Specification *PV_cur_L;
    Specification *PV_power_L;
    Specification *PositiveInuslation;
    Specification *Bus_H_vol_add;
    Specification *Bus_H_vol_reduce;
    Specification *Bus_L_vol_add;
    Specification *Bus_L_vol_reduce;
    Specification *PV_IGBT_T;
    Specification *NegativeInuslation;
    Specification *Leakage_cur;

    Specification *Grid_vol_AB;
    Specification *Grid_vol_BC;
    Specification *Grid_vol_CA;
    Specification *Grid_cur_A;
    Specification *Grid_cur_B;
    Specification *Grid_cur_C;
    Specification *Grid_active_power;
    Specification *Grid_reactive_power;
    Specification *Grid_apparent_power;
    Specification *Grid_power_factor;
    Specification *Grid_Frequency;

    Specification *Load_vol_AB;
    Specification *Load_vol_BC;
    Specification *Load_vol_CA;
    Specification *Load_cur_A;
    Specification *Load_cur_B;
    Specification *Load_cur_C;
    Specification *Load_active_power;
    Specification *Load_reactive_power;
    Specification *Load_apparent_power;
    Specification *Load_power_factor;
    Specification *Load_Frequency;
    /******************************MPS状态**********************************/
    QPushButton *DC_input_Bre_explain;
    QPushButton *DC_Con_explain;
    QPushButton *M_Bypass_Bre_explain;
    QPushButton *Output_Bre_explain;
    QPushButton *Output_Con_explain;
    QPushButton *Grid_Bre_explain;
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

    Specification *DC_input_Bre;
    Specification *DC_Con;
    Specification *M_Bypass_Bre;
    Specification *Output_Bre;
    Specification *Output_Con;
    Specification *Grid_Bre;
    Specification *DO1;
    Specification *DO2;
    Specification *DO3;

    Specification *DCAC_Conver_avail;
    Specification *DC_Soft_Start;
    Specification *Converter_Status;
    Specification *Reactive_P_Reg;
    Specification *LVRT;
    Specification *DI1;
    Specification *DI2;
    Specification *DI3;
    Specification *DI4;
    Specification *DI5;
    Specification *DI6;

    Specification *Contator_Sta_Boost;
    Specification *Contator_Sta_Buck;
    Specification *Run_mode;
    Specification *DCDC_Converter_ava;
    Specification *Soft_Start_Sta_Boost;
    Specification *Soft_Start_Sta_Buck;
    Specification *Converter_Status_V;
    Specification *ModeLock;

    /***************************DC/AC参数****************************/
    QPushButton *Grid_connected_mode_explain;//并网方式说明
    QPushButton *Constant_power_explain;     //功率说明
    QPushButton *Charging_and_discharging_explain;  //充放电说明
    QPushButton *Work_mode_explain;  //工作模式说明
    QPushButton *Output_power_factor_explain;    //输出功率因素说明
    QPushButton *Output_reactive_power_explain;  //输出无功功率说明
    QPushButton *Constant_current_explain;  //恒流说明
    QPushButton *Constant_voltage_explain; //恒压说明
    QPushButton *Control_mode_explain;  //控制模式说明
    QPushButton *Machine_number_explain;    //设备号说明
    QPushButton *Parallel_explain;  //并机说明
    QPushButton *Unbalance_power_enable_explain;    //功率不平衡使能说明


    Specification *Grid_connected_mode;
    Specification *Constant_power;
    Specification *Charging_and_discharging;
    Specification *Work_mode;
    Specification *Output_power_factor;
    Specification *Output_reactive_power;
    Specification *Constant_current;
    Specification *Constant_voltage;
    Specification *Control_mode;
    Specification *Machine_number;
    Specification *Parallel;
    Specification *Unbalance_power_enable;
    /***************************DC参数****************************/
    QPushButton *Work_parttern_explain; //DCDC工作模式说明
    QPushButton *Boost_or_Buck_explain; //升/降压说明
    QPushButton *Bat_Charging_or_discharging_Model_explain; //电池充放电模式说明
    QPushButton *DCDC_Capacity_explain; //DCDC容量说明
    QPushButton *Battery_position_explain; //电池位置说明
    QPushButton *Voltage_level_explain; //电压等级说明
    QPushButton *Current_value_explain; //电流值说明


    Specification *Work_parttern;
    Specification *Boost_or_Buck;
    Specification *Bat_Charging_or_discharging_Model;
    Specification *DCDC_Capacity;
    Specification *Battery_position;
    Specification *Voltage_level;
    Specification *Current_value;

    /***************************电池设置****************************/
    QPushButton *DOD_OnGrid_explain;    //并网DOD说明
    QPushButton *DOD_OffGrid_explain;   //离网DOD说明
    QPushButton *Charge_Volt_Upper_Limit_explain;   //充电电压上限说明
    QPushButton *Charge_Volt_upper_Limit_delta_explain; //充电电压上限回差说明
    QPushButton *Disc_Volt_lower_Limit_explain;  //放电电压限制说明
    QPushButton *Discharge_Volt_upper_Limit_delta_explain; //放电电压下限回差说明
    QPushButton *Charge_Current_Limit_explain;  //充电电流限制说明
    QPushButton *Discharge_Current_Limit_explain;  //放电电流限制说明
//    QPushButton *Floating_charge_explain;   //浮充电压说明
//    QPushButton *Equalized_charge_explain;   //均充电压说明
    QPushButton *Gen_turn_off_SOC_explain;    //柴发关闭SOC说明
    QPushButton *Gen_turn_on_SOC_explain;     //柴发开启SOC说明


    Specification *DOD_OnGrid;
    Specification *DOD_OffGrid;
    Specification *Charge_Volt_Upper_Limit;
    Specification *Charge_Volt_upper_Limit_delta;
    Specification *Disc_Volt_lower_Limit;
    Specification *Discharge_Volt_upper_Limit_delta;
    Specification *Charge_Current_Limit;
    Specification *Discharge_Current_Limit;
//    Specification *Floating_charge;
//    Specification *Equalized_charge;
    Specification *Gen_turn_off_SOC;
    Specification *Gen_turn_on_SOC;

    /***************************自动运行**************************/
    //选择
    QPushButton *Check1_explain,*Check2_explain,*Check3_explain,*Check4_explain,*Check5_explain;
    QPushButton *Check6_explain,*Check7_explain,*Check8_explain,*Check9_explain,*Check10_explain;
    QPushButton *Check11_explain,*Check12_explain,*Check13_explain,*Check14_explain,*Check15_explain;
    QPushButton *Check16_explain,*Check17_explain,*Check18_explain,*Check19_explain,*Check20_explain;
    Specification *Check1,*Check2,*Check3,*Check4,*Check5,*Check6,*Check7,*Check8,*Check9,*Check10;
    Specification *Check11,*Check12,*Check13,*Check14,*Check15,*Check16,*Check17,*Check18,*Check19,*Check20;
    //开始时间
    QPushButton *Start_T1_explain,*Start_T2_explain,*Start_T3_explain,*Start_T4_explain,*Start_T5_explain;
    QPushButton *Start_T6_explain,*Start_T7_explain,*Start_T8_explain,*Start_T9_explain,*Start_T10_explain;
    QPushButton *Start_T11_explain,*Start_T12_explain,*Start_T13_explain,*Start_T14_explain,*Start_T15_explain;
    QPushButton *Start_T16_explain,*Start_T17_explain,*Start_T18_explain,*Start_T19_explain,*Start_T20_explain;
    Specification *Start_T1,*Start_T2,*Start_T3,*Start_T4,*Start_T5,*Start_T6,*Start_T7,*Start_T8,*Start_T9,*Start_T10;
    Specification *Start_T11,*Start_T12,*Start_T13,*Start_T14,*Start_T15,*Start_T16,*Start_T17,*Start_T18,*Start_T19,*Start_T20;
    //结束时间
    QPushButton *End_T1_explain,*End_T2_explain,*End_T3_explain,*End_T4_explain,*End_T5_explain;
    QPushButton *End_T6_explain,*End_T7_explain,*End_T8_explain,*End_T9_explain,*End_T10_explain;
    QPushButton *End_T11_explain,*End_T12_explain,*End_T13_explain,*End_T14_explain,*End_T15_explain;
    QPushButton *End_T16_explain,*End_T17_explain,*End_T18_explain,*End_T19_explain,*End_T20_explain;
    Specification *End_T1,*End_T2,*End_T3,*End_T4,*End_T5,*End_T6,*End_T7,*End_T8,*End_T9,*End_T10;
    Specification *End_T11,*End_T12,*End_T13,*End_T14,*End_T15,*End_T16,*End_T17,*End_T18,*End_T19,*End_T20;
    //状态
    QPushButton *State1_explain,*State2_explain,*State3_explain,*State4_explain,*State5_explain;
    QPushButton *State6_explain,*State7_explain,*State8_explain,*State9_explain,*State10_explain;
    QPushButton *State11_explain,*State12_explain,*State13_explain,*State14_explain,*State15_explain;
    QPushButton *State16_explain,*State17_explain,*State18_explain,*State19_explain,*State20_explain;
    Specification *State1,*State2,*State3,*State4,*State5,*State6,*State7,*State8,*State9,*State10;
    Specification *State11,*State12,*State13,*State14,*State15,*State16,*State17,*State18,*State19,*State20;
    //功率
    QPushButton *Power1_explain,*Power2_explain,*Power3_explain,*Power4_explain,*Power5_explain;
    QPushButton *Power6_explain,*Power7_explain,*Power8_explain,*Power9_explain,*Power10_explain;
    QPushButton *Power11_explain,*Power12_explain,*Power13_explain,*Power14_explain,*Power15_explain;
    QPushButton *Power16_explain,*Power17_explain,*Power18_explain,*Power19_explain,*Power20_explain;
    Specification *Power1,*Power2,*Power3,*Power4,*Power5,*Power6,*Power7,*Power8,*Power9,*Power10;
    Specification *Power11,*Power12,*Power13,*Power14,*Power15,*Power16,*Power17,*Power18,*Power19,*Power20;

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


    Specification *MonitoringVersion;
    Specification *DCAC_SysProtocol_Version;
    Specification *DCAC_ConverterVersion;
    Specification *DCAC_CPLD_Version;
    Specification *DCDC_SysProtocol_Version;
    Specification *DCDC_ConverterVersion;
    Specification *DCDC_CPLD_Version;
    Specification *SN;

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

    Specification *PV_power_generation_Day;
    Specification *PV_power_generation_Month;
    Specification *PV_power_generation_Year;
    Specification *PV_power_generation_Total;
    Specification *Load_Discharge_Day;
    Specification *Load_Discharge_Month;
    Specification *Load_Discharge_Year;
    Specification *Load_Discharge_Total;
    Specification *Battery_Charge_Day;
    Specification *Battery_Charge_Month;
    Specification *Battery_Charge_Year;
    Specification *Battery_Charge_Total;
    Specification *Battery_Discharge_Day;
    Specification *Battery_Discharge_Month;
    Specification *Battery_Discharge_Year;
    Specification *Battery_Discharge_Total;
    Specification *Grid_Charge_Day;
    Specification *Grid_Charge_Month;
    Specification *Grid_Charge_Year;
    Specification *Grid_Charge_Total;
    Specification *Grid_Discharge_Day;
    Specification *Grid_Discharge_Month;
    Specification *Grid_Discharge_Year;
    Specification *Grid_Discharge_Total;

    /**********************历史记录*************************/
    QPushButton *Grade_explain;
    QPushButton *Grade2_explain;
    QPushButton *Grade3_explain;
    QPushButton *Grade4_explain;
    QPushButton *Grade5_explain;
    QPushButton *Grade6_explain;
    QPushButton *Grade7_explain;
    QPushButton *Grade8_explain;
    QPushButton *StartTime_explain;
    QPushButton *StartTime2_explain;
    QPushButton *StartTime3_explain;
    QPushButton *StartTime4_explain;
    QPushButton *StartTime5_explain;
    QPushButton *StartTime6_explain;
    QPushButton *StartTime7_explain;
    QPushButton *StartTime8_explain;
    QPushButton *EndTime_explain;
    QPushButton *EndTime2_explain;
    QPushButton *EndTime3_explain;
    QPushButton *EndTime4_explain;
    QPushButton *EndTime5_explain;
    QPushButton *EndTime6_explain;
    QPushButton *EndTime7_explain;
    QPushButton *EndTime8_explain;
    QPushButton *Describe_explain;
    QPushButton *Describe2_explain;
    QPushButton *Describe3_explain;
    QPushButton *Describe4_explain;
    QPushButton *Describe5_explain;
    QPushButton *Describe6_explain;
    QPushButton *Describe7_explain;
    QPushButton *Describe8_explain;
    Specification *Grade;
    Specification *Grade2;
    Specification *Grade3;
    Specification *Grade4;
    Specification *Grade5;
    Specification *Grade6;
    Specification *Grade7;
    Specification *Grade8;
    Specification *StartTime;
    Specification *StartTime2;
    Specification *StartTime3;
    Specification *StartTime4;
    Specification *StartTime5;
    Specification *StartTime6;
    Specification *StartTime7;
    Specification *StartTime8;
    Specification *EndTime;
    Specification *EndTime2;
    Specification *EndTime3;
    Specification *EndTime4;
    Specification *EndTime5;
    Specification *EndTime6;
    Specification *EndTime7;
    Specification *EndTime8;
    Specification *Describe;
    Specification *Describe2;
    Specification *Describe3;
    Specification *Describe4;
    Specification *Describe5;
    Specification *Describe6;
    Specification *Describe7;
    Specification *Describe8;

    /**********************操作日志*************************/
    QPushButton *ModificationTime_explain;
    QPushButton *ModificationTime2_explain;
    QPushButton *ModificationTime3_explain;
    QPushButton *ModificationTime4_explain;
    QPushButton *ModificationTime5_explain;
    QPushButton *ModificationTime6_explain;
    QPushButton *ModificationTime7_explain;
    QPushButton *ModificationTime8_explain;
    QPushButton *ModificationTime9_explain;
    QPushButton *ModificationTime10_explain;
    QPushButton *ModificationTime11_explain;
    QPushButton *ModificationTime12_explain;
    QPushButton *EventRecord_explain;
    QPushButton *EventRecord2_explain;
    QPushButton *EventRecord3_explain;
    QPushButton *EventRecord4_explain;
    QPushButton *EventRecord5_explain;
    QPushButton *EventRecord6_explain;
    QPushButton *EventRecord7_explain;
    QPushButton *EventRecord8_explain;
    QPushButton *EventRecord9_explain;
    QPushButton *EventRecord10_explain;
    QPushButton *EventRecord11_explain;
    QPushButton *EventRecord12_explain;

    Specification *ModificationTime;
    Specification *ModificationTime2;
    Specification *ModificationTime3;
    Specification *ModificationTime4;
    Specification *ModificationTime5;
    Specification *ModificationTime6;
    Specification *ModificationTime7;
    Specification *ModificationTime8;
    Specification *ModificationTime9;
    Specification *ModificationTime10;
    Specification *ModificationTime11;
    Specification *ModificationTime12;
    Specification *EventRecord;
    Specification *EventRecord2;
    Specification *EventRecord3;
    Specification *EventRecord4;
    Specification *EventRecord5;
    Specification *EventRecord6;
    Specification *EventRecord7;
    Specification *EventRecord8;
    Specification *EventRecord9;
    Specification *EventRecord10;
    Specification *EventRecord11;
    Specification *EventRecord12;

    /*************************功能设置*************************/
    QPushButton *Battery_type_explain;  //电池类型说明
    Specification *Battery_type;

    QPushButton *BMS_Comm_type_explain; //电池通信方式说明
    Specification *BMS_Comm_type;

    QPushButton *Power_control_type_explain;    //功率控制类型说明
    Specification *Power_control_type;

    QPushButton *EMS_Comm_type_explain; //EMS通讯方式说明
    Specification *EMS_Comm_type;

    QPushButton *Output_power_limit_explain;    //输出功率上限说明
    Specification *Output_power_limit;

    QPushButton *BAT_manufacturers_explain; //电池厂家说明
    Specification *BAT_manufacturers;

    QPushButton *Charge_SOC_explain;    //充电SOC说明
    Specification *Charge_SOC;

    QPushButton *Disharge_SOC_explain;  //放电SOC说明
    Specification *Disharge_SOC;

    QPushButton *DG_capacity_explain;   //柴发容量说明
    Specification *DG_capacity;

    QPushButton *Energy_priority_explain;   //能量优先级说明
    Specification *Energy_priority;

    QPushButton *Host_Address_explain;  //主机地址说明
    Specification *Host_Address;

    QPushButton *serial_port_1_explain; //串口1说明
    Specification *serial_port_1;

    QPushButton *serial_port_2_explain; //串口2说明
    Specification *serial_port_2;

    QPushButton *serial_port_3_explain; //串口3说明
    Specification *serial_port_3;

    QPushButton *serial_port_4_explain; //串口4说明
    Specification *serial_port_4;

    QPushButton *serial_port_5_explain; //串口5说明
    Specification *serial_port_5;

    QPushButton *Can_port_1_explain;    //CAN1说明
    Specification *Can_port_1;

    QPushButton *Can_port_2_explain;    //CAN2说明
    Specification *Can_port_2;

    QPushButton *Relese_Charge_mark_explain;    //释放充电标志说明
    Specification *Relese_Charge_mark;

    QPushButton *ForceCharge_start_explain; //强充开启说明
    Specification *ForceCharge_start;

    QPushButton *ForceCharge_top_explain;   // 强充结束说明
    Specification *ForceCharge_top;

    QPushButton *ProtocolVersion_explain;   //协议版本说明
    Specification *ProtocolVersion;

    QPushButton *UserPassPort_explain;  //用户密码说明
    Specification *UserPassPort;

    QPushButton *RootPassport_explain;  //超级权限说明
    Specification *RootPassport;

    QPushButton *Language_explain;  //语言说明
    Specification *Language;

    QPushButton *System_upgrade_explain;    //系统升级说明
    Specification *System_upgrade;

    QPushButton *Sounds_explain;    //声音说明
    Specification *Sounds;

    QPushButton *DryContact_explain;    //干接点说明
    Specification *DryContact;

    /***************************系统参数**************************/
    QPushButton *Change_rate_of_power_explain;  //功率变化率说明
    Specification *Change_rate_of_power;

    QPushButton *Grid_frequency_upper_limit_explain;  //电网频率变化范围上限说明
    Specification *Grid_frequency_upper_limit;

    QPushButton *Grid_frequency_lower_limit_explain;  //电网频率变化范围下限说明
    Specification *Grid_frequency_lower_limit;

    QPushButton *Vol_protection_upper_limit_explain;  //电压保护范围上限说明
    Specification *Vol_protection_upper_limit;

    QPushButton *Vol_protection_lower_limit_explain;  //电压保护范围下限说明
    Specification *Vol_protection_lower_limit;

    QPushButton *HVRT_enable_explain;  //高穿使能说明
    Specification *HVRT_enable;

    QPushButton *LVRT_enable_explain;  //低穿使能说明
    Specification *LVRT_enable;

    QPushButton *AFD_enable_explain;  //孤岛使能说明
    Specification *AFD_enable;

    QPushButton *Insulation_detection_enable_explain;  //绝缘监测使能说明
    Specification *Insulation_detection_enable;

    QPushButton *PrimaryFreq_enable_explain;  //一次调频使能说明
    Specification *PrimaryFreq_enable;

    QPushButton *Inertia_enable_explain;  //转动惯量使能说明
    Specification *Inertia_enable;

    QPushButton *Load_priority_explain;  //负载优先说明
    Specification *Load_priority;

    QPushButton *Machine_type_explain;  //机器型号说明
    Specification *Machine_type;

    QPushButton *Machine_capacity_explain;  //机器容量说明
    Specification *Machine_capacity;

    QPushButton *Output_Fre_grade_explain;  //输出频率等级说明
    Specification *Output_Fre_grade;

    QPushButton *Output_vol_level_explain;  //输出电压等级说明
    Specification *Output_vol_level;

    QPushButton *Converter_side_vol_level_explain;  //逆变电压等级说明
    Specification *Converter_side_vol_level;

    QPushButton *Output_reactive_power_mode_explain;  //输出无功方式说明
    Specification *Output_reactive_power_mode;

    QPushButton *Grid_recovery_scheduling_explain;  //电网恢复调度开机说明
    Specification *Grid_recovery_scheduling;

    QPushButton *Grid_recovery_time_explain;  //电网恢复并网时间说明
    Specification *Grid_recovery_time;

    QPushButton *Grid_connected_mode_of_Inv_explain;  //逆变器并网方式说明
    Specification *Grid_connected_mode_of_Inv;

    QPushButton *Pshedding_Freq_explain;  //过频降载说明
    Specification *Pshedding_Freq;

    QPushButton *QP_curve_explain;  //QP曲线说明
    Specification *QP_curve;

    QPushButton *CV_parallel_explain;  //恒压并机说明
    Specification *CV_parallel;

    QPushButton *Module_Number_explain;  //模块数量说明
    Specification *Module_Number;

    QPushButton *Restore_factory_explain;  //恢复出厂说明
    Specification *Restore_factory;

    QPushButton *Clear_Data_explain;  //清除数据说明
    Specification *Clear_Data;

    QPushButton *Machine_Type_explain;  //机架说明
    Specification *Machine_Type;

    QPushButton *Module_max_explain;  //最大模块数说明
    Specification *Module_max;

    QPushButton *Module_min_explain;  //最小模块数说明
    Specification *Module_min;

    QPushButton *Insulation_detection_enable_DCDC_explain;  //DCDC绝缘监测使能说明
    Specification *Insulation_detection_enable_DCDC;

    /***************************外设**************************/
    QPushButton *DI_1_Enable_explain;   //输入干接点1说明
    Specification *DI_1_Enable;
    QPushButton *DI_1_NC_O_explain;
    Specification *DI_1_NC_O;
    QPushButton *DI_1_Action_explain;
    Specification *DI_1_Action;

    QPushButton *DI_2_Enable_explain;   //输入干接点2说明
    Specification *DI_2_Enable;
    QPushButton *DI_2_NC_O_explain;
    Specification *DI_2_NC_O;
    QPushButton *DI_2_Action_explain;
    Specification *DI_2_Action;

    QPushButton *DI_3_Enable_explain;   //输入干接点3说明
    Specification *DI_3_Enable;
    QPushButton *DI_3_NC_O_explain;
    Specification *DI_3_NC_O;
    QPushButton *DI_3_Action_explain;
    Specification *DI_3_Action;

    QPushButton *DI_4_Enable_explain;   //输入干接点4说明
    Specification *DI_4_Enable;
    QPushButton *DI_4_NC_O_explain;
    Specification *DI_4_NC_O;
    QPushButton *DI_4_Action_explain;
    Specification *DI_4_Action;

    QPushButton *DI_5_Enable_explain;   //输入干接点5说明
    Specification *DI_5_Enable;
    QPushButton *DI_5_NC_O_explain;
    Specification *DI_5_NC_O;
    QPushButton *DI_5_Action_explain;
    Specification *DI_5_Action;

    QPushButton *DI_6_Enable_explain;   //输入干接点6说明
    Specification *DI_6_Enable;
    QPushButton *DI_6_NC_O_explain;
    Specification *DI_6_NC_O;
    QPushButton *DI_6_Action_explain;
    Specification *DI_6_Action;

    QPushButton *DO_1_Enable_explain;   //输出干接点1说明
    Specification *DO_1_Enable;
    QPushButton *DO_1_NC_O_explain;
    Specification *DO_1_NC_O;
    QPushButton *DO_1_Action_explain;
    Specification *DO_1_Action;

    QPushButton *DO_2_Enable_explain;   //输出干接点2说明
    Specification *DO_2_Enable;
    QPushButton *DO_2_NC_O_explain;
    Specification *DO_2_NC_O;
    QPushButton *DO_2_Action_explain;
    Specification *DO_2_Action;

    QPushButton *DO_3_Enable_explain;   //输出干接点3说明
    Specification *DO_3_Enable;
    QPushButton *DO_3_NC_O_explain;
    Specification *DO_3_NC_O;
    QPushButton *DO_3_Action_explain;
    Specification *DO_3_Action;

    /***************************DCAC调试**************************/
    QPushButton *Debug_variable_1_explain;  //调试变量1
    Specification *Debug_variable_1;


    QPushButton *Debug_variable_2_explain;  //调试变量2
    Specification *Debug_variable_2;

    QPushButton *Debug_variable_3_explain;  //调试变量3
    Specification *Debug_variable_3;

    QPushButton *Debug_variable_1_addr_explain; //调试地址变量1
    Specification *Debug_variable_1_addr;

    QPushButton *Debug_variable_2_addr_explain; //调试地址变量2
    Specification *Debug_variable_2_addr;

    QPushButton *Debug_variable_3_addr_explain; //调试地址变量3
    Specification *Debug_variable_3_addr;

    QPushButton *Debug_memery_var_1_explain;    //调试内存变量1
    Specification *Debug_memery_var_1;

    QPushButton *Debug_memery_var_2_explain;    //调试内存变量2
    Specification *Debug_memery_var_2;

    QPushButton *Debug_memery_var_3_explain;    //调试内存变量3
    Specification *Debug_memery_var_3;

    QPushButton *Input_Vol_revise_explain;  //输入电压系数
    Specification *Input_Vol_revise;

    QPushButton *Input_Cur_revise_explain;  //输入电流系数
    Specification *Input_Cur_revise;

    QPushButton *Voltage_1_5_revise_explain;   //1.5V电压系数
    Specification *Voltage_1_5_revise;

    QPushButton *Bus_Vol_revise_explain;    //母线电压系数
    Specification *Bus_Vol_revise;

    QPushButton *Grid_A_AB_Vol_revise_explain;  //电网A相电压系数
    Specification *Grid_A_AB_Vol_revise;

    QPushButton *Grid_B_BC_Vol_revise_explain;  //电网B相电压系数
    Specification *Grid_B_BC_Vol_revise;

    QPushButton *Grid_C_CA_Vol_revise_explain;  //电网C相电压系数
    Specification *Grid_C_CA_Vol_revise;

    QPushButton *Output_A_Cur_revise_explain; //输出A相电流系数
    Specification *Output_A_Cur_revise;

    QPushButton *Output_B_Cur_revise_explain;   //输出B相电流系数
    Specification *Output_B_Cur_revise;

    QPushButton *Output_C_Cur_revise_explain;   //输出C相电流系数
    Specification *Output_C_Cur_revise;

    QPushButton *INV_A_Vol_revise_explain;  //逆变A相电压系数
    Specification *INV_A_Vol_revise;

    QPushButton *INV_B_Vol_revise_explain;  //逆变B相电压系数
    Specification *INV_B_Vol_revise;

    QPushButton *INV_C_Vol_revise_explain;  //逆变C相电压系数
    Specification *INV_C_Vol_revise;

    QPushButton *INV_A_ind_Cur_revise_explain;  //逆变A相电感电流系数
    Specification *INV_A_ind_Cur_revise;

    QPushButton *INV_B_ind_Cur_revise_explain;  //逆变B相电感电流系数
    Specification *INV_B_ind_Cur_revise;

    QPushButton *INV_C_ind_Cur_revise_explain;  //逆变C相电感电流系数
    Specification *INV_C_ind_Cur_revise;

    QPushButton *INV_On_off_flag_explain;   //开关机状态字
    Specification *INV_On_off_flag;

    QPushButton *Logic_state_explain;   //逻辑状态字
    Specification *Logic_state;

    QPushButton *INV_flag_explain;  //逆变状态字
    Specification *INV_flag;

    QPushButton *Grid_flag_explain; //电网状态字
    Specification *Grid_flag;

    QPushButton *Grid_protect_flag_explain; //电网保护状态字
    Specification *Grid_protect_flag;

    QPushButton *PV_flag_explain; //电池电压状态字
    Specification *PV_flag;

    QPushButton *DC_bus_flag_explain;  //母线状态字
    Specification *DC_bus_flag;

    QPushButton *INT_main_flag_explain; //中断状态字
    Specification *INT_main_flag;

    QPushButton *parallel_signal_explain;  //并机状态字
    Specification *parallel_signal;

    QPushButton *Monitor_Order_explain;  //监控命令状态字
    Specification *Monitor_Order;

    QPushButton *Bat_Infor_explain;  //电池信息字
    Specification *Bat_Infor;

    QPushButton *Bat_State_explain;  //电池状态字
    Specification *Bat_State;

    /***************************DCDC调试**************************/
    QPushButton *DC_Debug_variable_1_explain;  //调试变量1
    Specification *DC_Debug_variable_1;


    QPushButton *DC_Debug_variable_2_explain;  //调试变量2
    Specification *DC_Debug_variable_2;

    QPushButton *DC_Debug_variable_3_explain;  //调试变量3
    Specification *DC_Debug_variable_3;

    QPushButton *Current_ID_explain;  //当前模块号
    Specification *Current_ID;

    QPushButton *DC_INT_main_flag_explain;  //中断状态字
    Specification *DC_INT_main_flag;

    QPushButton *DC_DC_bus_flag_explain;  //母线状态字
    Specification *DC_DC_bus_flag;

    QPushButton *DC_PV_flag_explain;  //电池电压状态字
    Specification *DC_PV_flag;

    QPushButton *DC_Debug_variable_1_addr_explain;  //调试地址变量1
    Specification *DC_Debug_variable_1_addr;

    QPushButton *DC_Debug_variable_2_addr_explain;  //调试地址变量2
    Specification *DC_Debug_variable_2_addr;

    QPushButton *DC_Debug_variable_3_addr_explain;  //调试地址变量3
    Specification *DC_Debug_variable_3_addr;

    QPushButton *DC_INV_On_off_flag_explain;  //开关机状态字
    Specification *DC_INV_On_off_flag;

    QPushButton *DCONV_logic_explain;  //
    Specification *DCONV_logic;

    QPushButton *DC_parallel_signal_explain;  //并机状态字
    Specification *DC_parallel_signal;

    QPushButton *DC_Debug_memery_var_1_explain;    //调试内存变量1
    Specification *DC_Debug_memery_var_1;

    QPushButton *DC_Debug_memery_var_2_explain;    //调试内存变量2
    Specification *DC_Debug_memery_var_2;

    QPushButton *DC_Debug_memery_var_3_explain;    //调试内存变量3
    Specification *DC_Debug_memery_var_3;

    QPushButton *DC_Monitor_Order_explain;  //监控命令状态字
    Specification *DC_Monitor_Order;

    QPushButton *DC_Bat_Infor_explain;  //电池信息字
    Specification *DC_Bat_Infor;

    QPushButton *DC_Bat_State_explain;  //电池状态字
    Specification *DC_Bat_State;

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
    void BatterySet_tab();       //电池设置表初始化
    void RunTimeSet_tab();      //自动运行时间表初始化
    void Information_tbnt_released();//系统信息槽
    void Data_Report();         //数据报表
    void History();             //历史记录
    void OperationLog();        //操作日志


    void MPS_Data(QTableWidget *myTable);//MPS数据 绘制button
    void PV_Data(QTableWidget *myTable);//PV数据 绘制button
    void Grid_Data(QTableWidget *myTable);//电网数据 绘制button
    void Load_Data(QTableWidget *myTable);//负载数据 绘制button
    void MPSState(QTableWidget *myTable);  //MPS状态 绘制button
    void DC_AC_Parameter_tab(QTableWidget *myTable);    //DC/AC参数页说明
    void DCDC_Paramter_tab(QTableWidget *myTable);       //DCDC参数页说明
    void Battery_Setup_Tab(QTableWidget *myTable);      //电池设置页说明
    void PCS_Alarm_information_table();  //PCS故障信息表 绘制
    void AutoOperation(QTableWidget *myTable);//自动运行 绘制button
    void SystemMessages(QTableWidget *myTable);//系统信息 绘制button
    void DataReportMessages(QTableWidget *myTable);//数据报表 绘制button
    void HistoryRecord(QTableWidget *myTable); //历史记录   绘制button
    void OperationLog_tab(QTableWidget *myTable);//操作日志 绘制button
    void FunctionSet(QTableWidget *myTable);    //功能设置页说明
    void SystemParameter(QTableWidget *myTable);//系统参数页说明
    void ExternalDevice(QTableWidget *myTable);//外设页说明
    void DCAC_Debugg(QTableWidget *myTable); //DCAC调试页说明
    void DCDC_Debugg(QTableWidget *myTable); //DCDC调试页说明

    void MPS_state_delete();//MPS状态 释放 说明
    void Data_Report_delete();//数据报表 释放 说明
    void HistoryRecord_delete();//历史数据 释放 说明
    void OperationLog_tab_delete();//操作日志 释放 说明
    void DC_AC_Parameter_tab_delete();//DCAC参数 释放 说明
    void DCDC_Paramter_tab_delete();//DCDC参数 释放 说明
    void Battery_Setup_Tab_delete();//电池设置 释放 说明

private slots:
    void on_UI_MenuBtn_clicked();//转到槽

    void onTimerOut();  //时间显示
    void My_menuAction(int Index);

    void on_RTD_Converter_clicked();

    void BatteryData_clicked(int nid);//电池数据
    void SystemlnformationVer_clicked(int nid);//系统信息相关按钮的说明

    void SystemParam_tbnt_released();

    void on_Running_btn_clicked();//跳转变流器实时数据
    void on_Grid_clicked();//跳转电网实时数据
    void on_RTD_module_1_clicked();

    void on_Load_clicked();//跳转负载实时数据
    void on_PV_clicked();//跳转PV实时数据
    void on_Batt_btn_released();//跳转到电池信息
    void on_Alarm_btn_clicker();//跳转实时告警页面
    void AdvancedSetup_btn_clicked();//跳转到高级设置
    void ChangeLanguage_btn_clicked();//切换语言


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

    void on_UI_Complete_Btn_clicked();

    void on_Battery_PowerOn_clicked();

    void on_Battery_PowerOff_clicked();

    void on_radio_static_clicked();

    void on_radio_dhcp_clicked();


    void on_Switch_on_Inv_clicked();

    void on_Switch_off_Inv_clicked();

    void on_Switch_on_clicked();

    void on_Switch_off_clicked();

    void on_search_btn_clicked();

private:
    Ui::MyWidget *ui;
    QButtonGroup *pButton_BatteryData;

    QTimer *timer;
    QTimer *Update_RTData_timer;
    bool ASKey;//高级设置钥匙
    bool IPShow;//IP地址显示标志位
    QTranslator *translator;    //翻译
    int LanguageType;   //当前语言
};
#endif // MYWIDGET_H
