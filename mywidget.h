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
#include <QApplication>
#include <QDebug>
#include <QTableWidgetItem>

#include "Specification/Specification.h"
#include "OperMode.h"
#include "upgradetools.h"
#include "FaultTableInterface.h"

//菜单类型
#define HOSTPAGE            1
#define RTDATAPAGE          2
#define RECORDPAGE          3
#define SYSTEMPAGE          4
#define MACHINESWITCH       5
#define MACHINESTANDBY      6
#define SYSTEMINFORMATION   7
#define USER_LOGIN          8

//操作模式
#define Mode_SELF_USE           0
#define Mode_BATTERY_PRIORITY   1
#define Mode_MANUAL             2
#define Mode_OPTIMAL_MODE       3
#define Mode_MIXED_MODE         4

//高级设置
#define ADVANCED_SETTING        5

//系统基础设置
#define SystemTotal_PAGE        4
#define DCAC_PAGE_NUM           0
#define DCDC_PAGE_NUM           1
#define Lithium_PAGE_NUM        2
#define Lead_PAGE_NUM           3
#define MixedMode_PAGE_NUM      4

//系统高级设置
#define AdvancedTotal_PAGE      6
#define Advanced_PAGE1_NUM      5
#define Advanced_PAGE2_NUM      6
#define Advanced_PAGE3_NUM      7
#define Device_PAGE_NUM         8
#define DCACDebug_PAGE_NUM      9
#define DCDCDebug_PAGE_NUM      10

//当前登录角色
#define User                    0
#define Maintain                1
#define Root                    2
#define None                    3

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

    /***************************DC/AC参数****************************/
    QPushButton *Grid_connected_mode_explain;//并网方式说明
    QPushButton *Constant_power_explain;     //功率说明
//    QPushButton *Charging_and_discharging_explain;  //充放电说明
    QPushButton *Work_mode_explain;  //工作模式说明
    QPushButton *Output_power_factor_explain;    //输出功率因素说明
    QPushButton *Output_reactive_power_explain;  //输出无功功率说明
    QPushButton *Constant_current_explain;  //恒流说明
    QPushButton *Constant_voltage_explain; //恒压说明
    QPushButton *Control_mode_explain;  //控制模式说明
    QPushButton *Machine_number_explain;    //设备号说明
    QPushButton *Parallel_explain;  //并机说明
//    QPushButton *Unbalance_power_enable_explain;    //功率不平衡使能说明


    Specification *Grid_connected_mode;
    Specification *Constant_power;
//    Specification *Charging_and_discharging;
    Specification *Work_mode;
    Specification *Output_power_factor;
    Specification *Output_reactive_power;
    Specification *Constant_current;
    Specification *Constant_voltage;
    Specification *Control_mode;
    Specification *Machine_number;
    Specification *Parallel;
//    Specification *Unbalance_power_enable;
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

    /***************************电池设置-锂电****************************/

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
    QPushButton *Relese_Charge_mark_explain;    //释放充电标志说明
    QPushButton *ForceCharge_start_explain; //强充开启说明
    QPushButton *ForceCharge_top_explain;   // 强充结束说明
    QPushButton *DOD_Protection_Release_SOC_explain;//DOD保护解除SOC
    QPushButton *Cell_Voltage_max_explain;//最高单体电压
    QPushButton *Cell_Voltage_max_delta_explain;//最高单体电压回差
    QPushButton *Cell_Voltage_min_explain;//最低单体电压
    QPushButton *Cell_Voltage_min_delta_explain;//最低单体电压回差
    QPushButton *DCAC_cell_protect_explain;//DCAC单体保护电压
    QPushButton *DCAC_cell_delta_explain;//DCAC单体保护电压回差

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
    Specification *Relese_Charge_mark;
    Specification *ForceCharge_start;
    Specification *ForceCharge_top;
    Specification *DOD_Protection_Release_SOC;//DOD保护解除SOC
    Specification *Cell_Voltage_max;//最高单体电压
    Specification *Cell_Voltage_max_delta;//最高单体电压回差
    Specification *Cell_Voltage_min;//最低单体电压
    Specification *Cell_Voltage_min_delta;//最低单体电压回差
    Specification *DCAC_cell_protect;//DCAC单体保护电压
    Specification *DCAC_cell_delta;//DCAC单体保护电压回差


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
    /*QPushButton *Shutdown_voltage_point_explain;
    QPushButton *Mending_center_point_explain;
    QPushButton *Temperature_filling_coefficient_explain;
    QPushButton *Mending_allowable_setting_explain;
    QPushButton *Temperature_alarm_upper_limit_explain;*/
    QPushButton *Uniform_To_Flushing_current_explain;
    QPushButton *Flushing_To_Uniform_current_explain;



    Specification *Capacity;
    Specification *Cell_number_2V;
    Specification *Bat_float_vol;
    Specification *Bat_filling_vol;
    Specification *Charge_limiting_value;
    Specification *Discharge_limiting_value;
    Specification *Generator_turn_off_SOC_B1;
    Specification *Generator_turn_on_SOC_A1;
    Specification *Grid_off_EOD;
    Specification *Grid_on_EOD;
    /*Specification *Shutdown_voltage_point;
    Specification *Mending_center_point;
    Specification *Temperature_filling_coefficient;
    Specification *Mending_allowable_setting;
    Specification *Temperature_alarm_upper_limit;*/
    Specification *Uniform_To_Flushing_current;
    Specification *Flushing_To_Uniform_current;

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


    Specification *Check1,*Check2,*Check3,*Check4,*Check5,*Check6,*Check7,*Check8,*Check9,*Check10;
    Specification *Check11,*Check12,*Check13,*Check14,*Check15,*Check16,*Check17,*Check18,*Check19,*Check20;
    Specification *Peak1,*Peak2,*Peak3,*Peak4,*Peak5,*Peak6,*Peak7,*Peak8,*Peak9,*Peak10;
    Specification *Peak11,*Peak12,*Peak13,*Peak14,*Peak15,*Peak16,*Peak17,*Peak18,*Peak19,*Peak20;
    Specification *Start_T1,*Start_T2,*Start_T3,*Start_T4,*Start_T5,*Start_T6,*Start_T7,*Start_T8,*Start_T9,*Start_T10;
    Specification *Start_T11,*Start_T12,*Start_T13,*Start_T14,*Start_T15,*Start_T16,*Start_T17,*Start_T18,*Start_T19,*Start_T20;
    Specification *End_T1,*End_T2,*End_T3,*End_T4,*End_T5,*End_T6,*End_T7,*End_T8,*End_T9,*End_T10;
    Specification *End_T11,*End_T12,*End_T13,*End_T14,*End_T15,*End_T16,*End_T17,*End_T18,*End_T19,*End_T20;
    Specification *State1,*State2,*State3,*State4,*State5,*State6,*State7,*State8,*State9,*State10;
    Specification *State11,*State12,*State13,*State14,*State15,*State16,*State17,*State18,*State19,*State20;
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

    Specification *Grade;
    Specification *Grade2;
    Specification *Grade3;
    Specification *Grade4;
    Specification *Grade5;
    Specification *Grade6;
    Specification *Grade7;
    Specification *Grade8;
    Specification *Grade9;
    Specification *Grade10;
    Specification *Grade11;
    Specification *Grade12;
    Specification *Grade13;
    Specification *Grade14;
    Specification *Grade15;
    Specification *StartTime;
    Specification *StartTime2;
    Specification *StartTime3;
    Specification *StartTime4;
    Specification *StartTime5;
    Specification *StartTime6;
    Specification *StartTime7;
    Specification *StartTime8;
    Specification *StartTime9;
    Specification *StartTime10;
    Specification *StartTime11;
    Specification *StartTime12;
    Specification *StartTime13;
    Specification *StartTime14;
    Specification *StartTime15;
    Specification *EndTime;
    Specification *EndTime2;
    Specification *EndTime3;
    Specification *EndTime4;
    Specification *EndTime5;
    Specification *EndTime6;
    Specification *EndTime7;
    Specification *EndTime8;
    Specification *EndTime9;
    Specification *EndTime10;
    Specification *EndTime11;
    Specification *EndTime12;
    Specification *EndTime13;
    Specification *EndTime14;
    Specification *EndTime15;
    Specification *Describe;
    Specification *Describe2;
    Specification *Describe3;
    Specification *Describe4;
    Specification *Describe5;
    Specification *Describe6;
    Specification *Describe7;
    Specification *Describe8;
    Specification *Describe9;
    Specification *Describe10;
    Specification *Describe11;
    Specification *Describe12;
    Specification *Describe13;
    Specification *Describe14;
    Specification *Describe15;

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

    Specification *ModificationTime;
    Specification *ModificationTime2;
    Specification *ModificationTime3;
    Specification *ModificationTime4;
    Specification *ModificationTime5;
    Specification *ModificationTime6;
    Specification *ModificationTime9;
    Specification *ModificationTime11;
    Specification *ModificationTime12;
    Specification *EventRecord;
    Specification *EventRecord2;
    Specification *EventRecord3;
    Specification *EventRecord4;
    Specification *EventRecord5;
    Specification *EventRecord6;
    Specification *EventRecord9;
    Specification *EventRecord11;
    Specification *EventRecord12;

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
    Specification *Battery_type;
    Specification *BMS_Comm_type;
    Specification *Power_control_type;
    Specification *EMS_Comm_type;
    Specification *Output_power_limit;
    Specification *BAT_manufacturers;
    Specification *Charge_SOC;
    Specification *Disharge_SOC;
    Specification *DG_capacity;
    Specification *Energy_priority;
    Specification *Host_Address;
    Specification *serial_port_1;
    Specification *serial_port_2;
    Specification *serial_port_3;
    Specification *serial_port_4;
    Specification *serial_port_5;
    Specification *Can_port_1;
    Specification *Can_port_2;
    Specification *ProtocolVersion;
    Specification *UserPassPort;
    Specification *RootPassport;
    Specification *Language;
    Specification *Sounds;
    Specification *BmsComFaultTime;
    Specification *EMSComFaultModel;
    Specification *DG_ECP;
    Specification *DG_FCP;
    Specification *Grid_ECP;
    Specification *Grid_FCP;
    Specification *Grid_EDP;
    Specification *Grid_FDP;

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
//    QPushButton *Grid_recovery_scheduling_explain;  //电网恢复调度开机说明
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


    Specification *Change_rate_of_power;
    Specification *Grid_frequency_upper_limit;
    Specification *Grid_frequency_lower_limit;
    Specification *Vol_protection_upper_limit;
    Specification *Vol_protection_lower_limit;
    Specification *HVRT_enable;
    Specification *LVRT_enable;
    Specification *AFD_enable;
    Specification *Insulation_detection_enable;
    Specification *PrimaryFreq_enable;
    Specification *Inertia_enable;
    Specification *Load_priority;
    Specification *Machine_type;
    Specification *Machine_capacity;
    Specification *Output_Fre_grade;
    Specification *Output_vol_level;
    Specification *Converter_side_vol_level;
    Specification *Output_reactive_power_mode;
//    Specification *Grid_recovery_scheduling;
    Specification *Grid_recovery_time;
    Specification *Grid_connected_mode_of_Inv;

    Specification *Pshedding_Freq;
    Specification *QP_curve;
    Specification *CV_parallel;
    Specification *Module_Number;
    Specification *Restore_factory;
    Specification *BackupSetParameters;
    Specification *RestoreBackupSetParameters;
    Specification *Clear_Data;
    Specification *Machine_Type;
    Specification *Module_max;
    Specification *Module_min;
    Specification *Insulation_detection_enable_DCDC;


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



    Specification *DI_1_Enable;
    Specification *DI_1_NC_O;
    Specification *DI_1_Action;
    Specification *DI_2_Enable;
    Specification *DI_2_NC_O;
    Specification *DI_2_Action;
    Specification *DI_3_Enable;
    Specification *DI_3_NC_O;
    Specification *DI_3_Action;
    Specification *DI_4_Enable;
    Specification *DI_4_NC_O;
    Specification *DI_4_Action;
    Specification *DI_5_Enable;
    Specification *DI_5_NC_O;
    Specification *DI_5_Action;
    Specification *DI_6_Enable;
    Specification *DI_6_NC_O;
    Specification *DI_6_Action;
    /*Specification *DO_1_Enable;
    Specification *DO_1_NC_O;
    Specification *DO_1_Action;
    Specification *DO_2_Enable;
    Specification *DO_2_NC_O;
    Specification *DO_2_Action;
    Specification *DO_3_Enable;
    Specification *DO_3_NC_O;
    Specification *DO_3_Action;*/

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



    Specification *Debug_variable_1;
    Specification *Debug_variable_2;
    Specification *Debug_variable_3;
    Specification *Debug_variable_1_addr;
    Specification *Debug_variable_2_addr;
    Specification *Debug_variable_3_addr;
    Specification *Debug_memery_var_1;
    Specification *Debug_memery_var_2;
    Specification *Debug_memery_var_3;
    Specification *Input_Vol_revise;
    Specification *Input_Cur_revise;
    Specification *Voltage_1_5_revise;
    Specification *Bus_Vol_revise;
    Specification *Grid_A_AB_Vol_revise;
    Specification *Grid_B_BC_Vol_revise;
    Specification *Grid_C_CA_Vol_revise;
    Specification *Output_A_Cur_revise;
    Specification *Output_B_Cur_revise;
    Specification *Output_C_Cur_revise;
    Specification *INV_A_Vol_revise;
    Specification *INV_B_Vol_revise;
    Specification *INV_C_Vol_revise;
    Specification *INV_A_ind_Cur_revise;
    Specification *INV_B_ind_Cur_revise;
    Specification *INV_C_ind_Cur_revise;
    Specification *INV_On_off_flag;
    Specification *Logic_state;
    Specification *INV_flag;
    Specification *Grid_flag;
    Specification *Grid_protect_flag;
    Specification *PV_flag;
    Specification *DC_bus_flag;
    Specification *INT_main_flag;
    Specification *parallel_signal;
    Specification *Monitor_Order;
    Specification *Bat_Infor;
    Specification *Bat_State;

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


    Specification *DC_Debug_variable_1;
    Specification *DC_Debug_variable_2;
    Specification *DC_Debug_variable_3;
    Specification *Current_ID;
    Specification *DC_INT_main_flag;
    Specification *DC_DC_bus_flag;
    Specification *DC_PV_flag;
    Specification *DC_Debug_variable_1_addr;
    Specification *DC_Debug_variable_2_addr;
    Specification *DC_Debug_variable_3_addr;
    Specification *DC_INV_On_off_flag;
    Specification *DCONV_logic;
    Specification *DC_parallel_signal;
    Specification *DC_Debug_memery_var_1;
    Specification *DC_Debug_memery_var_2;
    Specification *DC_Debug_memery_var_3;
    Specification *DC_Monitor_Order;
    Specification *DC_Bat_Infor;
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
    void BatterySet_tab();      //电池设置表初始化_锂电
    void BatterySet_Lead_tab(); //电池设置表初始化_铅酸
    void RunTimeSet_tab();      //自动运行时间表初始化
    void Information_tbnt_released();//系统信息槽
    void Data_Report();         //数据报表
    void History();             //历史记录
    void OperationLog();        //操作日志
    void WorkingModeInit();     //新界面工作模式初始化
    void Account_Change( uint8_t Account_Type );//切换登录信息



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
    void DCAC_Debugg(QTableWidget *myTable); //DCAC调试页说明
    void DCDC_Debugg(QTableWidget *myTable); //DCDC调试页说明

    void MPS_state_delete();//MPS状态 释放 说明
    void Data_Report_delete();//数据报表 释放 说明
    void HistoryRecord_delete();//历史数据 释放 说明
    void OperationLog_tab_delete();//操作日志 释放 说明
    void DC_AC_Parameter_tab_delete();//DCAC参数 释放 说明
    void DCDC_Paramter_tab_delete();//DCDC参数 释放 说明
    void Battery_Setup_Tab_delete();//电池设置 释放 说明
    void Battery_Setup_Lead_Tab_delete();
    void AutoOperation_delete();//自动运行 释放 说明
    void SystemMessages_delete();//系统信息 释放 说明
    void FunctionSet_delete();//功能设置 释放 说明
    void SystemParameter_delete();//系统参数 释放 说明
    void ExternalDevice_delete();//外设 释放 说明
    void DCAC_Debugg_delete();//DCAC调试 释放 说明
    void DCDC_Debugg_delete();//DCDC调试 释放 说明
    void Delete_explain();//调用上面的释放函数


private slots:
    void on_UI_MenuBtn_clicked();//转到槽

    void onTimerOut();  //时间显示
    void My_menuAction(int Index);
    void WordingMode(int Index);//系统模式
    void ModeSwitchExplain(int Index);//模式切换说明
    void Return(int Index);//返回退出键
    void combox_Account_change(int Index);//下拉框选择登录用户

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
    void Operational_mode_clicked();//操作模式新界面
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

    void on_TimeSeting_btn_clicked();

    void on_Hybrid_mode_Button_clicked();

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

private:
    Ui::MyWidget *ui;
    QStringList Mode_Str;//模式文本显示列表
    QList<QTableWidget*>  new_ui_TabList;
    QButtonGroup *pButton_BatteryData;
    QButtonGroup *Menu_Group;
    QButtonGroup *SystemMode_Group;
    QButtonGroup *ExitReturn_Group;
    QButtonGroup *ModeSwitch_Group;
    int CurrentCheckMode;//当前模式
    int CurrentCheckModeExplain;//当前模式说明
    int System_Current_Page; //系统当前页
    int Advanced_Current_Page;//高级设置当前页
    int ModeIntr_Current_Page;//模式介绍页当前页码
    unsigned char Account_Type = None;//当前登录角色 -- 上电默认未登录

    QTimer *timer;
    QTimer *Update_RTData_timer;
    bool IPShow;//IP地址显示标志位
    QTranslator *translator;    //翻译
    int LanguageType;   //当前语言



};
#endif // MYWIDGET_H
