
#include "mywidget.h"
#include "ui_mywidget.h"
#include "MainThread.h"




#define CHINESE     0
#define ENGLISH     1
#define WIDTH   988
#define HEIGHT  604

MyWidget::MyWidget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MyWidget)
{
    LanguageType = CHINESE; //开机默认为中文

    CurrentCheckMode = Mode_SELF_USE;           //初始为 自发自用模式
    CurrentCheckModeExplain = BATTERY_AREA_EXP; //初始为 自发自用模式介绍
    System_Current_Page = DCAC_PAGE_NUM;        //系统当前页
    Advanced_Current_Page = Advanced_PAGE1_NUM; //高级设置当前页
    ModeIntr_Current_Page   = 0;                //模式介绍页当前页码
    Account_Type = Login_None;                        //当前登录角色 -- 上电默认未登录
    ui->setupUi(this);
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Host_page); //执行程序后，自动进入到主页


    LoadLanguageInit(); //初始化语言
    MemoryAllocation(); //初始化内存空间
    UIPageInit();       //初始化界面
    LinkRelationship();//函数关联
}

MyWidget::~MyWidget()
{
    delete mode_expelain;
    delete UpgradeInterface;
    delete FaultTable;
    delete ButtonToTable;
    delete ViewLogicDiagram;
    /****************QButtonGroup**************/
    //菜单
    delete Menu_Group;

    //系统工作模式
    delete SystemMode_Group;

    delete ExitReturn_Group;

    //工作模式 说明
    delete ModeSwitch_Group;

    delete HomeClick_Group;
    /************************实时数据******************************/
    //变流器
    delete MPS_vol_AB_explain;
    delete MPS_vol_BC_explain;
    delete MPS_vol_CA_explain;
    delete MPS_cur_A_explain;
    delete MPS_cur_B_explain;
    delete MPS_cur_C_explain;
    delete MPS_IGBT_T_explain;
    delete MPS_Env_T_explain;
    delete MPS_Leakage_cur_explain;
    delete PV_vol_explain;
    delete PV_cur_explain;
    delete PV_power_explain;
    delete Batter_vol_explain;
    delete Batter_cur_explain;
    delete Batter_power_explain;
    delete Bus_vol_explain;
    delete Bus_cur_explain;
    //光伏
    delete PV_vol_H_explain;
    delete PV_cur_H_explain;
    delete PV_power_H_explain;
    delete PV_vol_L_explain;
    delete PV_cur_L_explain;
    delete PV_power_L_explain;
    delete PositiveInuslation_explain;
    delete Bus_H_vol_add_explain;
    delete Bus_H_vol_reduce_explain;
    delete Bus_L_vol_add_explain;
    delete Bus_L_vol_reduce_explain;
    delete PV_IGBT_T_explain;
    delete NegativeInuslation_explain;
    delete Leakage_cur_explain;
    //电网
    delete Grid_vol_AB_explain          ;
    delete Grid_vol_BC_explain          ;
    delete Grid_vol_CA_explain          ;
    delete Grid_cur_A_explain           ;
    delete Grid_cur_B_explain           ;
    delete Grid_cur_C_explain           ;
    delete Grid_active_power_explain    ;
    delete Grid_reactive_power_explain  ;
    delete Grid_apparent_power_explain  ;
    delete Grid_power_factor_explain    ;
    delete Grid_Frequency_explain       ;
    //负载
    delete Load_vol_AB_explain          ;
    delete Load_vol_BC_explain          ;
    delete Load_vol_CA_explain          ;
    delete Load_cur_A_explain           ;
    delete Load_cur_B_explain           ;
    delete Load_cur_C_explain           ;
    delete Load_active_power_explain    ;
    delete Load_reactive_power_explain  ;
    delete Load_apparent_power_explain  ;
    delete Load_power_factor_explain    ;
    delete Load_Frequency_explain       ;

    /*******************MPS状态***************************/

    delete DC_input_Bre_explain				;
    delete DC_Con_explain      				;
    delete M_Bypass_Bre_explain				;
    delete Output_Bre_explain  				;
    delete Output_Con_explain  				;
    delete Grid_Bre_explain    				;
    delete DCACinsulation_detection_explain	;
    delete DO1_explain         				;
    delete DO2_explain         				;
    delete DO3_explain         				;

    delete DCAC_Conver_avail_explain;
    delete DC_Soft_Start_explain	;
    delete Converter_Status_explain	;
    delete Reactive_P_Reg_explain 	;
    delete LVRT_explain				;
    delete DI1_explain				;
    delete DI2_explain				;
    delete DI3_explain				;
    delete DI4_explain				;
    delete DI5_explain				;
    delete DI6_explain				;

    delete Contator_Sta_Boost_explain  		;
    delete Contator_Sta_Buck_explain   		;
    delete Run_mode_explain            		;
    delete DCDC_Converter_ava_explain  		;
    delete Soft_Start_Sta_Boost_explain		;
    delete Soft_Start_Sta_Buck_explain 		;
    delete Converter_Status_V_explain  		;
    delete ModeLock_explain            		;
    delete DCDCinsulation_detection_explain	;

    /**********************电池数据***************************/
    delete pButton_BatteryData;


    /***************************DC/AC参数**********************************/

    delete Grid_connected_mode_explain              ;//PCS并离网方式说明
    delete Constant_power_explain                   ;//恒功率说明
    delete Work_mode_explain                        ;//工作模式说明
    delete Output_power_factor_explain              ;//输出功率因素说明
    delete Output_reactive_power_explain            ;//输出无功功率说明
    delete Constant_current_explain                 ;//恒流说明
    delete Constant_voltage_explain                 ;//恒压说明
    delete Control_mode_explain                     ;//控制模式说明
    delete Machine_number_explain                   ;//设备号说明
    delete Parallel_explain                         ;//并机说明
    delete G_Constant_power_explain                 ;
    delete Grid_capacity_explain                    ;//电网容量说明
    delete DG_Charging_power_limit                  ;//柴发充电功率限制

    /***************************DC/AC参数************************/
    delete Work_parttern_explain                    ;//DCDC工作模式说明
    delete Boost_or_Buck_explain                    ;//升/降压说明
    delete Voltage_level_explain                    ;//电压等级说明
    delete Current_value_explain                    ;//电流值说明
    delete OuterLoopControl_explain                 ;//
    delete IV_curve_scanning_explain                ;//静脉扫描
    delete IV_curve_scanning_low_explain            ;//低电压静脉扫描
    delete IV_curve_scanning_high_explain           ;//高电压静脉扫描

    /***************************电池设置 锂电****************************/

    delete DOD_OnGrid_explain 						;//并网DOD说明
    delete DOD_OffGrid_explain 						;//离网DOD说明
    delete Charge_Volt_Upper_Limit_explain 			;//充电电压上限说明
    delete Charge_Volt_upper_Limit_delta_explain 	;//充电电压上限回差说明
    delete Disc_Volt_lower_Limit_explain 			;//放电电压限制说明
    delete Discharge_Volt_upper_Limit_delta_explain ;//放电电压下限回差说明
    delete Charge_Current_Limit_explain 			;//充电电流限制说明
    delete Discharge_Current_Limit_explain 			;//放电电流限制说明
    delete Gen_turn_off_SOC_explain 				;//柴发关闭SOC说明
    delete Gen_turn_on_SOC_explain 					;//柴发开启SOC说明
    delete ForceCharge_start_explain 				;//强充开启说明
    delete ForceCharge_top_explain 					;// 强充结束说明
    delete Relese_Charge_mark_explain 				;//释放禁充标志说明
    delete Relese_discharge_mark_explain 			;//释放禁放标志说明
    delete DOD_Protection_Release_SOC_explain 		;//DOD保护解除SOC
    delete Cell_Voltage_max_explain                 ;//最高单体电压
    delete Cell_Voltage_max_delta_explain           ;//最高单体电压回差
    delete Cell_Voltage_min_explain                 ;//最低单体电压
    delete Cell_Voltage_min_delta_explain           ;//最低单体电压回差
    delete DCAC_cell_protect_explain                ;//DCAC单体保护电压
    delete DCAC_cell_delta_explain                  ;//DCAC单体保护电压回差

    /***************************电池设置 铅酸****************************/

    delete Capacity_explain                    ;
    delete Cell_number_2V_explain              ;
    delete Bat_float_vol_explain               ;
    delete Bat_filling_vol_explain             ;
    delete Charge_limiting_value_explain       ;
    delete Discharge_limiting_value_explain    ;
    delete Generator_turn_off_SOC_B1_explain   ;
    delete Generator_turn_on_SOC_A1_explain    ;
    delete Grid_off_EOD_explain                ;
    delete Grid_on_EOD_explain                 ;
    delete DCACReferenceVoltage_explain        ;
    delete Uniform_To_Flushing_current_explain ;
    delete Flushing_To_Uniform_current_explain ;

    /*******************************自动运行*******************************/
    delete Check1_explain ; delete Check2_explain ; delete Check3_explain ;
    delete Check4_explain ; delete Check5_explain ; delete Check6_explain ;
    delete Check7_explain ; delete Check8_explain ; delete Check9_explain ;
    delete Check10_explain; delete Check11_explain; delete Check12_explain ;
    delete Check13_explain; delete Check14_explain; delete Check15_explain ;
    delete Check16_explain; delete Check17_explain; delete Check18_explain ;
    delete Check19_explain; delete Check20_explain;

    delete Peak1_explain  ; delete Peak2_explain  ; delete Peak3_explain ;
    delete Peak4_explain  ; delete Peak5_explain  ; delete Peak6_explain ;
    delete Peak7_explain  ; delete Peak8_explain  ; delete Peak9_explain ;
    delete Peak10_explain ; delete Peak11_explain ; delete Peak12_explain ;
    delete Peak13_explain ; delete Peak14_explain ; delete Peak15_explain ;
    delete Peak16_explain ; delete Peak17_explain ; delete Peak18_explain ;
    delete Peak19_explain ; delete Peak20_explain ;

    delete Start_T1_explain  ; delete Start_T2_explain  ; delete Start_T3_explain ;
    delete Start_T4_explain  ; delete Start_T5_explain  ; delete Start_T6_explain ;
    delete Start_T7_explain  ; delete Start_T8_explain  ; delete Start_T9_explain ;
    delete Start_T10_explain ; delete Start_T11_explain ; delete Start_T12_explain ;
    delete Start_T13_explain ; delete Start_T14_explain ; delete Start_T15_explain ;
    delete Start_T16_explain ; delete Start_T17_explain ; delete Start_T18_explain ;
    delete Start_T19_explain ; delete Start_T20_explain ;

    delete End_T1_explain  ; delete End_T2_explain  ; delete End_T3_explain ;
    delete End_T4_explain  ; delete End_T5_explain  ; delete End_T6_explain ;
    delete End_T7_explain  ; delete End_T8_explain  ; delete End_T9_explain ;
    delete End_T10_explain ; delete End_T11_explain ; delete End_T12_explain ;
    delete End_T13_explain ; delete End_T14_explain ; delete End_T15_explain ;
    delete End_T16_explain ; delete End_T17_explain ; delete End_T18_explain ;
    delete End_T19_explain ; delete End_T20_explain ;

    delete State1_explain  ; delete State2_explain  ; delete State3_explain ;
    delete State4_explain  ; delete State5_explain  ; delete State6_explain ;
    delete State7_explain  ; delete State8_explain  ; delete State9_explain ;
    delete State10_explain ; delete State11_explain ; delete State12_explain ;
    delete State13_explain ; delete State14_explain ; delete State15_explain ;
    delete State16_explain ; delete State17_explain ; delete State18_explain ;
    delete State19_explain ; delete State20_explain ;

    delete Power1_explain  ; delete Power2_explain  ; delete Power3_explain ;
    delete Power4_explain  ; delete Power5_explain  ; delete Power6_explain ;
    delete Power7_explain  ; delete Power8_explain  ; delete Power9_explain ;
    delete Power10_explain ; delete Power11_explain ; delete Power12_explain ;
    delete Power13_explain ; delete Power14_explain ; delete Power15_explain ;
    delete Power16_explain ; delete Power17_explain ; delete Power18_explain ;
    delete Power19_explain ; delete Power20_explain ;

    delete MixedModeButtonList;


    /**********************系统消息*************************/

    delete pButton_Version                 ;
    delete MonitoringVersion_explain       ;
    delete DCAC_SysProtocol_Version_explain;
    delete DCAC_ConverterVersion_explain   ;
    delete DCAC_CPLD_Version_explain       ;
    delete DCDC_SysProtocol_Version_explain;
    delete DCDC_ConverterVersion_explain   ;
    delete DCDC_CPLD_Version_explain       ;
    delete SN_explain                      ;

    /***********************数据报表************************/
    delete PV_power_generation_Day_explain     ;
    delete PV_power_generation_Month_explain   ;
    delete PV_power_generation_Year_explain    ;
    delete PV_power_generation_Total_explain   ;
    delete Load_Discharge_Day_explain          ;
    delete Load_Discharge_Month_explain        ;
    delete Load_Discharge_Year_explain         ;
    delete Load_Discharge_Total_explain        ;
    delete Battery_Charge_Day_explain          ;
    delete Battery_Charge_Month_explain        ;
    delete Battery_Charge_Year_explain         ;
    delete Battery_Charge_Total_explain        ;
    delete Battery_Discharge_Day_explain       ;
    delete Battery_Discharge_Month_explain     ;
    delete Battery_Discharge_Year_explain      ;
    delete Battery_Discharge_Total_explain     ;
    delete Grid_Charge_Day_explain             ;
    delete Grid_Charge_Month_explain           ;
    delete Grid_Charge_Year_explain            ;
    delete Grid_Charge_Total_explain           ;
    delete Grid_Discharge_Day_explain          ;
    delete Grid_Discharge_Month_explain        ;
    delete Grid_Discharge_Year_explain         ;
    delete Grid_Discharge_Total_explain        ;

    /***************************历史记录**********************************/
    delete Grade_explain       ;
    delete Grade2_explain      ;
    delete Grade3_explain      ;
    delete Grade4_explain      ;
    delete Grade5_explain      ;
    delete Grade6_explain      ;
    delete Grade7_explain      ;
    delete Grade8_explain      ;
    delete Grade9_explain      ;
    delete Grade10_explain     ;
    delete Grade11_explain     ;
    delete Grade12_explain     ;
    delete Grade13_explain     ;
    delete Grade14_explain     ;
    delete Grade15_explain     ;
    delete StartTime_explain   ;
    delete StartTime2_explain  ;
    delete StartTime3_explain  ;
    delete StartTime4_explain  ;
    delete StartTime5_explain  ;
    delete StartTime6_explain  ;
    delete StartTime7_explain  ;
    delete StartTime8_explain  ;
    delete StartTime9_explain  ;
    delete StartTime10_explain ;
    delete StartTime11_explain ;
    delete StartTime12_explain ;
    delete StartTime13_explain ;
    delete StartTime14_explain ;
    delete StartTime15_explain ;
    delete EndTime_explain     ;
    delete EndTime2_explain    ;
    delete EndTime3_explain    ;
    delete EndTime4_explain    ;
    delete EndTime5_explain    ;
    delete EndTime6_explain    ;
    delete EndTime7_explain    ;
    delete EndTime8_explain    ;
    delete EndTime9_explain    ;
    delete EndTime10_explain   ;
    delete EndTime11_explain   ;
    delete EndTime12_explain   ;
    delete EndTime13_explain   ;
    delete EndTime14_explain   ;
    delete EndTime15_explain   ;
    delete Describe_explain    ;
    delete Describe2_explain   ;
    delete Describe3_explain   ;
    delete Describe4_explain   ;
    delete Describe5_explain   ;
    delete Describe6_explain   ;
    delete Describe7_explain   ;
    delete Describe8_explain   ;
    delete Describe9_explain   ;
    delete Describe10_explain  ;
    delete Describe11_explain  ;
    delete Describe12_explain  ;
    delete Describe13_explain  ;
    delete Describe14_explain  ;
    delete Describe15_explain  ;

    /***************************操作日志**********************************/
    delete ModificationTime_explain    ;
    delete ModificationTime2_explain   ;
    delete ModificationTime3_explain   ;
    delete ModificationTime4_explain   ;
    delete ModificationTime5_explain   ;
    delete ModificationTime6_explain   ;
    delete ModificationTime9_explain   ;
    delete ModificationTime11_explain  ;
    delete ModificationTime12_explain  ;
    delete EventRecord_explain         ;
    delete EventRecord2_explain        ;
    delete EventRecord3_explain        ;
    delete EventRecord4_explain        ;
    delete EventRecord5_explain        ;
    delete EventRecord6_explain        ;
    delete EventRecord9_explain        ;
    delete EventRecord11_explain       ;
    delete EventRecord12_explain       ;

    /*************************功能设置*************************/
    delete Battery_type_explain         ;  //电池类型说明
    delete BMS_Comm_type_explain        ; //电池通信方式说明
    delete Power_control_type_explain   ;    //功率控制类型说明
    delete EMS_Comm_type_explain        ; //EMS通讯方式说明
    delete Output_power_limit_explain   ;    //输出功率上限说明
    delete BAT_manufacturers_explain    ; //电池厂家说明
    delete Charge_SOC_explain           ;    //充电SOC说明
    delete Disharge_SOC_explain         ;  //放电SOC说明
    delete DG_capacity_explain          ;   //柴发容量说明
    delete Energy_priority_explain      ;   //能量优先级说明
    delete Host_Address_explain         ;  //主机地址说明
    delete serial_port_1_explain        ; //串口1说明
    delete serial_port_2_explain        ; //串口2说明
    delete serial_port_3_explain        ; //串口3说明
    delete serial_port_4_explain        ; //串口4说明
    delete serial_port_5_explain        ; //串口5说明
    delete Can_port_1_explain           ;    //CAN1说明
    delete Can_port_2_explain           ;    //CAN2说明
    delete ProtocolVersion_explain      ;   //协议版本说明
    delete UserPassPort_explain         ;  //用户密码说明
    delete RootPassport_explain         ;  //超级权限说明
    delete Language_explain             ;  //语言说明
    delete System_upgrade_explain       ;    //系统升级说明
    delete View_LogicDiagram_explain    ;  //逻辑图查看说明
    delete Sounds_explain               ;    //声音说明
    delete BmsComFaultTime_explain      ;
    delete EMSComFaultModel_explain     ;
    delete DG_ECP_explain               ;
    delete DG_FCP_explain               ;
    delete Grid_ECP_explain             ;
    delete Grid_FCP_explain             ;
    delete Grid_EDP_explain             ;
    delete Grid_FDP_explain             ;
    delete BatteryCapacityAlarm_explain ;
    delete MeterModel_explain           ;  //电表型号
    delete ElectricityMeterAntiBackflow_explain;  //电表防逆流

    /***************************系统参数**************************/
    delete Change_rate_of_power_explain                ;  //功率变化率说明
    delete Grid_frequency_upper_limit_explain          ;  //电网频率变化范围上限说明
    delete Grid_frequency_lower_limit_explain          ;  //电网频率变化范围下限说明
    delete Vol_protection_upper_limit_explain          ;  //电压保护范围上限说明
    delete Vol_protection_lower_limit_explain          ;  //电压保护范围下限说明
    delete HVRT_enable_explain                         ;  //高穿使能说明
    delete LVRT_enable_explain                         ;  //低穿使能说明
    delete AFD_enable_explain                          ;  //孤岛使能说明
    delete Insulation_detection_enable_explain         ;  //绝缘监测使能说明
    delete PrimaryFreq_enable_explain                  ;  //一次调频使能说明
    delete Inertia_enable_explain                      ;  //转动惯量使能说明
    delete Machine_type_explain                        ;  //机器型号说明
    delete Machine_capacity_explain                    ;  //机器容量说明
    delete Output_Fre_grade_explain                    ;  //输出频率等级说明
    delete Output_vol_level_explain                    ;  //输出电压等级说明
    delete Converter_side_vol_level_explain            ;  //逆变电压等级说明
    delete Output_reactive_power_mode_explain          ;  //输出无功方式说明
    delete Grid_recovery_time_explain                  ;  //电网恢复并网时间说明
    delete Grid_connected_mode_of_Inv_explain          ;  //逆变器并网方式说明

    delete Pshedding_Freq_explain                      ;  //过频降载说明
    delete QP_curve_explain                            ;  //QP曲线说明
    delete CV_parallel_explain                         ;  //恒压并机说明
    delete Module_Number_explain                       ;  //模块数量说明
    delete Restore_factory_explain                     ;  //恢复出厂说明
    delete BackupSetParameters_explain                 ;
    delete RestoreBackupSetParameters_explain          ;
    delete Clear_Data_explain                          ;  //清除数据说明
    delete Machine_Type_explain                        ;  //机架说明
    delete Module_max_explain                          ;  //最大模块数说明
    delete Module_min_explain                          ;  //最小模块数说明
    delete Insulation_detection_enable_DCDC_explain    ;  //DCDC绝缘监测使能说明
    delete Insulation_detection_enable_DCAC_explain    ;  //DCAC绝缘监测使能说明
    delete Grid_expansion_explain                      ;

    /***************************外设**************************/
    //输入干接点1说明
    delete DI_1_Enable_explain ;
    delete DI_1_NC_O_explain   ;
    delete DI_1_Action_explain ;

    //输入干接点2说明
    delete DI_2_Enable_explain ;
    delete DI_2_NC_O_explain   ;
    delete DI_2_Action_explain ;

    //输入干接点3说明
    delete DI_3_Enable_explain ;
    delete DI_3_NC_O_explain   ;
    delete DI_3_Action_explain ;

    //输入干接点4说明
    delete DI_4_Enable_explain ;
    delete DI_4_NC_O_explain   ;
    delete DI_4_Action_explain ;

    //输入干接点5说明
    delete DI_5_Enable_explain ;
    delete DI_5_NC_O_explain   ;
    delete DI_5_Action_explain ;

    //输入干接点6说明
    delete DI_6_Enable_explain ;
    delete DI_6_NC_O_explain   ;
    delete DI_6_Action_explain ;

    /***************************DCAC调试**************************/
    delete Debug_variable_1_explain        ;  //调试变量1
    delete Debug_variable_2_explain        ;  //调试变量2
    delete Debug_variable_3_explain        ;  //调试变量3
    delete Debug_variable_1_addr_explain   ;  //调试地址变量1
    delete Debug_variable_2_addr_explain   ;  //调试地址变量2
    delete Debug_variable_3_addr_explain   ;  //调试地址变量3
    delete Debug_memery_var_1_explain      ;  //调试内存变量1
    delete Debug_memery_var_2_explain      ;  //调试内存变量2
    delete Debug_memery_var_3_explain      ;  //调试内存变量3
    delete Input_Vol_revise_explain        ;  //输入电压系数
    delete Input_Cur_revise_explain        ;  //输入电流系数

    delete Voltage_1_5_revise_explain      ;  //1.5V电压系数
    delete Bus_Vol_revise_explain          ;  //母线电压系数
    delete Grid_A_AB_Vol_revise_explain    ;  //电网A相电压系数
    delete Grid_B_BC_Vol_revise_explain    ;  //电网B相电压系数
    delete Grid_C_CA_Vol_revise_explain    ;  //电网C相电压系数
    delete Output_A_Cur_revise_explain     ;  //输出A相电流系数
    delete Output_B_Cur_revise_explain     ;  //输出B相电流系数
    delete Output_C_Cur_revise_explain     ;  //输出C相电流系数
    delete INV_A_Vol_revise_explain        ;  //逆变A相电压系数
    delete INV_B_Vol_revise_explain        ;  //逆变B相电压系数
    delete INV_C_Vol_revise_explain        ;  //逆变C相电压系数
    delete INV_A_ind_Cur_revise_explain    ;  //逆变A相电感电流系数
    delete INV_B_ind_Cur_revise_explain    ;  //逆变B相电感电流系数
    delete INV_C_ind_Cur_revise_explain    ;  //逆变C相电感电流系数

    delete INV_On_off_flag_explain         ;  //开关机状态字
    delete Logic_state_explain             ;  //逻辑状态字
    delete INV_flag_explain                ;  //逆变状态字
    delete Grid_flag_explain               ;  //电网状态字
    delete Grid_protect_flag_explain       ;  //电网保护状态字
    delete PV_flag_explain                 ;  //电池电压状态字
    delete DC_bus_flag_explain             ;  //母线状态字
    delete INT_main_flag_explain           ;  //中断状态字
    delete parallel_signal_explain         ;  //并机状态字
    delete Monitor_Order_explain           ;  //监控命令状态字
    delete Bat_Infor_explain               ;  //电池信息字
    delete Bat_State_explain               ;  //电池状态字

    /***************************DCDC调试**************************/
    delete DC_Debug_variable_1_explain       ;  //调试变量1
    delete DC_Debug_variable_2_explain       ;  //调试变量2
    delete DC_Debug_variable_3_explain       ;  //调试变量3
    delete Current_ID_explain                ;   //当前模块号
    delete DC_INT_main_flag_explain          ;  //中断状态字
    delete DC_DC_bus_flag_explain            ;  //母线状态字
    delete DC_PV_flag_explain                ;  //电池电压状态字

    delete DC_Debug_variable_1_addr_explain  ;  //调试地址变量1
    delete DC_Debug_variable_2_addr_explain  ;  //调试地址变量2
    delete DC_Debug_variable_3_addr_explain  ;  //调试地址变量3
    delete DCONV_logic_explain               ;  //
    delete DC_INV_On_off_flag_explain        ;  //开关机状态字
    delete DC_parallel_signal_explain        ;  //并机状态字

    delete DC_Debug_memery_var_1_explain     ;  //调试内存变量1
    delete DC_Debug_memery_var_2_explain     ;  //调试内存变量2
    delete DC_Debug_memery_var_3_explain     ;  //调试内存变量3
    delete DC_Monitor_Order_explain          ;  //监控命令状态字
    delete DC_Bat_Infor_explain              ;  //电池信息字
    delete DC_Bat_State_explain              ;  //电池状态字

    delete ui;
}

/******语言初始化*******/
void MyWidget::LoadLanguageInit()
{
    translator = new QTranslator(qApp);
    if(LanguageType == CHINESE)//开机语言 中文
    {
        translator->load(":/Language/CN.qm");
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        LanguageType = CHINESE;
        ui->label_42->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area2.png);");
    }
    else if(LanguageType == ENGLISH)//开机语言 英文
    {
        translator->load(":/Language/EN.qm");
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        LanguageType = ENGLISH;
        ui->label_42->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area3.png);");
    }
}

/*****初始化内存空间******/
void MyWidget::MemoryAllocation()
{
    IPShow = true;
    mode_expelain = new OperMode(this,LanguageType);
    UpgradeInterface = new UpgradeTools(this);
    FaultTable = new FaultTableInterface(this,LanguageType);
    ButtonToTable = new SpecificationData(this);
    ViewLogicDiagram = new LogicDiagram(this);
    /****************QButtonGroup**************/

    new_ui_TabList<<ui->DCAC_Tab<<ui->DCDC_Tab<<ui->Lithium_Tab_2<<ui->Lead_Acid_Tab<<ui->MixedTime_Tab<<ui->Advanced_Tab_1
                 <<ui->Advanced_Tab_2<<ui->Advanced_Tab_3<<ui->ExternalDevice_Tab<<ui->DCAC_Debug_Tab<<ui->DCDC_Debug_Tab;

    //菜单
    Menu_Group = new QButtonGroup();
    Menu_Group->addButton(ui->Host_btn,1);
    Menu_Group->addButton(ui->Host_b_btn,1);
    Menu_Group->addButton(ui->Host_p_btn,1);
    Menu_Group->addButton(ui->RT_Data_btn,2);
    Menu_Group->addButton(ui->RT_Data_b_btn,2);
    Menu_Group->addButton(ui->RT_Data_p_btn,2);
    Menu_Group->addButton(ui->Record_btn,3);
    Menu_Group->addButton(ui->Record_b_btn,3);
    Menu_Group->addButton(ui->Record_p_btn,3);
    Menu_Group->addButton(ui->System_btn,4);
    Menu_Group->addButton(ui->System_b_btn,4);
    Menu_Group->addButton(ui->System_p_btn,4);
    Menu_Group->addButton(ui->Switch_p_btn,5);
    Menu_Group->addButton(ui->Sys_Inf_btn,6);
    Menu_Group->addButton(ui->Login_bt,7);

    //系统工作模式
    SystemMode_Group = new QButtonGroup();
    SystemMode_Group->addButton(ui->SelfUse_bt,Mode_SELF_USE);
    SystemMode_Group->addButton(ui->BetteryPriority_bt,Mode_BATTERY_PRIORITY);
    SystemMode_Group->addButton(ui->OptimalModel_bt,Mode_OPTIMAL_MODE);
    SystemMode_Group->addButton(ui->MixedMode_bt,Mode_MIXED_MODE);
    SystemMode_Group->addButton(ui->Manual_bt,Mode_MANUAL);

    ExitReturn_Group = new QButtonGroup();
    ExitReturn_Group->addButton(ui->IntrBack_bt,0);
    ExitReturn_Group->addButton(ui->Save_bt,1);
    ExitReturn_Group->addButton(ui->Exit_bt,2);

    //工作模式 说明
    ModeSwitch_Group = new QButtonGroup();
    ModeSwitch_Group->addButton(ui->BatArea_bt,BATTERY_AREA_EXP);
    ModeSwitch_Group->addButton(ui->SelfUseIntro_bt,Mode_SELF_USE_EXP);
    ModeSwitch_Group->addButton(ui->BatPriorityIntro_bt,Mode_BATTERY_PRIORITY_EXP);
    ModeSwitch_Group->addButton(ui->OptimalIntro_bt,Mode_OPTIMAL_MODE_EXP);
    ModeSwitch_Group->addButton(ui->MixedModeIntro_bt,Mode_MIXED_MODE_EXP);
    ModeSwitch_Group->addButton(ui->ManualIntro_bt,Mode_MANUAL_EXP);

    HomeClick_Group = new QButtonGroup();
    HomeClick_Group->addButton(ui->PV_btn,0);
    HomeClick_Group->addButton(ui->Bypass_Load_Btn,1);
    HomeClick_Group->addButton(ui->Bypass_Running_btn,2);
    HomeClick_Group->addButton(ui->Bypass_Batt_btn,3);
    HomeClick_Group->addButton(ui->Bypass_Grid_btn,4);
    HomeClick_Group->addButton(ui->Alarm_Button,5);


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
    DCACinsulation_detection_explain = new QPushButton;
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
    DCDCinsulation_detection_explain  = new QPushButton;

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
    Work_mode_explain = new QPushButton;                //工作模式说明
    Output_power_factor_explain = new QPushButton;      //输出功率因素说明
    Output_reactive_power_explain = new QPushButton;    //输出无功功率说明
    Constant_current_explain = new QPushButton;         //恒流说明
    Constant_voltage_explain = new QPushButton;         //恒压说明
    Control_mode_explain = new QPushButton;             //控制模式说明
    Machine_number_explain = new QPushButton;           //设备号说明
    Parallel_explain = new QPushButton;                 //并机说明
    G_Constant_power_explain = new QPushButton;
    Grid_capacity_explain = new QPushButton;            //电网容量说明
    DG_Charging_power_limit= new QPushButton;           //柴发充电功率限制

    /***************************DC/AC参数**********************************/
    Work_parttern_explain = new QPushButton;                     //DCDC工作模式说明
    Boost_or_Buck_explain = new QPushButton;                     //升/降压说明
    Voltage_level_explain = new QPushButton;                     //电压等级说明
    Current_value_explain = new QPushButton;                     //电流值说明
    OuterLoopControl_explain = new QPushButton;                 //
    IV_curve_scanning_explain = new QPushButton;                //静脉扫描
    IV_curve_scanning_low_explain = new QPushButton;            //低电压静脉扫描
    IV_curve_scanning_high_explain = new QPushButton;           //高电压静脉扫描

    /***************************电池设置 锂电****************************/

    DOD_OnGrid_explain = new QPushButton;    //并网DOD说明
    DOD_OffGrid_explain = new QPushButton;   //离网DOD说明
    Charge_Volt_Upper_Limit_explain = new QPushButton;   //充电电压上限说明
    Charge_Volt_upper_Limit_delta_explain = new QPushButton; //充电电压上限回差说明
    Disc_Volt_lower_Limit_explain = new QPushButton;  //放电电压限制说明
    Discharge_Volt_upper_Limit_delta_explain = new QPushButton; //放电电压下限回差说明
    Charge_Current_Limit_explain = new QPushButton;  //充电电流限制说明
    Discharge_Current_Limit_explain = new QPushButton;  //放电电流限制说明
    Gen_turn_off_SOC_explain = new QPushButton;    //柴发关闭SOC说明
    Gen_turn_on_SOC_explain = new QPushButton;     //柴发开启SOC说明
    ForceCharge_start_explain = new QPushButton; //强充开启说明
    ForceCharge_top_explain = new QPushButton;   // 强充结束说明
    Relese_Charge_mark_explain = new QPushButton;    //释放禁充标志说明
    Relese_discharge_mark_explain = new QPushButton;    //释放禁放标志说明
    DOD_Protection_Release_SOC_explain = new QPushButton;//DOD保护解除SOC
    Cell_Voltage_max_explain = new QPushButton;//最高单体电压
    Cell_Voltage_max_delta_explain = new QPushButton;//最高单体电压回差
    Cell_Voltage_min_explain = new QPushButton;//最低单体电压
    Cell_Voltage_min_delta_explain = new QPushButton;//最低单体电压回差
    DCAC_cell_protect_explain = new QPushButton;//DCAC单体保护电压
    DCAC_cell_delta_explain = new QPushButton;//DCAC单体保护电压回差

    /***************************电池设置 铅酸****************************/

    Capacity_explain  = new QPushButton;
    Cell_number_2V_explain  = new QPushButton;
    Bat_float_vol_explain  = new QPushButton;
    Bat_filling_vol_explain  = new QPushButton;
    Charge_limiting_value_explain  = new QPushButton;
    Discharge_limiting_value_explain  = new QPushButton;
    Generator_turn_off_SOC_B1_explain  = new QPushButton;
    Generator_turn_on_SOC_A1_explain  = new QPushButton;
    Grid_off_EOD_explain  = new QPushButton;
    Grid_on_EOD_explain  = new QPushButton;
    DCACReferenceVoltage_explain  = new QPushButton;
    Uniform_To_Flushing_current_explain  = new QPushButton;
    Flushing_To_Uniform_current_explain  = new QPushButton;

    /*******************************自动运行*******************************/
    Check1_explain = new QPushButton;Check2_explain= new QPushButton;Check3_explain= new QPushButton;
    Check4_explain= new QPushButton;Check5_explain= new QPushButton;Check6_explain= new QPushButton;
    Check7_explain= new QPushButton;Check8_explain= new QPushButton;Check9_explain= new QPushButton;
    Check10_explain= new QPushButton;Check11_explain= new QPushButton;Check12_explain= new QPushButton;
    Check13_explain= new QPushButton;Check14_explain= new QPushButton;Check15_explain= new QPushButton;
    Check16_explain= new QPushButton;Check17_explain= new QPushButton;Check18_explain= new QPushButton;
    Check19_explain= new QPushButton;Check20_explain= new QPushButton;

    Peak1_explain = new QPushButton;Peak2_explain= new QPushButton;Peak3_explain= new QPushButton;
    Peak4_explain= new QPushButton;Peak5_explain= new QPushButton;Peak6_explain= new QPushButton;
    Peak7_explain= new QPushButton;Peak8_explain= new QPushButton;Peak9_explain= new QPushButton;
    Peak10_explain= new QPushButton;Peak11_explain= new QPushButton;Peak12_explain= new QPushButton;
    Peak13_explain= new QPushButton;Peak14_explain= new QPushButton;Peak15_explain= new QPushButton;
    Peak16_explain= new QPushButton;Peak17_explain= new QPushButton;Peak18_explain= new QPushButton;
    Peak19_explain= new QPushButton;Peak20_explain= new QPushButton;

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

    Generator1_explain  = new QPushButton;
    Generator2_explain  = new QPushButton;
    Generator3_explain  = new QPushButton;
    Generator4_explain  = new QPushButton;
    Generator5_explain  = new QPushButton;
    Generator6_explain  = new QPushButton;
    Generator7_explain  = new QPushButton;
    Generator8_explain  = new QPushButton;
    Generator9_explain  = new QPushButton;
    Generator10_explain = new QPushButton;
    Generator11_explain = new QPushButton;
    Generator12_explain = new QPushButton;
    Generator13_explain = new QPushButton;
    Generator14_explain = new QPushButton;
    Generator15_explain = new QPushButton;
    Generator16_explain = new QPushButton;
    Generator17_explain = new QPushButton;
    Generator18_explain = new QPushButton;
    Generator19_explain = new QPushButton;
    Generator20_explain = new QPushButton;

    MixedModeButtonList = new QList<QPushButton*>;
    MixedModeButtonList->append(Check1_explain);
    MixedModeButtonList->append(Check2_explain);
    MixedModeButtonList->append(Check3_explain);
    MixedModeButtonList->append(Check4_explain);
    MixedModeButtonList->append(Check5_explain);
    MixedModeButtonList->append(Check6_explain);
    MixedModeButtonList->append(Check7_explain);
    MixedModeButtonList->append(Check8_explain);
    MixedModeButtonList->append(Check9_explain);
    MixedModeButtonList->append(Check10_explain);
    MixedModeButtonList->append(Check11_explain);
    MixedModeButtonList->append(Check12_explain);
    MixedModeButtonList->append(Check13_explain);
    MixedModeButtonList->append(Check14_explain);
    MixedModeButtonList->append(Check15_explain);
    MixedModeButtonList->append(Check16_explain);
    MixedModeButtonList->append(Check17_explain);
    MixedModeButtonList->append(Check18_explain);
    MixedModeButtonList->append(Check19_explain);
    MixedModeButtonList->append(Check20_explain);

    MixedModeButtonList->append(Peak1_explain);
    MixedModeButtonList->append(Peak2_explain);
    MixedModeButtonList->append(Peak3_explain);
    MixedModeButtonList->append(Peak4_explain);
    MixedModeButtonList->append(Peak5_explain);
    MixedModeButtonList->append(Peak6_explain);
    MixedModeButtonList->append(Peak7_explain);
    MixedModeButtonList->append(Peak8_explain);
    MixedModeButtonList->append(Peak9_explain);
    MixedModeButtonList->append(Peak10_explain);
    MixedModeButtonList->append(Peak11_explain);
    MixedModeButtonList->append(Peak12_explain);
    MixedModeButtonList->append(Peak13_explain);
    MixedModeButtonList->append(Peak14_explain);
    MixedModeButtonList->append(Peak15_explain);
    MixedModeButtonList->append(Peak16_explain);
    MixedModeButtonList->append(Peak17_explain);
    MixedModeButtonList->append(Peak18_explain);
    MixedModeButtonList->append(Peak19_explain);
    MixedModeButtonList->append(Peak20_explain);

    MixedModeButtonList->append(Start_T1_explain);
    MixedModeButtonList->append(Start_T2_explain);
    MixedModeButtonList->append(Start_T3_explain);
    MixedModeButtonList->append(Start_T4_explain);
    MixedModeButtonList->append(Start_T5_explain);
    MixedModeButtonList->append(Start_T6_explain);
    MixedModeButtonList->append(Start_T7_explain);
    MixedModeButtonList->append(Start_T8_explain);
    MixedModeButtonList->append(Start_T9_explain);
    MixedModeButtonList->append(Start_T10_explain);
    MixedModeButtonList->append(Start_T11_explain);
    MixedModeButtonList->append(Start_T12_explain);
    MixedModeButtonList->append(Start_T13_explain);
    MixedModeButtonList->append(Start_T14_explain);
    MixedModeButtonList->append(Start_T15_explain);
    MixedModeButtonList->append(Start_T16_explain);
    MixedModeButtonList->append(Start_T17_explain);
    MixedModeButtonList->append(Start_T18_explain);
    MixedModeButtonList->append(Start_T19_explain);
    MixedModeButtonList->append(Start_T20_explain);

    MixedModeButtonList->append(End_T1_explain);
    MixedModeButtonList->append(End_T2_explain);
    MixedModeButtonList->append(End_T3_explain);
    MixedModeButtonList->append(End_T4_explain);
    MixedModeButtonList->append(End_T5_explain);
    MixedModeButtonList->append(End_T6_explain);
    MixedModeButtonList->append(End_T7_explain);
    MixedModeButtonList->append(End_T8_explain);
    MixedModeButtonList->append(End_T9_explain);
    MixedModeButtonList->append(End_T10_explain);
    MixedModeButtonList->append(End_T11_explain);
    MixedModeButtonList->append(End_T12_explain);
    MixedModeButtonList->append(End_T13_explain);
    MixedModeButtonList->append(End_T14_explain);
    MixedModeButtonList->append(End_T15_explain);
    MixedModeButtonList->append(End_T16_explain);
    MixedModeButtonList->append(End_T17_explain);
    MixedModeButtonList->append(End_T18_explain);
    MixedModeButtonList->append(End_T19_explain);
    MixedModeButtonList->append(End_T20_explain);

    MixedModeButtonList->append(State1_explain);
    MixedModeButtonList->append(State2_explain);
    MixedModeButtonList->append(State3_explain);
    MixedModeButtonList->append(State4_explain);
    MixedModeButtonList->append(State5_explain);
    MixedModeButtonList->append(State6_explain);
    MixedModeButtonList->append(State7_explain);
    MixedModeButtonList->append(State8_explain);
    MixedModeButtonList->append(State9_explain);
    MixedModeButtonList->append(State10_explain);
    MixedModeButtonList->append(State11_explain);
    MixedModeButtonList->append(State12_explain);
    MixedModeButtonList->append(State13_explain);
    MixedModeButtonList->append(State14_explain);
    MixedModeButtonList->append(State15_explain);
    MixedModeButtonList->append(State16_explain);
    MixedModeButtonList->append(State17_explain);
    MixedModeButtonList->append(State18_explain);
    MixedModeButtonList->append(State19_explain);
    MixedModeButtonList->append(State20_explain);

    MixedModeButtonList->append(Power1_explain);
    MixedModeButtonList->append(Power2_explain);
    MixedModeButtonList->append(Power3_explain);
    MixedModeButtonList->append(Power4_explain);
    MixedModeButtonList->append(Power5_explain);
    MixedModeButtonList->append(Power6_explain);
    MixedModeButtonList->append(Power7_explain);
    MixedModeButtonList->append(Power8_explain);
    MixedModeButtonList->append(Power9_explain);
    MixedModeButtonList->append(Power10_explain);
    MixedModeButtonList->append(Power11_explain);
    MixedModeButtonList->append(Power12_explain);
    MixedModeButtonList->append(Power13_explain);
    MixedModeButtonList->append(Power14_explain);
    MixedModeButtonList->append(Power15_explain);
    MixedModeButtonList->append(Power16_explain);
    MixedModeButtonList->append(Power17_explain);
    MixedModeButtonList->append(Power18_explain);
    MixedModeButtonList->append(Power19_explain);
    MixedModeButtonList->append(Power20_explain);

    MixedModeButtonList->append(Generator1_explain);
    MixedModeButtonList->append(Generator2_explain);
    MixedModeButtonList->append(Generator3_explain);
    MixedModeButtonList->append(Generator4_explain);
    MixedModeButtonList->append(Generator5_explain);
    MixedModeButtonList->append(Generator6_explain);
    MixedModeButtonList->append(Generator7_explain);
    MixedModeButtonList->append(Generator8_explain);
    MixedModeButtonList->append(Generator9_explain);
    MixedModeButtonList->append(Generator10_explain);
    MixedModeButtonList->append(Generator11_explain);
    MixedModeButtonList->append(Generator12_explain);
    MixedModeButtonList->append(Generator13_explain);
    MixedModeButtonList->append(Generator14_explain);
    MixedModeButtonList->append(Generator15_explain);
    MixedModeButtonList->append(Generator16_explain);
    MixedModeButtonList->append(Generator17_explain);
    MixedModeButtonList->append(Generator18_explain);
    MixedModeButtonList->append(Generator19_explain);
    MixedModeButtonList->append(Generator20_explain);


    /**********************系统消息*************************/

    pButton_Version = new QButtonGroup();
    pButton_Version->addButton(ui->interface_explain_btn_2, 0);
    pButton_Version->addButton(ui->port_explain_btn_2, 1);
    pButton_Version->addButton(ui->ip_explain_btn_2, 2);
    pButton_Version->addButton(ui->netmask_explain_btn_2, 3);
    pButton_Version->addButton(ui->gateway_explain_btn_2, 4);
    pButton_Version->addButton(ui->server_ip_explain_btn_2, 5);
    pButton_Version->addButton(ui->ok_2, 6);

    MonitoringVersion_explain       = new QPushButton;
    DCAC_SysProtocol_Version_explain= new QPushButton;
    DCAC_ConverterVersion_explain   = new QPushButton;
    DCAC_CPLD_Version_explain       = new QPushButton;
    DCDC_SysProtocol_Version_explain= new QPushButton;
    DCDC_ConverterVersion_explain   = new QPushButton;
    DCDC_CPLD_Version_explain       = new QPushButton;
    SN_explain                      = new QPushButton;

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
    Grade9_explain      = new QPushButton;
    Grade10_explain     = new QPushButton;
    Grade11_explain     = new QPushButton;
    Grade12_explain     = new QPushButton;
    Grade13_explain     = new QPushButton;
    Grade14_explain     = new QPushButton;
    Grade15_explain     = new QPushButton;
    StartTime_explain   = new QPushButton;
    StartTime2_explain  = new QPushButton;
    StartTime3_explain  = new QPushButton;
    StartTime4_explain  = new QPushButton;
    StartTime5_explain  = new QPushButton;
    StartTime6_explain  = new QPushButton;
    StartTime7_explain  = new QPushButton;
    StartTime8_explain  = new QPushButton;
    StartTime9_explain  = new QPushButton;
    StartTime10_explain = new QPushButton;
    StartTime11_explain = new QPushButton;
    StartTime12_explain = new QPushButton;
    StartTime13_explain = new QPushButton;
    StartTime14_explain = new QPushButton;
    StartTime15_explain = new QPushButton;
    EndTime_explain     = new QPushButton;
    EndTime2_explain    = new QPushButton;
    EndTime3_explain    = new QPushButton;
    EndTime4_explain    = new QPushButton;
    EndTime5_explain    = new QPushButton;
    EndTime6_explain    = new QPushButton;
    EndTime7_explain    = new QPushButton;
    EndTime8_explain    = new QPushButton;
    EndTime9_explain    = new QPushButton;
    EndTime10_explain   = new QPushButton;
    EndTime11_explain   = new QPushButton;
    EndTime12_explain   = new QPushButton;
    EndTime13_explain   = new QPushButton;
    EndTime14_explain   = new QPushButton;
    EndTime15_explain   = new QPushButton;
    Describe_explain    = new QPushButton;
    Describe2_explain   = new QPushButton;
    Describe3_explain   = new QPushButton;
    Describe4_explain   = new QPushButton;
    Describe5_explain   = new QPushButton;
    Describe6_explain   = new QPushButton;
    Describe7_explain   = new QPushButton;
    Describe8_explain   = new QPushButton;
    Describe9_explain   = new QPushButton;
    Describe10_explain  = new QPushButton;
    Describe11_explain  = new QPushButton;
    Describe12_explain  = new QPushButton;
    Describe13_explain  = new QPushButton;
    Describe14_explain  = new QPushButton;
    Describe15_explain  = new QPushButton;

    /***************************操作日志**********************************/
    ModificationTime_explain    = new QPushButton;
    ModificationTime2_explain   = new QPushButton;
    ModificationTime3_explain   = new QPushButton;
    ModificationTime4_explain   = new QPushButton;
    ModificationTime5_explain   = new QPushButton;
    ModificationTime6_explain   = new QPushButton;
    ModificationTime9_explain   = new QPushButton;
    ModificationTime11_explain  = new QPushButton;
    ModificationTime12_explain  = new QPushButton;
    EventRecord_explain         = new QPushButton;
    EventRecord2_explain        = new QPushButton;
    EventRecord3_explain        = new QPushButton;
    EventRecord4_explain        = new QPushButton;
    EventRecord5_explain        = new QPushButton;
    EventRecord6_explain        = new QPushButton;
    EventRecord9_explain        = new QPushButton;
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
    ProtocolVersion_explain = new QPushButton;   //协议版本说明
    UserPassPort_explain = new QPushButton;  //用户密码说明
    RootPassport_explain = new QPushButton;  //超级权限说明
    Language_explain = new QPushButton;  //语言说明
    System_upgrade_explain = new QPushButton;    //系统升级说明
    View_LogicDiagram_explain = new QPushButton; //逻辑图查看说明
    Sounds_explain = new QPushButton;    //声音说明
    BmsComFaultTime_explain = new QPushButton;
    EMSComFaultModel_explain = new QPushButton;
    DG_ECP_explain = new QPushButton;
    DG_FCP_explain = new QPushButton;
    Grid_ECP_explain = new QPushButton;
    Grid_FCP_explain = new QPushButton;
    Grid_EDP_explain = new QPushButton;
    Grid_FDP_explain = new QPushButton;
    BatteryCapacityAlarm_explain = new QPushButton;
    BatteryCurrentFeedbackType_explain = new QPushButton;
    MeterModel_explain = new QPushButton;
    ElectricityMeterAntiBackflow_explain = new QPushButton;

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
    Machine_type_explain = new QPushButton;  //机器型号说明
    Machine_capacity_explain = new QPushButton;  //机器容量说明
    Output_Fre_grade_explain = new QPushButton;  //输出频率等级说明
    Output_vol_level_explain = new QPushButton;  //输出电压等级说明
    Converter_side_vol_level_explain = new QPushButton;  //逆变电压等级说明
    Output_reactive_power_mode_explain = new QPushButton;  //输出无功方式说明
    Grid_recovery_time_explain = new QPushButton;  //电网恢复并网时间说明
    Grid_connected_mode_of_Inv_explain = new QPushButton;  //逆变器并网方式说明

    Pshedding_Freq_explain = new QPushButton;  //过频降载说明
    QP_curve_explain = new QPushButton;  //QP曲线说明
    CV_parallel_explain = new QPushButton;  //恒压并机说明
    Module_Number_explain = new QPushButton;  //模块数量说明
    Restore_factory_explain = new QPushButton;  //恢复出厂说明
    BackupSetParameters_explain         = new QPushButton;
    RestoreBackupSetParameters_explain  = new QPushButton;
    Clear_Data_explain = new QPushButton;  //清除数据说明
    Machine_Type_explain = new QPushButton;  //机架说明
    Module_max_explain = new QPushButton;  //最大模块数说明
    Module_min_explain = new QPushButton;  //最小模块数说明
    Insulation_detection_enable_DCDC_explain = new QPushButton;  //DCDC绝缘监测使能说明
    Insulation_detection_enable_DCAC_explain = new QPushButton;  //DCAC绝缘监测使能说明
    Grid_expansion_explain = new QPushButton;

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
    /*DO_1_Enable_explain = new QPushButton;
    DO_1_NC_O_explain   = new QPushButton;
    DO_1_Action_explain = new QPushButton;

    //输出干接点2说明
    DO_2_Enable_explain = new QPushButton;
    DO_2_NC_O_explain   = new QPushButton;
    DO_2_Action_explain = new QPushButton;

    //输出干接点3说明
    DO_3_Enable_explain = new QPushButton;
    DO_3_NC_O_explain   = new QPushButton;
    DO_3_Action_explain = new QPushButton;*/

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



/*******初始化界面*********/
void MyWidget::UIPageInit()
{
    FirstPage();  //主页点击
    RunStatePage();//实时数据
    Information_tbnt_released();//系统信息表格初始化
    WorkingModeInit();//基础&高级设置表格初始化
    LCDSetting();   //实时刷新时间
    RecordPage();//记录页面
    SetControlToTable();//设置控件到表格
}
/************触摸点击**********/
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

/******切换语言*****/
void MyWidget::ChangeLanguage_btn_clicked()
{
    if(LanguageType == CHINESE)
    {
        LanguageType = ENGLISH;//如果当前是中文，则切英文
        qApp->removeTranslator(translator);
        ui->retranslateUi(this);
        ui->label_42->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area3.png);");

    }
    else if(LanguageType == ENGLISH)
    {
        LanguageType = CHINESE;//如果当前是英文，则切中文
        translator->load(":/Language/CN.qm");
        qApp->installTranslator(translator);
        ui->retranslateUi(this);
        ui->label_42->setStyleSheet("border-image: url(:/new_ui/UI/Battery_area2.png);");
    }
    delete ButtonToTable;
    mode_expelain = new OperMode(this,LanguageType);
    UpgradeInterface = new UpgradeTools(this);
    FaultTable = new FaultTableInterface(this,LanguageType);
    ButtonToTable = new SpecificationData(this);
    ViewLogicDiagram = new LogicDiagram(this);


    UIPageInit();       //初始化界面

    ReloadLabel();      //切换语言重新加载Lable
}

//升级界面
void MyWidget::UpgradeInterface_clicked()
{
    int reply = QMessageBox::question(this, tr("Upgrade prompt")\
                          ,tr("1. Make sure to press the EPO button before upgrading.\n"
                              "2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module."), tr("Next"),tr("Cancel"));
    if (reply == 0)
    {
        // 点击了"Next"按钮的处理逻辑
        if(UpgradeInterface->isHidden())
        {
            UpgradeInterface->show();
        }
        else
        {
            UpgradeInterface->hide();
        }
    }
    else if (reply == 1)
    {
        // 点击了"Cancel"按钮的处理逻辑
        return ;
    }

}

//充电限流值计算逻辑图点击
void MyWidget::LogicDiagramChargingCurrentLimitValues_clicked()
{
    int reply = QMessageBox::question(this, tr("DCAC cell protect voltage"),
                                      tr("When the battery current feedback type is 'Calculated Value', "
                                         "and the highest cell voltage in the battery reaches the cell protection voltage minus the cell protection voltage threshold,"
                                         "the Inverter will enable linear current limiting to restrict the charging current at that time."),
                                      tr("Click to view the logic diagram"),tr("OK"));
    if (reply == 0)
    {
        // 点击了"Click to view the logic diagram"按钮的处理逻辑
        if(ViewLogicDiagram->isHidden())
        {
            ViewLogicDiagram->show();
        }
        else
        {
            ViewLogicDiagram->hide();
        }
    }
    else if (reply == 1)
    {
        // 点击了"OK"按钮的处理逻辑
        return ;
    }
}


//函数关联
void MyWidget::LinkRelationship()
{
    connect(timer, SIGNAL(timeout()), this, SLOT(onTimerOut()));    //关联定时器，以便实时更新时间
    connect(Menu_Group, SIGNAL(buttonClicked(int)), this,SLOT(My_menuAction(int)));//菜单
    connect(SystemMode_Group, SIGNAL(buttonClicked(int)), this,SLOT(WordingMode(int)));//系统控制模式
    connect(ModeSwitch_Group, SIGNAL(buttonClicked(int)), this,SLOT(ModeSwitchExplain(int)));//切换 模式说明
    connect(HomeClick_Group, SIGNAL(buttonClicked(int)), this,SLOT(Home_Click(int)));//主页点击
    connect(ExitReturn_Group, SIGNAL(buttonClicked(int)), this,SLOT(Return(int)));//返回函数
    connect(System_upgrade_explain, SIGNAL(clicked(bool)), this, SLOT(UpgradeInterface_clicked())); //升级界面关联
    connect(View_LogicDiagram_explain, SIGNAL(clicked(bool)), this, SLOT(LogicDiagramChargingCurrentLimitValues_clicked())); //逻辑图查看关联
//    connect( ui->combox_Account, SIGNAL(currentIndexChanged(int)), this , SLOT(combox_Account_change(int)));//菜单页头像切换
    connect(pButton_BatteryData, SIGNAL(buttonClicked(int)), this,SLOT(BatteryData_clicked(int)));//电池数据
    connect(pButton_Version, SIGNAL(buttonClicked(int)), this,SLOT(SystemlnformationVer_clicked(int)));//系统信息相关按钮的说明
    connect(ui->ChangeLanguage_btn, SIGNAL(clicked(bool)), this, SLOT(ChangeLanguage_btn_clicked()));//切换语言点击槽


}

//实时数据
void MyWidget::RunStatePage()
{
    MPS_Data_Tab();//MPS数据初始化
    ModuleState_Tab();//MPS状态表初始化
}

/************LCD标签初始化和定时器设置***********/
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
    Converter_Tablist1  << tr("Inv. Voltage(AB)") << tr("Inv. Voltage(BC)") << tr("Inv. Voltage(CA)")
                        << tr("Inv. Current(A)") << tr("Inv. Current(B)")<< tr("Inv. Current(C)")
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
    ui->RT_Machine_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);//表格自适应窗口大小
    ui->RT_Machine_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->RT_Machine_tableWidget->verticalHeader()->setMinimumSectionSize(50);
    ui->RT_Machine_tableWidget->verticalHeader()->setMaximumSectionSize(60);

    /*ui->RT_Machine_tableWidget->setColumnWidth(0,200);
    ui->RT_Machine_tableWidget->setColumnWidth(1,200);
    ui->RT_Machine_tableWidget->setColumnWidth(2,200);
    ui->RT_Machine_tableWidget->horizontalHeader()->setStretchLastSection(3);
    ui->RT_Machine_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    for(int i=0;i<9;i++)
    {
        ui->RT_Machine_tableWidget->setRowHeight(i,42);
    }*/
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
    PV_Tablist1  << tr("PV Voltage H") << tr("PV Current H") << tr("PV Power H")
                        << tr("PV Voltage L") << tr("PV Current L")<< tr("PV Power L")<< tr("Leakage current");
    QStringList PV_Tablist2;
    PV_Tablist2  << tr("Bus_H_Vol(+)") << tr("Bus_H_Vol(-)") << tr("Bus_L_Vol(+)")<< tr("Bus_L_Vol(-)")
                 << tr("IGBT Temperature")<< tr("PositiveInuslation")<< tr("NegativeInuslation");
    ui->RT_DCDC_tableWidget->setColumnCount(4);
    ui->RT_DCDC_tableWidget->setRowCount(PV_Tablist1.size());
    ui->RT_DCDC_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_DCDC_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_DCDC_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_DCDC_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_DCDC_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_DCDC_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_DCDC_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_DCDC_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList PV_TabList;
    PV_TabList << tr("Name") << tr("Value") << tr("Name") << tr("Value");
    ui->RT_DCDC_tableWidget->setHorizontalHeaderLabels(PV_TabList);
    ui->RT_DCDC_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->RT_DCDC_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->RT_DCDC_tableWidget->verticalHeader()->setMinimumSectionSize(50);
    ui->RT_DCDC_tableWidget->verticalHeader()->setMaximumSectionSize(60);
    /*ui->RT_DCDC_tableWidget->setColumnWidth(0,200);
    ui->RT_DCDC_tableWidget->setColumnWidth(1,200);
    ui->RT_DCDC_tableWidget->setColumnWidth(2,200);
    ui->RT_DCDC_tableWidget->horizontalHeader()->setStretchLastSection(3);
    for(int i=0;i<7;i++)
    {
        ui->RT_DCDC_tableWidget->setRowHeight(i,45);
    }*/
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
    RT_Grid_Tablist1  << tr("Grid Voltage(AB)") << tr("Grid Voltage(BC)") << tr("Grid Voltage(CA)")
                        << tr("Grid Current(A)") << tr("Grid Current(B)")<< tr("Grid Current(C)");
    QStringList RT_Grid_Tablist2;
    RT_Grid_Tablist2  << tr("Grid active power") << tr("Grid reactive power") << tr("Grid apparent power")<< tr("Grid power factor")
                        << tr("Grid frequency");
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
    ui->RT_Grid_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->RT_Grid_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->RT_Grid_tableWidget->verticalHeader()->setMinimumSectionSize(50);
    ui->RT_Grid_tableWidget->verticalHeader()->setMaximumSectionSize(60);
    /*ui->RT_Grid_tableWidget->setColumnWidth(0,200);
    ui->RT_Grid_tableWidget->setColumnWidth(1,200);
    ui->RT_Grid_tableWidget->setColumnWidth(2,200);
    ui->RT_Grid_tableWidget->horizontalHeader()->setStretchLastSection(3);
    for(int i=0;i<6;i++)
    {
        ui->RT_Grid_tableWidget->setRowHeight(i,45);
    }*/
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
    Load_Tablist1  << tr("Load Voltage(AB)") << tr("Load Voltage(BC)") << tr("Load Voltage(CA)")
                   << tr("Load Current(A)") << tr("Load Current(B)")<< tr("Load Current(C)");
    QStringList Load_Tablist2;
    Load_Tablist2  << tr("Load active power") << tr("Load reactive power") << tr("Load apparent power")<< tr("Load power factor")
                   << tr("Load frequency");
    ui->RT_Load_tableWidget->setColumnCount(4);
    ui->RT_Load_tableWidget->setRowCount(Load_Tablist1.size());
    ui->RT_Load_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->RT_Load_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->RT_Load_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->RT_Load_tableWidget->setShowGrid(true);//设置显示格子
    ui->RT_Load_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->RT_Load_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->RT_Load_tableWidget->setStyleSheet("selection-background-color:lightblue;");
    ui->RT_Load_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见

    QStringList Load_Tablist;
    Load_Tablist << tr("Name") << tr("Value") << tr("Name") << tr("Value");
    ui->RT_Load_tableWidget->setHorizontalHeaderLabels(Load_Tablist);
    ui->RT_Load_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->RT_Load_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->RT_Load_tableWidget->verticalHeader()->setMinimumSectionSize(50);
    ui->RT_Load_tableWidget->verticalHeader()->setMaximumSectionSize(60);
    /*ui->RT_Load_tableWidget->setColumnWidth(0,200);
    ui->RT_Load_tableWidget->setColumnWidth(1,200);
    ui->RT_Load_tableWidget->setColumnWidth(2,200);
    ui->RT_Load_tableWidget->horizontalHeader()->setStretchLastSection(3);
    for(int i=0;i<6;i++)
    {
        ui->RT_Load_tableWidget->setRowHeight(i,45);
    }*/


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
                    << tr("Output breaker") << tr("Output contactor")<< tr("Grid breaker")<<tr("DCAC insulation detection")
                    << tr("Start generator signal")<< tr("DO2")<< tr("DO3");
    QStringList State_Tablist2;
    State_Tablist2  << tr("DCAC Converter available") << tr("DC Soft start") << tr("Converter status")<< tr("Reactive power Regulation")
                    << tr("LVRT")<< tr("DI1")<< tr("DI2")<< tr("DI3")<< tr("DI4")<< tr("DI5")<< tr("DI6");
    QStringList State_Tablist3;
    State_Tablist3  << tr("DCDC Converter available")<< tr("Run mode")<< tr("Soft start status boost")<< tr("Soft start status buck")
                    << tr("Contactor status boost")<< tr("Contactor status buck")<< tr("Converter status")<<tr("DCDC insulation detection");

    ui->State_tableWidget->setColumnCount(6);
    ui->State_tableWidget->setRowCount(12);
    ui->State_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->State_tableWidget->verticalHeader()->setVisible(false);//设置垂直头不可见
    ui->State_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->State_tableWidget->setShowGrid(true);//设置显示格子
    ui->State_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->State_tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->State_tableWidget->horizontalHeader()->setVisible(true);    //设置竖直标题可见
    ui->State_tableWidget->setStyleSheet("selection-background-color:lightblue;");

    QStringList State_Tablist;
    State_Tablist << tr("Name") << tr("Value") << tr("Name") << tr("Value")<< tr("Name") << tr("Value");
    ui->State_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->State_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->State_tableWidget->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值
    ui->State_tableWidget->setHorizontalHeaderLabels(State_Tablist);


    /*ui->State_tableWidget->setColumnWidth(0,220);
    ui->State_tableWidget->setColumnWidth(1,90);
    ui->State_tableWidget->setColumnWidth(2,220);
    ui->State_tableWidget->setColumnWidth(3,100);
    ui->State_tableWidget->setColumnWidth(4,220);
    ui->State_tableWidget->setColumnWidth(5,90);
    for (int i = 0; i < 12; ++i) {
        ui->State_tableWidget->setRowHeight(i, 45);
    }*/
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



//系统信息槽
void MyWidget::Information_tbnt_released()
{
    ui->EquipmentInfor_tableWidget_2->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->EquipmentInfor_tableWidget_2->setShowGrid(true);//设置显示格子
    ui->EquipmentInfor_tableWidget_2->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
    ui->EquipmentInfor_tableWidget_2->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->EquipmentInfor_tableWidget_2->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->EquipmentInfor_tableWidget_2->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值

    SystemMessages(ui->EquipmentInfor_tableWidget_2);//系统信息页说明
}

//数据报表 表格初始化
void MyWidget::Data_Report()
{
    QStringList ReportData_Tablist;
    ReportData_Tablist  << tr("PV power generation") << tr("Load electricity consumption") << tr("Battery charge")
                        << tr("Battery discharge") << tr("Grid buy")<< tr("Grid sell");
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
    ui->Report_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->Report_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->Report_tableWidget->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值

    for(int i = 0; i < ReportData_Tablist.size(); i++)
    {
        ui->Report_tableWidget->setItem(i, 0, new QTableWidgetItem(ReportData_Tablist.at(i)));
        ui->Report_tableWidget->item(i, 0)->setTextAlignment(Qt::AlignCenter);
//        ui->Report_tableWidget->setRowHeight(i, 45);
    }
    DataReportMessages(ui->Report_tableWidget); //数据报表页说明
}
//历史记录 表格初始化
void MyWidget::History()
{
    QStringList table_h_headers;
    table_h_headers.clear();
    table_h_headers << tr("Level") << tr("Start Time") << tr("End Time") << tr("Description");
    ui->Historicalfailure_tableWidget->setColumnCount(table_h_headers.size());
    ui->Historicalfailure_tableWidget->setRowCount(15);
    ui->Historicalfailure_tableWidget->setHorizontalHeaderLabels(table_h_headers);
    ui->Historicalfailure_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Historicalfailure_tableWidget->verticalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Historicalfailure_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Historicalfailure_tableWidget->setShowGrid(true);//设置显示格子
    ui->Historicalfailure_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    for (int i = 1; i < ui->Historicalfailure_tableWidget->columnCount(); ++i) {
        ui->Historicalfailure_tableWidget->horizontalHeader()->setSectionResizeMode(i, QHeaderView::Stretch);
    }
    ui->Historicalfailure_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->Historicalfailure_tableWidget->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值

    /*ui->Historicalfailure_tableWidget->setColumnWidth(1,180);
    ui->Historicalfailure_tableWidget->setColumnWidth(2,180);
    ui->Historicalfailure_tableWidget->horizontalHeader()->setStretchLastSection(true);
    for (int i = 0; i < 15; ++i)
    {
        ui->Historicalfailure_tableWidget->setRowHeight(i, 40);
    }*/

    Grade_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade2_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade3_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade4_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade5_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade6_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade7_explain->setStyleSheet("background-color:rgb(200, 0, 0);");
    Grade8_explain->setStyleSheet("background-color:rgb(200, 0, 0);");



    HistoryRecord(ui->Historicalfailure_tableWidget);   //历史记录页说明
}
//操作日志 表格初始化
void MyWidget::OperationLog()
{
    QStringList Ope_headers;
    Ope_headers.clear();
    Ope_headers << tr("Modification Time") << tr("Record Event");
    ui->Operation_tableWidget->setColumnCount(Ope_headers.size());
    ui->Operation_tableWidget->setRowCount(9);
    ui->Operation_tableWidget->setHorizontalHeaderLabels(Ope_headers);
    ui->Operation_tableWidget->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
     ui->Operation_tableWidget->verticalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
    ui->Operation_tableWidget->setFrameShape(QFrame::NoFrame);//设置无边框
    ui->Operation_tableWidget->setShowGrid(true);//设置显示格子
    ui->Operation_tableWidget->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
    ui->Operation_tableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->Operation_tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->Operation_tableWidget->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值
    /*ui->Operation_tableWidget->setColumnWidth(0,260);
    ui->Operation_tableWidget->horizontalHeader()->setStretchLastSection(true);
    for (int i = 0; i < 9; ++i)
    {
        ui->Operation_tableWidget->setRowHeight(i, 40);
    }*/

    OperationLog_tab(ui->Operation_tableWidget);    //操作日志页说明
}

//新界面工作模式 初始化
void MyWidget::WorkingModeInit()
{
    Mode_Str.clear();
    Mode_title_Str.clear();
    Mode_Str<<tr("Battery Area")<<tr("Self-issuance and self-use")<<tr("Battery Priority")<<tr("Optimal mode")<<tr("Mixed mode")<<tr("Manual");
    Mode_title_Str<<tr("DC/AC Parameters")<<tr("DC/DC Parameters")<<tr("Lithium Battery Setting Parameters")<<tr("Lead-acid Battery Setting Parameters")<<tr("Time Period Setting")<<tr("Function Sentting 1")<<tr("Function Sentting 2")\
                 <<tr("System Senttings")<<tr("Device")<<tr("DC/AC Debug")<<tr("DC/DC Debug")<<tr("Port data");

    //鼠标悬浮提示语
    ui->Information_btn->setToolTip(QString(tr("Working mode introduction")));
    ui->Save_bt->setToolTip(QString(tr("Apply this mode and exit the parameter settings page")));
    ui->Exit_bt->setToolTip(QString(tr("Eexit the parameter settings page")));
    ui->SetNext_bt->setToolTip(QString(tr("Next page")));
    ui->SetPrevious_bt->setToolTip(QString(tr("Last page")));
    ui->UI_captye->setToolTip(QString(tr("Machine typs")));
    ui->TimeSeting_btn->setToolTip(QString(tr("Current system time")));
    ui->Alarm_Button->setToolTip(QString(tr("Alarm severity warning")));
    ui->ChangeLanguage_btn->setToolTip(QString(tr("Chinese and English switching")));
    ui->UI_MenuBtn->setToolTip(QString(tr("Open menu")));
    ui->Login_bt->setToolTip(QString(tr("User login")));
    ui->Converter_State_btn->setToolTip(QString(tr("Converter status")));
    ui->DCDC_Module_State_btn->setToolTip(QString(tr("DCDC module state")));
    ui->IntrBack_bt->setToolTip(QString(tr("Return to previous page")));
    ui->Details_bt->setToolTip(QString(tr("View the detailed running logic and related parameters of the working mode")));
    ui->PV_btn->setToolTip(QString(tr("PV")));
    ui->Bypass_Load_Btn->setToolTip(QString(tr("Load")));
    ui->Bypass_Running_btn->setToolTip(QString(tr("Converter")));
    ui->Bypass_Batt_btn->setToolTip(QString(tr("Battery")));
    ui->Bypass_Grid_btn->setToolTip(QString(tr("Grid")));
    ui->PortNum_bt->setToolTip(QString(tr("Set the port to listen on")));
    ui->Bengin_bt->setToolTip(QString(tr("Start/Stop")));

    for(int i=0;i<11;i++)
    {
       if(i < 3)
       {
           QStringList List5;//DCAC设置
           List5 << tr("Name") << tr("Value")<< tr("Name") << tr("Value")<< tr("Name") << tr("Value");
           new_ui_TabList.at(i)->setHorizontalHeaderLabels(List5);
       }

       if(i == 4)
       {
           QStringList time_str;
           time_str<< tr("Check") <<tr("Peak-Flat-Valley")<< tr("StartTime") << tr("EndTime") << tr("Features") << tr("Power(kW)") << tr("Generator action");
           new_ui_TabList.at(i)->setColumnCount(time_str.size());
           new_ui_TabList.at(i)->setRowCount(20);
           new_ui_TabList.at(i)->setHorizontalHeaderLabels(time_str);
           new_ui_TabList.at(i)->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
           new_ui_TabList.at(i)->verticalHeader()->setVisible(false);//设置垂直头不可见
           new_ui_TabList.at(i)->setFrameShape(QFrame::NoFrame);//设置无边框
           new_ui_TabList.at(i)->setEditTriggers(QAbstractItemView::NoEditTriggers);//设置不可编辑
           new_ui_TabList.at(i)->setShowGrid(true);//设置显示格子
           new_ui_TabList.at(i)->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
           new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(QHeaderView::Interactive);
           new_ui_TabList.at(i)->setColumnWidth(0, 100);
           new_ui_TabList.at(i)->setColumnWidth(5, 100);
           for(int sum = 1; sum < new_ui_TabList.at(i)->columnCount(); ++sum)
           {
               if(sum != 5)
               {
                   new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(sum, QHeaderView::Stretch);
               }
           }
           new_ui_TabList.at(i)->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
           new_ui_TabList.at(i)->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值
       }
       else
       {
           new_ui_TabList.at(i)->horizontalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
           new_ui_TabList.at(i)->verticalHeader()->setStyleSheet("QHeaderView::section{background:skyblue;}");
           new_ui_TabList.at(i)->setFrameShape(QFrame::NoFrame);//设置无边框
           new_ui_TabList.at(i)->setShowGrid(true);//设置显示格子
           new_ui_TabList.at(i)->setSelectionBehavior(QAbstractItemView::SelectItems);//每次选择一行
           if(i == 2 || i == 3)
           {
               new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(QHeaderView::Interactive);
               new_ui_TabList.at(i)->setColumnWidth(1, 90);
               new_ui_TabList.at(i)->setColumnWidth(3, 90);
               new_ui_TabList.at(i)->setColumnWidth(5, 90);
               new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(0, QHeaderView::Stretch);
               new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(2, QHeaderView::Stretch);
               new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(4, QHeaderView::Stretch);
               new_ui_TabList.at(i)->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
           }
           else
           {
               new_ui_TabList.at(i)->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
               new_ui_TabList.at(i)->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
           }
           new_ui_TabList.at(i)->verticalHeader()->setMinimumSectionSize(50);//设置行高最小值
       }
    }
}

//切换登录信息
void MyWidget::Account_Change(uint8_t Account_Type)
{
    if( Account_Type == 0 )         //用户
    {
        ui->Login_bt->setText( tr("USER") );
    }
    else if( Account_Type == 1 )    //维修
    {
        ui->Login_bt->setText( tr("MAINTAIN") );
    }
    else if( Account_Type == 2 )    //超级权限
    {
        ui->Login_bt->setText( tr("Admin") );
    }
    else
    {
        ui->Login_bt->setText( tr("Not Logged in") );
    }
}

//切换语言重新加载Lable
void MyWidget::ReloadLabel()
{
    //加载模式介绍lable
    ui->Intro_lb->setText( Mode_Str.at(CurrentCheckModeExplain) );//模式介绍标题更新
    ui->IntrPageNum_lb->setText(tr("1/1"));//模式介绍页码更新

   if(CurrentCheckModeExplain == Mode_OPTIMAL_MODE_EXP)
   {
       //模式介绍页码更新
       ui->IntrPageNum_lb->setText(QString("%1/2").arg(ui->Introduction_stackedWidget->currentIndex()-2));
   }


    //加载基础/高级设置lable
    if(CurrentCheckMode != ADVANCED_SETTING)
    {
        ui->Mode_lb->setText( Mode_Str.at(CurrentCheckMode+1) );//模式标题
        ui->PageInfo_lb->setText(Mode_title_Str.at(System_Current_Page));//页标题
        if(System_Current_Page<Lead_PAGE_NUM)//页码
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page+1).arg(SystemTotal_PAGE) );
        }
        else {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page).arg(SystemTotal_PAGE) );
        }
    }
    else
    {
        ui->Mode_lb->setText( tr("Advanced Settings") );
        ui->SetPageNum_lb->setText( QString("%1/%2").arg(Advanced_Current_Page-4).arg(AdvancedTotal_PAGE) );
        ui->PageInfo_lb->setText(Mode_title_Str.at(Advanced_Current_Page));
    }


}

//失能所有基础控件
void MyWidget::DisabldAllBasisButton()
{
    DisableTableButton(ui->DCAC_Tab);

    switch (CurrentCheckMode)
    {
    case Mode_SELF_USE:
    {
        EnableTableButton(ui->DCAC_Tab,0,1);
        EnableTableButton(ui->DCAC_Tab,2,1);
        EnableTableButton(ui->DCAC_Tab,3,1);
        EnableTableButton(ui->DCAC_Tab,4,1);
        EnableTableButton(ui->DCAC_Tab,5,1);
        EnableTableButton(ui->DCAC_Tab,6,1);
        EnableTableButton(ui->DCAC_Tab,0,5);
        EnableTableButton(ui->DCAC_Tab,1,5);
        EnableTableButton(ui->DCAC_Tab,2,5);
        EnableTableButton(ui->DCAC_Tab,3,5);
        EnableTableButton(ui->DCAC_Tab,4,5);
        break;
    }
    case Mode_BATTERY_PRIORITY:
    {
        EnableTableButton(ui->DCAC_Tab,0,1);
        EnableTableButton(ui->DCAC_Tab,1,1);
        EnableTableButton(ui->DCAC_Tab,2,1);
        EnableTableButton(ui->DCAC_Tab,3,1);
        EnableTableButton(ui->DCAC_Tab,4,1);
        EnableTableButton(ui->DCAC_Tab,5,1);
        EnableTableButton(ui->DCAC_Tab,6,1);
        EnableTableButton(ui->DCAC_Tab,0,5);
        EnableTableButton(ui->DCAC_Tab,1,5);
        EnableTableButton(ui->DCAC_Tab,2,5);
        EnableTableButton(ui->DCAC_Tab,3,5);
        EnableTableButton(ui->DCAC_Tab,4,5);
        break;
    }
    case Mode_OPTIMAL_MODE:
    {
        EnableTableButton(ui->DCAC_Tab,0,1);
        EnableTableButton(ui->DCAC_Tab,1,1);
        EnableTableButton(ui->DCAC_Tab,4,1);
        EnableTableButton(ui->DCAC_Tab,5,1);
        EnableTableButton(ui->DCAC_Tab,6,1);
        EnableTableButton(ui->DCAC_Tab,7,1);
        EnableTableButton(ui->DCAC_Tab,0,3);
        EnableTableButton(ui->DCAC_Tab,1,3);
        EnableTableButton(ui->DCAC_Tab,2,3);
        EnableTableButton(ui->DCAC_Tab,3,3);
        EnableTableButton(ui->DCAC_Tab,4,3);
        EnableTableButton(ui->DCAC_Tab,5,3);
        EnableTableButton(ui->DCAC_Tab,0,5);
        EnableTableButton(ui->DCAC_Tab,1,5);
        EnableTableButton(ui->DCAC_Tab,2,5);
        EnableTableButton(ui->DCAC_Tab,3,5);
        EnableTableButton(ui->DCAC_Tab,4,5);


        break;
    }
    case Mode_MIXED_MODE:
    {
        EnableTableButton(ui->DCAC_Tab,0,1);
        EnableTableButton(ui->DCAC_Tab,1,1);
        EnableTableButton(ui->DCAC_Tab,2,1);
        EnableTableButton(ui->DCAC_Tab,3,1);
        EnableTableButton(ui->DCAC_Tab,4,1);
        EnableTableButton(ui->DCAC_Tab,5,1);
        EnableTableButton(ui->DCAC_Tab,6,1);
        EnableTableButton(ui->DCAC_Tab,0,5);
        EnableTableButton(ui->DCAC_Tab,1,5);
        EnableTableButton(ui->DCAC_Tab,2,5);
        EnableTableButton(ui->DCAC_Tab,3,5);
        EnableTableButton(ui->DCAC_Tab,4,5);
        break;
    }
    case Mode_MANUAL:
    {
        EnableTableButton(ui->DCAC_Tab,0,1);
        EnableTableButton(ui->DCAC_Tab,1,1);
        EnableTableButton(ui->DCAC_Tab,4,1);
        EnableTableButton(ui->DCAC_Tab,5,1);
        EnableTableButton(ui->DCAC_Tab,0,5);
        EnableTableButton(ui->DCAC_Tab,1,5);
        EnableTableButton(ui->DCAC_Tab,2,5);
        EnableTableButton(ui->DCAC_Tab,3,5);
        EnableTableButton(ui->DCAC_Tab,4,5);
        break;
    }
    default:
        break;
    }
}
//失能表格的控件
void MyWidget::DisableTableButton(QTableWidget *myTable)
{
    int rowCount = myTable->rowCount();
    int columnCount = myTable->columnCount();

    for(int row = 0; row<rowCount; row++)
    {
        for(int column = 0; column<columnCount; column++)
        {
            QWidget* widget = myTable->cellWidget(row, column);
            QPushButton* button = qobject_cast<QPushButton*>(widget);

            //判断得到的QPushButton指针是否有效来确定是否成功获取到了按钮
            if (button)
            {
                // 成功获取到按钮，可以进行相关操作
                button->setEnabled(false);
            }
        }
    }

}
//使能表格控件
void MyWidget::EnableTableButton(QTableWidget *myTable, int rowCount, int columnCount)
{
    QWidget* widget = myTable->cellWidget(rowCount, columnCount);
    QPushButton* button = qobject_cast<QPushButton*>(widget);

    if (button)
    {
        button->setEnabled(true);
    }
}
//菜单页头像切换
void MyWidget::combox_Account_change(int Index)
{
    if( Index == Login_User )
    {
        ui->Login_Avatar_lb->setStyleSheet( "border-image: url(:/new_ui/UI/用户1-min.png);\
                                             min-width:126px;min-height:126px;max-width:126px;\
                                             max-height: 126px;border-radius: 63px;border:1px solid black;");
    }
    if( Index ==Login_Maintain )
    {
        ui->Login_Avatar_lb->setStyleSheet( "border-image: url(:/new_ui/UI/维修1-min.png);\
                                            min-width:126px;min-height:126px;max-width:126px;\
                                            max-height: 126px;border-radius: 63px;border:1px solid black;");
    }
    if( Index == Login_Root )
    {
        ui->Login_Avatar_lb->setStyleSheet( "border-image: url(:/new_ui/UI/研发3-min.png);\
                                             min-width:126px;min-height:126px;max-width:126px;\
                                             max-height: 126px;border-radius: 63px;border:1px solid black;");
    }
}


//显示菜单
void MyWidget::on_UI_MenuBtn_clicked()
{
    ui->UI_stackedWidget->setCurrentWidget(ui->Menu_page);
}
/***********时间显示**********/
void MyWidget::onTimerOut()
{
    if(LanguageType == 1)
    {
        QDateTime time = QDateTime::currentDateTime();
        QString str = time.toString("dd-MM-yyyy HH:mm:ss");
        ui->TimeSeting_btn->setText(str);
    }
    else {
        QDateTime time = QDateTime::currentDateTime();
        QString str = time.toString("yyyy-MM-dd HH:mm:ss");
        ui->TimeSeting_btn->setText(str);
    }
}
//系统工作模式
void MyWidget::WordingMode(int Index)
{
    CurrentCheckMode = Index;
    DisabldAllBasisButton();
    if(System_Current_Page<Lead_PAGE_NUM)
    {
        ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page+1).arg(SystemTotal_PAGE) );
    }
    else {
        ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page).arg(SystemTotal_PAGE) );
    }
    ui->PageInfo_lb->setText(Mode_title_Str.at(System_Current_Page));

    if(!ui->Save_bt->isVisible()&&CurrentCheckMode!=ADVANCED_SETTING)
    {
        ui->Save_bt->setVisible(true);
    }
    ui->Mode_lb->setText( Mode_Str.at(CurrentCheckMode+1) );

    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Wordking_page);
    ui->Set_stackedWidget->setCurrentWidget(ui->Setting_page);
    ui->setpage_stackedWidget->setCurrentIndex( System_Current_Page );
}
//模式说明 切换
void MyWidget::ModeSwitchExplain(int Index)
{
    CurrentCheckModeExplain = Index;
    ui->Intro_lb->setText( Mode_Str.at(CurrentCheckModeExplain) );

    //上下页失能
    ui->IntroPrevious_bt->setDisabled( true );
    ui->IntroNext_bt->setDisabled( true );

    ui->IntrPageNum_lb->setText(tr("1/1"));//设置显示页码
    ModeIntr_Current_Page = Index;
    switch (Index)
    {
    case BATTERY_AREA_EXP:
    {
        ui->IntrPageNum_lb->setText(tr("1/1"));
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    case Mode_SELF_USE_EXP:
    {
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    case Mode_BATTERY_PRIORITY_EXP:
    {
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    case Mode_OPTIMAL_MODE_EXP:
    {
        ui->IntrPageNum_lb->setText(tr("1/2"));
        ui->IntroPrevious_bt->setEnabled( true );
        ui->IntroNext_bt->setEnabled( true );
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    case Mode_MIXED_MODE_EXP:
    {
        ModeIntr_Current_Page = Index+1;
        ui->IntrPageNum_lb->setText(tr("1/1"));
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    case Mode_MANUAL_EXP:
    {
        ModeIntr_Current_Page = Index+1;
        ui->IntrPageNum_lb->setText(tr("1/1"));
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
        break;
    default:
        break;
    }
}
//主页点击
void MyWidget::Home_Click(int Index)
{
    switch (Index) {
    case 0:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
            ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
            ui->MPS_Data_stw->setCurrentWidget(ui->DC_page);
            ui->RTD_DC->click();
        }
        break;
    case 1:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
            ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
            ui->MPS_Data_stw->setCurrentWidget(ui->Load_page);
            ui->RTD_Load->click();
        }
        break;
    case 2:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
            ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
            ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);
            ui->RTD_Converter->click();
        }
        break;
    case 3:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->BatteryData_page);
            ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
        }
        break;
    case 4:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
            ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
            ui->MPS_Data_stw->setCurrentWidget(ui->Grid_page);
            ui->RTD_Grid->click();
        }
        break;
    case 5:
        {
            ui->stackedWidget->setCurrentWidget(ui->Status_page);
            ui->Run_tabWidget->setCurrentWidget(ui->RTAlarm_page);
            QMessageBox::question(this,tr("Alarm icon"), \
                                  tr("Alarm icon: It is not displayed when there is no alarm. "
                                     "When there is a minor alarm, a yellow icon is displayed. "
                                     "When there is a fault alarm, a red icon is displayed."), tr("OK"));
        }
        break;
    default:
        break;
    }
}
//返回退出键
void MyWidget::Return(int Index)
{
    QString EnableMode("QToolButton::hover{color: rgb(0, 0, 0);border:2px solid rgb(27, 120, 205);background-color: rgb(27, 120, 205);border-radius:15px;}\
                       QToolButton::!hover{color: rgb(255, 255, 255);border:2px solid rgb(27, 120, 205);background-color: rgb(27, 120, 205);border-radius:15px;}");
    QString DisableMode("QToolButton::hover{color: rgb(0, 0, 0);border:2px solid rgb(85, 170, 255);background-color: rgb(85, 170, 255);border-radius:15px;}\
                          QToolButton::!hover{color: rgb(255, 255, 255);border:2px solid rgb(85, 170, 255);background-color: rgb(85, 170, 255);border-radius:15px;}");
    switch (Index)
    {
        case 0:
            {


            }
            break;
        case 1:
            {
                SystemMode_Group->button(0)->setStyleSheet(DisableMode);
                SystemMode_Group->button(1)->setStyleSheet(DisableMode);
                SystemMode_Group->button(2)->setStyleSheet(DisableMode);
                SystemMode_Group->button(3)->setStyleSheet(DisableMode);
                SystemMode_Group->button(4)->setStyleSheet(DisableMode);
                SystemMode_Group->button(CurrentCheckMode)->setStyleSheet(EnableMode);
            }
            break;
        case 2:
            {

            }
            break;
        default:
            break;
    }
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Wordking_page);
    ui->Set_stackedWidget->setCurrentWidget(ui->Mode_page);
}

/******根据菜单索引打开相应的界面******/
void MyWidget::My_menuAction(int Index)
{
    switch (Index)
    {
        case HOSTPAGE:
            {
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Host_page);
            }
            break;
        case RTDATAPAGE:
            {
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Status_page);
                ui->Run_tabWidget->setCurrentWidget(ui->RT_Data_page);
                ui->RT_Dtata_StackedWidget->setCurrentWidget(ui->RTD_Bypass_N_page);
                ui->MPS_Data_stw->setCurrentWidget(ui->Machine_page);
                ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
            }
            break;
        case RECORDPAGE:
            {
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Record_page);
                ui->Record_tabWidget->setCurrentWidget(ui->DataReport_page);
                ui->Report_tab->setCurrentWidget(ui->Report_tabPage_T);
                ui->dateEdit->setDate(QDateTime::currentDateTime().date());
            }
            break;
        case SYSTEMPAGE:
            {
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Wordking_page);
                ui->Set_stackedWidget->setCurrentWidget(ui->Mode_page);
            }
            break;
        case MACHINESWITCH:
            {
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Switch_page);
            }
            break;
        case SYSTEMINFORMATION:
            {
                ui->InfoPageNum_lb->setText( "1/2" );
                ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
                ui->stackedWidget->setCurrentWidget(ui->Wordking_page);
                ui->Set_stackedWidget->setCurrentWidget(ui->SystemInfor_page);
            }
            break;
        case USER_LOGIN:
            {
                if( Account_Type >=  ui->combox_Account->count() )
                {
                    ui->combox_Account->setCurrentIndex( 0 );
                }
                else
                {
                    ui->combox_Account->setCurrentIndex( Account_Type );
                }

                ui->UI_stackedWidget->setCurrentWidget( ui->Login );
            }
            break;
        default:
            break;
    }
}
/*********电池数据点击槽*******/
void MyWidget::BatteryData_clicked(int nid)
{
    switch (nid) {
    case 0:
        QMessageBox::question(this, tr("Bat volage")\
                              ,tr("Total voltage of the battery uploaded by BMS."), tr("OK"));
        break;
    case 1:
        QMessageBox::question(this, tr("Bat current")\
                              ,tr("Total current of the battery uploaded by BMS."), tr("OK"));
        break;
    case 2:
        QMessageBox::question(this, tr("SOC")\
                              ,tr("Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage."), tr("OK"));
        break;
    case 3:
        QMessageBox::question(this, tr("SOH")\
                              ,tr("Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity."), tr("OK"));
        break;
    case 4:
        QMessageBox::question(this, tr("Cell voltage(max)")\
                              ,tr("The highest voltage of single cell uploaded by BMS."), tr("OK"));
        break;
    case 5:
        QMessageBox::question(this, tr("Cell voltage(min)")\
                              ,tr("The lowest voltage of single cell uploaded by BMS."), tr("OK"));
        break;
    case 6:
        QMessageBox::question(this, tr("Cell temp.(max)")\
                              ,tr("The highest temperature of single cell uploaded by BMS."), tr("OK"));
        break;
    case 7:
        QMessageBox::question(this, tr("Cell temp.(min)")\
                              ,tr("The lowest temperature of single cell uploaded by BMS."), tr("OK"));
        break;
    case 8:
        QMessageBox::question(this, tr("Charging current limit")\
                              ,tr("The limit of charging current uploaded by BMS."), tr("OK"));
        break;
    case 9:
        QMessageBox::question(this, tr("Discharging current limit")\
                              ,tr("The limit of discharging current uploaded by BMS."), tr("OK"));
        break;
    case 10:
        QMessageBox::question(this, tr("Allowable charging power")\
                              ,tr("The allowable charging power uploaded by BMS."), tr("OK"));
        break;
    case 11:
        QMessageBox::question(this, tr("Allowable discharging power")\
                              ,tr("The allowable discharging power uploaded by BMS."), tr("OK"));
        break;
    case 12:
        QMessageBox::question(this,tr ("Allowable charging energy")\
                              ,tr("The allowable charging capacity uploaded by BMS."), tr("OK"));
        break;
    case 13:
        QMessageBox::question(this,tr ("Allowable discharging energy")\
                              ,tr("The allowable discharging capacity uploaded by BMS."), tr("OK"));
        break;
    case 14:
        QMessageBox::question(this, tr("Alarm level")\
                              ,tr("Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;\nBy default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms."), tr("OK"));
        break;
    case 15:
        QMessageBox::question(this, tr("Charging enable")\
                              ,tr("Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge."), tr("OK"));
        break;
    case 16:
        QMessageBox::question(this, tr("Discharging enable")\
                              ,tr("Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge."), tr("OK"));
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

//MPS数据 绘制button
void MyWidget::MPS_Data(QTableWidget *myTable)
{
    int line=0;int column = 1;//当前解释的button行和列

    ButtonToTable->add_SpecificationData(MPS_vol_AB_explain, myTable, line++, column, \
                                                "0V", tr("Inv. voltage(AB)"), \
                                                tr("Inv. side AB line voltage."));

    ButtonToTable->add_SpecificationData(MPS_vol_BC_explain, myTable, line++, column, \
                                                "0V", tr("Inv. voltage(BC)"), \
                                                tr("Inv. side BC line voltage."));

    ButtonToTable->add_SpecificationData(MPS_vol_CA_explain, myTable, line++, column, \
                                                "0V", tr("Inv. voltage(CA)"), \
                                                tr("Inv. side CA line voltage."));

    ButtonToTable->add_SpecificationData(MPS_cur_A_explain, myTable, line++, column, \
                                                "0A", tr("Inv. current(A)"), \
                                               tr("Inv. side A phase current."));

    ButtonToTable->add_SpecificationData(MPS_cur_B_explain, myTable, line++, column, \
                                                "0A", tr("Inv. current(B)"), \
                                                tr("Inv. side B phase current."));

    ButtonToTable->add_SpecificationData(MPS_cur_C_explain, myTable, line++, column, \
                                                "0A", tr("Inv. current(C)"), \
                                                tr("Inv. side C phase current."));

    ButtonToTable->add_SpecificationData(MPS_IGBT_T_explain, myTable, line++, column, \
                                                "0℃", tr("IGBT temperature"), \
                                                tr("The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. "
                                                   "Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C."));

    ButtonToTable->add_SpecificationData(MPS_Env_T_explain, myTable, line++, column, \
                                                "0℃", tr("Environment temperature"), \
                                                tr("The ambient temperature."));

    ButtonToTable->add_SpecificationData(MPS_Leakage_cur_explain, myTable, line++, column, \
                                                "0mA", tr("Leakage current"), \
                                                tr("Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter)."));
    line=0;
    column=3;
    ButtonToTable->add_SpecificationData(PV_vol_explain, myTable, line++, column, \
                                                "0V", tr("PV voltage"), \
                                                tr("Display the voltage of each PV in turn."));

    ButtonToTable->add_SpecificationData(PV_cur_explain, myTable, line++, column, \
                                                "0A", tr("PV current"), \
                                                tr("Total current on the PV side of the converter."));

    ButtonToTable->add_SpecificationData(PV_power_explain, myTable, line++, column, \
                                                "0kW", tr("PV power"), \
                                                tr("Total power on the PV side of the converter."));

    ButtonToTable->add_SpecificationData(Batter_vol_explain, myTable, line++, column, \
                                                "0V", tr("Battery voltage"), \
                                                tr("converter battery side voltage."));

    ButtonToTable->add_SpecificationData(Batter_cur_explain, myTable, line++, column, \
                                                "0A", tr("Battery current"), \
                                                tr("converter battery side current."));

    ButtonToTable->add_SpecificationData(Batter_power_explain, myTable, line++, column, \
                                                "0kW", tr("Battery power"), \
                                                tr("converter battery side power."));

    ButtonToTable->add_SpecificationData(Bus_vol_explain, myTable, line++, column, \
                                                "0V", tr("Bus voltage"), \
                                                tr("converter bus voltage."));

    ButtonToTable->add_SpecificationData(Bus_cur_explain, myTable, line++, column, \
                                                "0V", tr("Bus current"), \
                                                tr("converter bus current."));
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
    ButtonToTable->add_SpecificationData(PV_vol_H_explain, myTable, line++, column, \
                                                "0V", tr("Voltage H"), \
                                                tr("Voltage on the high voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_cur_H_explain, myTable, line++, column, \
                                                "0A", tr("Current H"), \
                                                tr("Current on the high voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_power_H_explain, myTable,line++, column, \
                                                "0kW", tr("Power H"), \
                                                tr("Power on the high voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_vol_L_explain, myTable, line++, column, \
                                                "0V", tr("Voltage L"), \
                                                tr("Voltage on the low voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_cur_L_explain, myTable,line++, column, \
                                                "0A", tr("Current L"), \
                                                tr("Current on the low-voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_power_L_explain, myTable, line++, column, \
                                                "0kW", tr("Power L"), \
                                                tr("Power on the low voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(Leakage_cur_explain, myTable, line++, column, \
                                                "0mA", tr("Leakage cur"), \
                                                tr("Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (>30kVA power converter)."));



    line=0;
    column=3;
    ButtonToTable->add_SpecificationData(Bus_H_vol_add_explain, myTable, line++, column, \
                                                "0V", tr("Bus H vol(+)"), \
                                                tr("Positive bus voltage on the high voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(Bus_H_vol_reduce_explain, myTable, line++, column, \
                                                "0V", tr("Bus H vol(-)"), \
                                                tr("Negative bus voltage on the high voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(Bus_L_vol_add_explain, myTable, line++, column, \
                                                "0V", tr("Bus L vol(+)"), \
                                                tr("Positive bus voltage on the low voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(Bus_L_vol_reduce_explain, myTable, line++, column, \
                                                "0V", tr("Bus L vol(-)"), \
                                                tr("Negative bus voltage on the low voltage side of the DCDC module."));

    ButtonToTable->add_SpecificationData(PV_IGBT_T_explain, myTable, line++, column, \
                                                "0℃", tr("IGBT Temperature"), \
                                                tr("The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C."));

    ButtonToTable->add_SpecificationData(PositiveInuslation_explain, myTable, line++, column, \
                                                "0kΩ", tr("Positive Inuslation"), \
                                                tr("The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist."));

    ButtonToTable->add_SpecificationData(NegativeInuslation_explain, myTable, line++, column, \
                                                "0kΩ", tr("Negative Inuslation"), \
                                                tr("The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist."));
}
//电网数据 绘制button
void MyWidget::Grid_Data(QTableWidget *myTable)
{
    int line=0;int column=1;
    ButtonToTable->add_SpecificationData(Grid_vol_AB_explain, myTable, line++, column, \
                                                "0V", tr("Grid Voltage(AB)"), \
                                                tr("Grid side AB line voltage."));

    ButtonToTable->add_SpecificationData(Grid_vol_BC_explain, myTable, line++, column, \
                                                "0V", tr("Grid Voltage(BC)"), \
                                                tr("Grid side BC line voltage."));

    ButtonToTable->add_SpecificationData(Grid_vol_CA_explain, myTable,line++, column, \
                                                "0V", tr("Grid Voltage(CA)"), \
                                                tr("Grid side CA line voltage."));

    ButtonToTable->add_SpecificationData(Grid_cur_A_explain, myTable, line++, column, \
                                                "0A", tr("Grid Current(A)"), \
                                                tr("Grid side A phase current."));

    ButtonToTable->add_SpecificationData(Grid_cur_B_explain, myTable, line++, column, \
                                                "0A", tr("Grid Current(B)"), \
                                                tr("Grid side B phase current."));

    ButtonToTable->add_SpecificationData(Grid_cur_C_explain, myTable, line++, column, \
                                                "0A", tr("Grid Current(C)"), \
                                                tr("Grid side C phase current."));

    line=0;
    column=3;
    ButtonToTable->add_SpecificationData(Grid_active_power_explain, myTable, line++, column, \
                                                "0kW", tr("Grid active power"), \
                                                tr("Active power P on the grid side of the converter."));

    ButtonToTable->add_SpecificationData(Grid_reactive_power_explain, myTable, line++, column, \
                                                "0Kvar", tr("Grid reactive power"), \
                                                tr("Reactive power Q on the grid side of the converter."));

    ButtonToTable->add_SpecificationData(Grid_apparent_power_explain, myTable, line++, column, \
                                                "0kVA", tr("Grid apparent power"), \
                                                tr("Apparent power S on the grid side of the converter."));

    ButtonToTable->add_SpecificationData(Grid_power_factor_explain, myTable, line++, column, \
                                                "0", tr("Grid power factor"), \
                                                tr("Power factor PF on the grid side of the converter."));

    ButtonToTable->add_SpecificationData(Grid_Frequency_explain, myTable, line++, column, \
                                                "0Hz", tr("Grid frequency"), \
                                                tr("Frequency on the grid side of the converter."));
}
//负载数据 绘制button
void MyWidget::Load_Data(QTableWidget *myTable)
{
    int line=0;int column=1;
    ButtonToTable->add_SpecificationData(Load_vol_AB_explain, myTable, line++, column, \
                                                "0V", tr("Load Voltage(AB)"), \
                                                tr("Load side AB line voltage."));

    ButtonToTable->add_SpecificationData(Load_vol_BC_explain, myTable, line++, column, \
                                                "0V", tr("Load Voltage(BC)"), \
                                                tr("Load side BC line voltage."));

    ButtonToTable->add_SpecificationData(Load_vol_CA_explain, myTable, line++, column, \
                                                "0V", tr("Load Voltage(CA)"), \
                                                tr("Load side CA line voltage."));

    ButtonToTable->add_SpecificationData(Load_cur_A_explain, myTable, line++, column, \
                                                "0A", tr("Load Current(A)"), \
                                                tr("Load side A phase current."));

    ButtonToTable->add_SpecificationData(Load_cur_B_explain, myTable, line++, column, \
                                                "0A", tr("Load Current(B)"), \
                                                tr("Load side B phase current."));

    ButtonToTable->add_SpecificationData(Load_cur_C_explain, myTable, line++, column, \
                                                "0A", tr("Load Current(C)"), \
                                                tr("Load side C phase current."));
    line=0;
    column=3;
    ButtonToTable->add_SpecificationData(Load_active_power_explain, myTable, line++, column, \
                                                "0kW", tr("Load active power"), \
                                                tr("Active power P on the load side of the converter."));

    ButtonToTable->add_SpecificationData(Load_reactive_power_explain, myTable, line++, column, \
                                                "0Kvar", tr("Load reactive power"), \
                                                tr("Reactive power Q on the load side of the converter."));

    ButtonToTable->add_SpecificationData(Load_apparent_power_explain, myTable, line++, column, \
                                                "0kVA", tr("Load apparent power"), \
                                                tr("Apparent power S on the load side of the converter."));

    ButtonToTable->add_SpecificationData(Load_power_factor_explain, myTable, line++, column, \
                                                "0", tr("Load power factor"), \
                                               tr("Power factor PF on the load side of the converter."));

    ButtonToTable->add_SpecificationData(Load_Frequency_explain, myTable, line++, column, \
                                                "0Hz", tr("Load frequency"), \
                                                tr("Frequency on the load side of the converter."));
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
    ButtonToTable->add_SpecificationData(DC_input_Bre_explain, myTable, line++, column, \
                                                tr("On"), tr("DC input breaker"), \
                                                tr("There are two states for a DC circuit breaker: On, Off."));

    ButtonToTable->add_SpecificationData(DC_Con_explain, myTable, line++, column, \
                                   tr("On"), tr("DC contactor"), \
                                   tr("The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens."));

    ButtonToTable->add_SpecificationData(M_Bypass_Bre_explain, myTable, line++, column, \
                                                tr("On"), tr("Maintenance Bypass Breaker"), \
                                                tr("There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel."));

    ButtonToTable->add_SpecificationData(Output_Bre_explain, myTable, line++, column, \
                                                tr("On"), tr("Output breaker"), \
                                                tr("The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected."));

    ButtonToTable->add_SpecificationData(Output_Con_explain, myTable, line++, column, \
                                                tr("On"), tr("Output contactor"), \
                                                tr("The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down."));

    ButtonToTable->add_SpecificationData(Grid_Bre_explain, myTable, line++, column, \
                                                tr("On"), tr("Grid breaker"), \
                                                tr("The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected."));

    ButtonToTable->add_SpecificationData(DCACinsulation_detection_explain, myTable, line++, column, \
                                         tr("Disable"), tr("DCAC insulation detection"), \
                                         tr("DCAC insulation detection:Enable,Disable."));

    ButtonToTable->add_SpecificationData(DO1_explain, myTable, line++, column, \
                                                tr("Disable"), tr("Start generator signal"), \
                                                tr("Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled."));

    ButtonToTable->add_SpecificationData(DO2_explain, myTable,line++, column, \
                                                tr("Disable"), tr("DO2"), \
                                                tr("Dry contact 2 is output."));

    ButtonToTable->add_SpecificationData(DO3_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DO3"), \
                                                tr("Dry contact 3 is output."));

    line = 0;
    column += 2;
    ButtonToTable->add_SpecificationData(DCAC_Conver_avail_explain, myTable, line++, column, \
                                                tr("Enable"), tr("DCAC Converter available"), \
                                                tr("The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled."));

    ButtonToTable->add_SpecificationData(DC_Soft_Start_explain, myTable, line++, column, \
                                                tr("Not starting"), tr("DC Soft start"), \
                                                tr("There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage."));

    ButtonToTable->add_SpecificationData(Converter_Status_explain, myTable, line++, column, \
                                                tr("OFF"), tr("Converter Status"), \
                                                tr("Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge."));

    ButtonToTable->add_SpecificationData(Reactive_P_Reg_explain, myTable, line++, column, \
                                                tr("Disable"), tr("Reactive power Regulation"), \
                                                tr("There are three types of reactive power regulation: Disable,PF regulation, and  regulation."));

    ButtonToTable->add_SpecificationData(LVRT_explain, myTable, line++, column, \
                                                tr("Enable"), tr("LVRT"), \
                                                tr("LVRT states : Enable , Disabled."));

    ButtonToTable->add_SpecificationData(DI1_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI1"), \
                                                tr("Input dry contact 1 status: Enabled, Disabled."));

    ButtonToTable->add_SpecificationData(DI2_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI2"), \
                                                tr("Input dry contact 2 status: Enabled, Disabled."));

    ButtonToTable->add_SpecificationData(DI3_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI3"), \
                                                tr("Input dry contact 3 status: Enabled, Disabled."));

    ButtonToTable->add_SpecificationData(DI4_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI4"), \
                                                tr("Input dry contact 4 status: Enabled, Disabled."));

    ButtonToTable->add_SpecificationData(DI5_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI5"), \
                                                tr("Input dry contact 5 status: Enabled, Disabled."));

    ButtonToTable->add_SpecificationData(DI6_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DI6"), \
                                                tr("Input dry contact 6 status: Enabled, Disabled."));
    line = 0;
    column += 2;
    ButtonToTable->add_SpecificationData(DCDC_Converter_ava_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DCDC Converter available"), \
                                                tr("The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled."));

    ButtonToTable->add_SpecificationData(Run_mode_explain, myTable, line++, column, \
                                                tr("Buck"), tr("Run mode"), \
                                                tr("DCDC module operating modes: Boost, Buck."));

    ButtonToTable->add_SpecificationData(Soft_Start_Sta_Boost_explain, myTable, line++, column, \
                                                tr("Not\nstarting"), tr("Soft Start Status Boost"), \
                                                tr("High-voltage side soft start states: Not started, Soft start in progress, Soft start completed."));

    ButtonToTable->add_SpecificationData(Soft_Start_Sta_Buck_explain, myTable, line++, column, \
                                                tr("Not\nstarting"), tr("Soft Start Status Buck"), \
                                                tr("Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed."));

    ButtonToTable->add_SpecificationData(Contator_Sta_Boost_explain, myTable, line++, column, \
                                                tr("Off"), tr("Contator Status Boost"), \
                                                tr("DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected."));

    ButtonToTable->add_SpecificationData(Contator_Sta_Buck_explain, myTable, line++, column, \
                                                tr("On"), tr("Contator Status Buck"), \
                                                tr("DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected."));

    ButtonToTable->add_SpecificationData(Converter_Status_V_explain, myTable, line++, column, \
                                                tr("Turn off"), tr("Converter Status"), \
                                                tr("DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT."));

    ButtonToTable->add_SpecificationData(DCDCinsulation_detection_explain, myTable, line++, column, \
                                                tr("Disable"), tr("DCDC insulation detection"), \
                                                tr("DCDC insulation detection:Enable,Disable."));
}
//系统消息 绘制button
void MyWidget::SystemMessages(QTableWidget *myTable)
{
    int line=0;int column=1;
    ButtonToTable->add_SpecificationData(MonitoringVersion_explain, myTable, line++, column, \
                                         "V400B400D005", tr("Monitoring software version"), \
                                         tr("This is the monitor screen version number."));

    ButtonToTable->add_SpecificationData(DCAC_SysProtocol_Version_explain, myTable, line++, column, \
                                         "V001B001D001", tr("DCAC Protocol version"), \
                                         tr("This is the DCAC protocol version number."));

    ButtonToTable->add_SpecificationData(DCAC_ConverterVersion_explain, myTable, line++, column, \
                                         "V105B500D008", tr("DCAC Converter software version"), \
                                         tr("This is the DCAC converter software version."));

    ButtonToTable->add_SpecificationData(DCAC_CPLD_Version_explain, myTable, line++, column, \
                                         "V001B001D000", tr("DCAC CPLD software version"), \
                                         tr("This is the DCAC CPLD software version."));

    ButtonToTable->add_SpecificationData(DCDC_SysProtocol_Version_explain, myTable, line++, column, \
                                         "V001B001D001", tr("DCDC Protocol version"), \
                                         tr("This is the DCDC protocol version number."));

    ButtonToTable->add_SpecificationData(DCDC_ConverterVersion_explain, myTable, line++, column, \
                                         "V105B500D008", tr("DCDC Converter software version"), \
                                         tr("This is the DCDC converter software version."));

    ButtonToTable->add_SpecificationData(DCDC_CPLD_Version_explain, myTable, line++, column, \
                                         "V001B001D000", tr("DCDC CPLD software version"), \
                                         tr("This is the DCDC CPLD software version."));

    ButtonToTable->add_SpecificationData(SN_explain, myTable, line++, column, \
                                         "F12200000001", tr("SN"), \
                                         tr("This is SN, the serial number of the product."));
}

//数据报表 绘制button
void MyWidget::DataReportMessages(QTableWidget *myTable)
{
    int line=0, column=1;
    ButtonToTable->add_SpecificationData(PV_power_generation_Day_explain,myTable, line, column++, \
                                            "0", tr("PV power generation Day"), \
                                            tr("Today's photovoltaic power generation."));

    ButtonToTable->add_SpecificationData(PV_power_generation_Month_explain,myTable, line, column++, \
                                            "0", tr("PV power generation Month"), \
                                            tr("Monthly photovoltaic power generation."));

    ButtonToTable->add_SpecificationData(PV_power_generation_Year_explain,myTable, line, column++, \
                                            "0", tr("PV power generation Year"), \
                                            tr("Annual photovoltaic power generation."));

    ButtonToTable->add_SpecificationData(PV_power_generation_Total_explain,myTable, line, column++, \
                                             "0", tr("PV power generation Total"), \
                                             tr("Total photovoltaic power generation."));
    line++;
    column = 1;
    ButtonToTable->add_SpecificationData(Load_Discharge_Day_explain,myTable, line, column++, \
                                            "0", tr("Daily load electricity consumption "), \
                                            tr("Today's electricity consumption of the load."));

    ButtonToTable->add_SpecificationData(Load_Discharge_Month_explain,myTable, line, column++, \
                                            "0", tr("Monthly load electricity consumption"), \
                                            tr("Monthly electricity consumption of the load."));

    ButtonToTable->add_SpecificationData(Load_Discharge_Year_explain,myTable, line, column++, \
                                            "0", tr("Annual load electricity consumption"), \
                                            tr("Annual electricity consumption of the load."));

    ButtonToTable->add_SpecificationData(Load_Discharge_Total_explain,myTable, line, column++, \
                                            "0", tr("Total load electricity consumption"), \
                                            tr("Total electricity consumption of the load."));
    line++;
    column = 1;
    ButtonToTable->add_SpecificationData(Battery_Charge_Day_explain,myTable, line, column++, \
                                            "0", tr("Battery Charge Day"), \
                                            tr("Today's battery charging."));

    ButtonToTable->add_SpecificationData(Battery_Charge_Month_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Month"), \
                                            tr("Monthly battery charging."));

    ButtonToTable->add_SpecificationData(Battery_Charge_Year_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Year"), \
                                            tr("Annual battery charging."));

    ButtonToTable->add_SpecificationData(Battery_Charge_Total_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Total"), \
                                            tr("Total battery charging."));
    line++;
    column = 1;
    ButtonToTable->add_SpecificationData(Battery_Discharge_Day_explain,myTable, line, column++, \
                                            "0", tr("Battery Charge Day"), \
                                            tr("Today's battery discharging."));

    ButtonToTable->add_SpecificationData(Battery_Discharge_Month_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Month"), \
                                            tr("Monthly battery discharging."));

    ButtonToTable->add_SpecificationData(Battery_Discharge_Year_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Year"), \
                                            tr("Annual battery discharging."));

    ButtonToTable->add_SpecificationData(Battery_Discharge_Total_explain,myTable, line, column++, \
                                            "0", tr("Battery Discharge Total"), \
                                            tr("Total battery discharging."));
    line++;
    column = 1;
    ButtonToTable->add_SpecificationData(Grid_Charge_Day_explain,myTable, line, column++, \
                                            "0", tr("Grid buy Day"), \
                                            tr("Today's electricity buy from the grid."));

    ButtonToTable->add_SpecificationData(Grid_Charge_Month_explain,myTable, line, column++, \
                                            "0", tr("Grid buy Month"), \
                                            tr("Monthly electricity buy from the grid."));

    ButtonToTable->add_SpecificationData(Grid_Charge_Year_explain,myTable, line, column++, \
                                            "0", tr("Grid buy Year"), \
                                            tr("Annual electricity buy from the grid."));

    ButtonToTable->add_SpecificationData(Grid_Charge_Total_explain,myTable, line, column++, \
                                            "0", tr("Grid buy Total"), \
                                            tr("Total electricity buy from the grid."));
    line++;
    column = 1;
    ButtonToTable->add_SpecificationData(Grid_Discharge_Day_explain,myTable, line, column++, \
                                            "0", tr("Grid sell Day"), \
                                            tr("Today's electricity sell to the grid."));

    ButtonToTable->add_SpecificationData(Grid_Discharge_Month_explain,myTable, line, column++, \
                                            "0", tr("Grid sell Month"), \
                                            tr("Monthly electricity sell to the grid."));

    ButtonToTable->add_SpecificationData(Grid_Discharge_Year_explain,myTable, line, column++, \
                                            "0", tr("Grid sell Year"), \
                                            tr("Annual electricity sell to the grid."));

    ButtonToTable->add_SpecificationData(Grid_Discharge_Total_explain,myTable, line, column++, \
                                            "0", tr("Grid sell Total"), \
                                            tr("Total electricity sell to the grid."));
}
//历史记录 绘制button
void MyWidget::HistoryRecord(QTableWidget *myTable)
{
    QString str1 = tr("0");
    QString str2 = tr("Level");
    QString str3 = tr("0 represents an alarm event, and this item will turn red. 1 represents a status event.");//0表示告警事件，且此项会变红，1表示状态事件
    QString str4 = tr("Start Time");
    QString str5 = tr("Event start time.");//事件开始时间。
    QString str6 = tr("End Time");
    QString str7 = tr("Event end time: '... 'indicates that there is no end time,'-' indicates that the event is in progress.");//19.事件结束时间：表示这条记录的结束时间，'...'表示无结束时间,'-'表示事件正在进行。
    QString str8 = tr("CAN communication failure");
    QString str9 = tr("event description");//事件描述
    QString str10 = tr("event description.");//事件描述。
    QString str11 = tr("Fire alarm (High temp. alarm)");//消防告警(高温告警)
    QString str12 = tr("Power Meter Comm fualttLead-acid abnormal");//电能表通讯故障
    QString str13 = tr("Converter Standby.");//变换器待机
    QString str14 = tr("The grid contactor connected");//电网接触器闭合
    QString str15 = tr("The grid breaker connected");//电网断路器闭合
    QString str16 = tr("The output breaker connected");//输出断路器闭合
    QString str17 = tr("Buck not softened");//低压侧未软起
    QString str18 = tr("Contactor off buck");//低压侧接触器断开
    QString str20 = tr("The grid breaker disconnected");//电网断路器断开

    QString str24 = tr("1");
    int line=0;int column=0;
    ButtonToTable->add_SpecificationData(Grade9_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade10_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade11_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade12_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade13_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade14_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade15_explain, myTable, line++, column, \
                                                    str24, str2, str3);

    ButtonToTable->add_SpecificationData(Grade_explain, myTable, line++, column, \
                                                    str1, str2, str3);

    ButtonToTable->add_SpecificationData(Grade2_explain, myTable, line++, column, \
                                                    str1, str2, str3);

    ButtonToTable->add_SpecificationData(Grade3_explain, myTable, line++, column, \
                                                    str1, str2,  str3);

    ButtonToTable->add_SpecificationData(Grade4_explain, myTable, line++, column, \
                                                    str1, str2, str3);

   ButtonToTable->add_SpecificationData(Grade5_explain, myTable, line++, column, \
                                                    str1, str2, str3);

    ButtonToTable->add_SpecificationData(Grade6_explain, myTable, line++, column, \
                                                    str1, str2, str3);

    ButtonToTable->add_SpecificationData(Grade7_explain, myTable, line++, column, \
                                                    str1, str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(Grade8_explain, myTable, line++, column, \
                                                    str1, str2, str3);

    line=0;
    column=1;
    if(LanguageType==0)
    {
        ButtonToTable->add_SpecificationData(StartTime9_explain, myTable, line++, column, \
                                                        "2023-7-29 14:59:56", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime10_explain, myTable, line++, column, \
                                                        "2023-7-29 14:59:55", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime11_explain, myTable, line++, column, \
                                                        "2023-7-29 14:59:51", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime12_explain, myTable, line++, column, \
                                                        "2023-7-29 14:59:51", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime13_explain, myTable, line++, column, \
                                                        "2023-7-29 14:59:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime14_explain, myTable, line++, column, \
                                                        "2023-7-29 14:57:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime15_explain, myTable, line++, column, \
                                                        "2023-7-29 14:57:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime_explain, myTable, line++, column, \
                                                        "2023-5-6 15:49:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime2_explain, myTable, line++, column, \
                                                        "2023-5-6 15:48:18", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime3_explain, myTable, line++, column, \
                                                        "2023-5-6 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime4_explain, myTable, line++, column, \
                                                        "2023-5-6 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime5_explain, myTable, line++, column, \
                                                        "2023-5-6 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime6_explain, myTable, line++, column, \
                                                        "2023-5-6 15:21:56", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime7_explain, myTable, line++, column, \
                                                        "2023-5-6 15:21:38", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime8_explain, myTable, line++, column, \
                                                        "2023-5-6 15:21:38", str4, str5);

        line=0;
        column=2;
        ButtonToTable->add_SpecificationData(EndTime9_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime10_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime11_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime12_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime13_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime14_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime15_explain, myTable, line++, column, \
                                                        "2023-7-29 16:42:24", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime2_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime3_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime4_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime5_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime6_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime7_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime8_explain, myTable, line++, column, \
                                                        "-", str6, str7);

    }
    else {
        ButtonToTable->add_SpecificationData(StartTime9_explain, myTable, line++, column, \
                                                        "29-7-2023 14:59:56", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime10_explain, myTable, line++, column, \
                                                        "29-7-2023 14:59:55", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime11_explain, myTable, line++, column, \
                                                        "29-7-2023 14:59:51", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime12_explain, myTable, line++, column, \
                                                        "29-7-2023 14:59:51", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime13_explain, myTable, line++, column, \
                                                        "29-7-2023 14:59:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime14_explain, myTable, line++, column, \
                                                        "29-7-2023 14:57:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime15_explain, myTable, line++, column, \
                                                        "29-7-2023 14:57:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime_explain, myTable, line++, column, \
                                                        "6-5-2023 15:49:50", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime2_explain, myTable, line++, column, \
                                                        "6-5-2023 15:48:18", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime3_explain, myTable, line++, column, \
                                                        "6-5-2023 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime4_explain, myTable, line++, column, \
                                                        "6-5-2023 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime5_explain, myTable, line++, column, \
                                                        "6-5-2023 15:39:3", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime6_explain, myTable, line++, column, \
                                                        "6-5-2023 15:21:56", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime7_explain, myTable, line++, column, \
                                                        "6-5-2023 15:21:38", str4, str5);

        ButtonToTable->add_SpecificationData(StartTime8_explain, myTable, line++, column, \
                                                        "6-5-2023 15:21:38", str4, str5);

        line=0;
        column=2;
        ButtonToTable->add_SpecificationData(EndTime9_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime10_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime11_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime12_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime13_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime14_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime15_explain, myTable, line++, column, \
                                                        "29-7-2023 16:42:24", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime2_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime3_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime4_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime5_explain, myTable, line++, column, \
                                                        "...", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime6_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime7_explain, myTable, line++, column, \
                                                        "-", str6, str7);

        ButtonToTable->add_SpecificationData(EndTime8_explain, myTable, line++, column, \
                                                        "-", str6, str7);

    }
    line=0;
    column=3;
    ButtonToTable->add_SpecificationData(Describe9_explain, myTable, line++, column, \
                                                    str13, str9, str10);

    ButtonToTable->add_SpecificationData(Describe10_explain, myTable, line++, column, \
                                                    str14, str9, str10);

    ButtonToTable->add_SpecificationData(Describe11_explain, myTable, line++, column, \
                                                    str15, str9, str10);

    ButtonToTable->add_SpecificationData(Describe12_explain, myTable, line++, column, \
                                                    str16, str9, str10);

    ButtonToTable->add_SpecificationData(Describe13_explain, myTable, line++, column, \
                                                    str17, str9, str10);

    ButtonToTable->add_SpecificationData(Describe14_explain, myTable, line++, column, \
                                                    str18, str9, str10);

    ButtonToTable->add_SpecificationData(Describe15_explain, myTable, line++, column, \
                                                    str20, str9, str10);

    ButtonToTable->add_SpecificationData(Describe_explain, myTable, line++, column, \
                                                    str8, str9, str10);

    ButtonToTable->add_SpecificationData(Describe2_explain, myTable, line++, column, \
                                                    str8, str9, str10);

    ButtonToTable->add_SpecificationData(Describe3_explain, myTable, line++, column, \
                                                    str11, str9, str10);

    ButtonToTable->add_SpecificationData(Describe4_explain, myTable, line++, column, \
                                                    str8, str9, str10);

    ButtonToTable->add_SpecificationData(Describe5_explain, myTable, line++, column, \
                                                    str12, str9, str10);

    ButtonToTable->add_SpecificationData(Describe6_explain, myTable, line++, column, \
                                                    str8, str9, str10);

    ButtonToTable->add_SpecificationData(Describe7_explain, myTable, line++, column, \
                                                    str11, str9, str10);

    ButtonToTable->add_SpecificationData(Describe8_explain, myTable, line++, column, \
                                                    str12, str9, str10);
}
//操作日志 绘制button
void MyWidget::OperationLog_tab(QTableWidget *myTable)
{
    QString str = tr("Modification Time");
    QString str1 = tr("Time when the system Settings are modified.");
    QString str2 = tr("Record Event");//事件记录
    QString str3 = tr("System settings operation records.");
    int line=0;int column=0;
    if(LanguageType == CHINESE)
    {
        ButtonToTable->add_SpecificationData(ModificationTime_explain, myTable, line++, column, \
                                                        "2023-05-12 11:32:45", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime2_explain, myTable, line++, column, \
                                                        "2023-05-12 11:32:33", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime3_explain, myTable, line++, column, \
                                                        "2023-05-11 19:29:24", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime4_explain, myTable, line++, column, \
                                                        "2023-05-11 19:29:21", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime5_explain, myTable, line++, column, \
                                                        "2023-05-11 19:29:10", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime6_explain, myTable, line++, column, \
                                                        "2023-05-11 19:29:07", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime9_explain, myTable, line++, column, \
                                                        "2023-05-11 11:20:58", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime11_explain, myTable, line++, column, \
                                                        "2023-05-11 11:02:18", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime12_explain, myTable, line++, column, \
                                                        "2023-05-11 11:02:14", str, \
                                                        str1);

    }
    else {
        ButtonToTable->add_SpecificationData(ModificationTime_explain, myTable, line++, column, \
                                                        "12-05-2023 11:32:45", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime2_explain, myTable, line++, column, \
                                                        "12-05-2023 11:32:33", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime3_explain, myTable, line++, column, \
                                                        "11-05-2023 19:29:24", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime4_explain, myTable, line++, column, \
                                                        "11-05-2023 19:29:21", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime5_explain, myTable, line++, column, \
                                                        "11-05-2023 19:29:10", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime6_explain, myTable, line++, column, \
                                                        "11-05-2023 19:29:07", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime9_explain, myTable, line++, column, \
                                                        "11-05-2023 11:20:58", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime11_explain, myTable, line++, column, \
                                                        "11-05-2023 11:02:18", str, \
                                                        str1);

        ButtonToTable->add_SpecificationData(ModificationTime12_explain, myTable, line++, column, \
                                                        "11-05-2023 11:02:14", str, \
                                                        str1);

    }
    line=0;
    column=1;
    ButtonToTable->add_SpecificationData(EventRecord_explain, myTable, line++, column, \
                                                    tr("Power control type：CP_P->CP_N&&P"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord2_explain, myTable, line++, column, \
                                                    tr("Power control type：CP_N&&P->CP_P"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord3_explain, myTable,line++, column, \
                                                    tr("Grid Fre Upper limit：0.2->3"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord4_explain, myTable, line++, column, \
                                                    tr("Grid Fre Upper limit：3->0.2"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord5_explain, myTable, line++, 1, \
                                                    tr("Voltage protection Lower limit：-10->-15"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord6_explain, myTable, line++, column, \
                                                    tr("Voltage protection Lower limit：-15->-10"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord9_explain, myTable, line++, column, \
                                                    tr("Operation mode：Manual->UPS"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord11_explain, myTable, line++, column, \
                                                    tr("Inv ON/Off-Grid：Off->automatic"), str2, \
                                                    str3);

    ButtonToTable->add_SpecificationData(EventRecord12_explain, myTable, line++, column, \
                                                    tr("Inv ON/Off-Grid：automatic->Off"), str2, \
                                                    str3);
}

//设置控件到表格
void MyWidget::SetControlToTable()
{
    SetDCACToTable(ui->DCAC_Tab);
    SetDCDCToTable(ui->DCDC_Tab);
    SetLithiumToTable(ui->Lithium_Tab_2);
    SetLead_acidToTable(ui->Lead_Acid_Tab);
    SetMixedTime_TabToTable(ui->MixedTime_Tab);
    SetAdvancedSetup1ToTable(ui->Advanced_Tab_1);
    SetAdvancedSetup2ToTable(ui->Advanced_Tab_2);
    SetAdvancedSetup3ToTable(ui->Advanced_Tab_3);
    Device_TabToTable(ui->ExternalDevice_Tab);
    DCAC_Debugg(ui->DCAC_Debug_Tab);
    DCDC_Debugg(ui->DCDC_Debug_Tab);
}
//设置DCAC控件到表格
void MyWidget::SetDCACToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //并网方式
    ButtonToTable->add_SpecificationData(Grid_connected_mode_explain,myTable, line++, column, \
                                         tr("automatic"), tr("Grid conected mode of the converter "), \
                                         tr("When \"Auto\" is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, "
                                            "the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).\nWhen \"Grid-on\" is selected, "
                                            "the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.\nWhen \"Grid-off\" is selected, "
                                            "the converter operates in grid-off mode (VF)."));

    //恒功率
    ButtonToTable->add_SpecificationData(Constant_power_explain,myTable , line++, column, \
                                         tr("0"), tr("Constant power(AC)"), \
                                         tr("AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. "
                                            "When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.\n"
                                            "For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. "
                                            "Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. "
                                            "Due to converter losses, the DC side power will be higher than the AC side power in this case."));

    //电网扩容使能
    ButtonToTable->add_SpecificationData(Grid_expansion_explain, myTable, line++, column, \
                                         tr("Enable"), tr("Grid expansion"), \
                                         tr("Grid Expansion: Enable, Disable. Enabling activates the Grid Expansion mode."));

    //电网容量
    ButtonToTable->add_SpecificationData(Grid_capacity_explain, myTable, line++, column, \
                                         tr("30"), tr("Grid capacity(kW)"), \
                                         tr("Grid Capacity: In the grid expansion mode, the maximum power limit is imposed on the grid side ."));

    //柴发充电功率限制
    ButtonToTable->add_SpecificationData(DG_Charging_power_limit, myTable, line++, column, \
                                         tr("10"), tr("DG Charging power limit"), \
                                         tr("DG Charging power limit: Diesel generators allow for the maximum charging power."));

    //柴发容量
    ButtonToTable->add_SpecificationData(DG_capacity_explain, myTable, line++, column, \
                                             "200", tr("DG capacity"), \
                                             tr("Diesel Generator: Rated Power of the Diesel Generator."));

    //开始充电SOC
    ButtonToTable->add_SpecificationData(Charge_SOC_explain, myTable, line++, column, \
                                         "20", tr("Start charging SOC"), \
                                         tr("Start charging SOC:"
                                            "\n (1) At the self-use mode, when the battery SOC is lower than the\"Start charging SOC\", the converter maintains the battery SOC at this value."
                                            "\n (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC."
                                            "\n (3) At the optimal mode, when the battery SOC is lower than the \"Start charging SOC\", the converter enters the FCP state and starts charging the battery. "
                                            "When the current SOC is greater than or equal to the \"Stop charging SOC\", the converter exits the FCP state and enters the ECP state."));

    //停止充电SOC
    ButtonToTable->add_SpecificationData(Disharge_SOC_explain, myTable, line++, column, \
                                         "50", tr("Stop charging SOC"), \
                                         tr("Stop charging SOC: When the SOC is greater than the \"Stop charging SOC\", the FCP state is released."));


    line = 0;
    column = 3;
    ButtonToTable->add_SpecificationData(DG_ECP_explain, myTable,line++, column, \
                                         tr("20"), tr("DG ECP"), \
                                         tr("In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone."));

    ButtonToTable->add_SpecificationData(DG_FCP_explain, myTable, line++, column, \
                                         tr("20"), tr("DG FCP"), \
                                         tr("Power reference value of AC side of the discharge area in Chai hair mode."));

    ButtonToTable->add_SpecificationData(Grid_ECP_explain, myTable, line++, column, \
                                         tr("0"), tr("Grid ECP"), \
                                         tr("In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone."));

    ButtonToTable->add_SpecificationData(Grid_FCP_explain, myTable, line++, column, \
                                         tr("0"), tr("Grid FCP"), \
                                         tr("In power grid mode, this parameter specifies the power reference value on the AC side of the vent area."));

    ButtonToTable->add_SpecificationData(Grid_EDP_explain, myTable, line++, column, \
                                         tr("100"), tr("Grid EDP"), \
                                         tr("The equalization zone limits the discharge power of the system to the grid side."));

    ButtonToTable->add_SpecificationData(Grid_FDP_explain, myTable, line++, column, \
                                         tr("100"), tr("Grid FDP"), \
                                         tr("The discharge zone limits the discharge power of the system to the power grid side."));

    line = 0;
    column = 5;
    //电池类型
    ButtonToTable->add_SpecificationData(Battery_type_explain, myTable, line++, column, \
                                         tr("Lithium"), tr("Battery type"), \
                                         tr("Battery Types: Lithium, Lead-Acid."));

    //BMS通信方式
    ButtonToTable->add_SpecificationData(BMS_Comm_type_explain, myTable, line++, column, \
                                         "CAN", tr("BMS Comm type"), \
                                         tr("Battery Communication Modes: None, RS485, CAN, Ethernet. "
                                            "(Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as \"CAN\" or \"Ethernet\" simultaneously.)"));

    //BMS厂家
    ButtonToTable->add_SpecificationData(BAT_manufacturers_explain, myTable, line++, column, \
                                         tr("Auto"), tr("BAT protocol"), \
                                         tr("Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol."
                                            "\nCurrently supported battery manufacturer protocols include:"
                                            "MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, PGS, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI,BGS,HUASU,ALPHA,SHIDING,Freedom."
                                            "\nSelect AUTO to automatically detect the battery manufacturer protocol."));

    //EMS通信方式
    ButtonToTable->add_SpecificationData(EMS_Comm_type_explain, myTable, line++, column, \
                                         "RS485", tr("EMS Comm type"), \
                                         tr("EMS communication methods: RS485, CAN, Ethernet.\nThe setting communication methods are readable and writable in remote mode, and only readable in local mode. "
                                            "The unselected communication methods are only readable in both remote and local mode."));

    //控制方式
    ButtonToTable->add_SpecificationData(Control_mode_explain, myTable, line++, column, \
                                         tr("Local"), tr("Control mode"), \
                                         tr("Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.\n"
                                            "    Remote: In remote mode, the EMS can perform both read and write control."));

    /*ButtonToTable->add_SpecificationData(G_Constant_power_explain,myTable, line++, column,\
                                         tr("0"), tr("Constant power(generators)"), \
                                         tr("."));


    ButtonToTable->add_SpecificationData(Constant_voltage_explain, myTable, line++, column, \
                                         tr("600"), tr("Constant voltage"), \
                                         tr("Enter the advanced settings interface and select the control power mode. "
                                            "Choose constant voltage and modify the voltage value. Converter will operate at the constant voltage value and function as a constant voltage source."));

    ButtonToTable->add_SpecificationData(Constant_current_explain, myTable, line++, column, \
                                         tr("100"), tr("Constant current"), \
                                         tr("Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value. "
                                            "Converter will charge or discharge the battery with this current value. Positive values represent discharging, while negative values represent charging."));

    ButtonToTable->add_SpecificationData(Output_power_factor_explain, myTable, line++, column, \
                                         tr("1"), tr("Output power factor"), \
                                         tr("This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. "
                                            "A positive value indicates leading reactive power, while a negative value indicates lagging reactive power."));


    ButtonToTable->add_SpecificationData(Output_reactive_power_explain, myTable, line++, column, \
                                         tr("1"), tr("Output reactive power"), \
                                         tr("This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power."));

    ButtonToTable->add_SpecificationData(Machine_number_explain, myTable, line++, column, \
                                         tr("M_01"), tr("Machine number"), \
                                         tr("Device number: You can set ID number, which can be set within the range of M_01 to M_12."));

    ButtonToTable->add_SpecificationData(Parallel_explain, myTable, line++, column, \
                                         tr("Disable"), tr("Parallel"), \
                                         tr("Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled."));*/
}
//设置DCDC控件到表格
void MyWidget::SetDCDCToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //工作模式
    ButtonToTable->add_SpecificationData(Work_parttern_explain, myTable, line++, column, \
                                         tr("MPPT"), tr("Work parttern"), \
                                         tr("DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT)."));

    //升/降压
    ButtonToTable->add_SpecificationData(Boost_or_Buck_explain, myTable, line++, column, \
                                         tr("Buck"), tr("Boost or Buck"), \
                                         tr("DCDC module operating modes: Buck, Boost."));

    line = 0;
    column = 3;
    //恒流值
    ButtonToTable->add_SpecificationData(Current_value_explain, myTable, line++, column, \
                                         tr("60"), tr("DC CC Value"), \
                                         tr("DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules)."));

    //恒压值
    ButtonToTable->add_SpecificationData(Voltage_level_explain, myTable, line++, column, \
                                         tr("300"), tr("DC CV Value"), \
                                         tr("DC Constant Voltage Value: Constant voltage target, range 200V-850V."));

    //外环集中控制
    ButtonToTable->add_SpecificationData(OuterLoopControl_explain, myTable, line++, column, \
                                         tr("Disable"), tr("Outer Ring Centralized Control"), \
                                         tr("Outer Ring Centralized Control：Multiple DCDC modules, especially when the DCDC module power fluctuation is significant."));
    line = 0;
    column = 5;
    //IV曲线扫描
    ButtonToTable->add_SpecificationData(IV_curve_scanning_explain, myTable, line++, column, \
                                         tr("Disable"), tr("IV curve scanning"), \
                                         tr("It is used for internal debugging only."));

    //IV曲线扫描低电压
    ButtonToTable->add_SpecificationData(IV_curve_scanning_low_explain, myTable, line++, column, \
                                         tr("0"), tr("IV curve scanning low voltage"), \
                                         tr("It is used for internal debugging only."));

    //IV曲线扫描高电压
    ButtonToTable->add_SpecificationData(IV_curve_scanning_high_explain, myTable, line++, column, \
                                         tr("0"), tr("IV curve scanning high voltage"), \
                                         tr("It is used for internal debugging only."));



}
//设置锂电池页控件到表格
void MyWidget::SetLithiumToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //并网DOD说明
    ButtonToTable->add_SpecificationData(DOD_OnGrid_explain, myTable, line++, column, \
                                   "90", tr("Grid-on DOD"), \
                                   tr("Grid-on DOD, allowable depth of discharge in grid-on mode."));

    //离网DOD说明
    ButtonToTable->add_SpecificationData(DOD_OffGrid_explain, myTable, line++, column, \
                                    "90", tr("Grid-off DOD"), \
                                    tr("Grid-off DOD, allowable depth of discharge in grid-off mode."));
    //DOD保护解除
    ButtonToTable->add_SpecificationData(DOD_Protection_Release_SOC_explain, myTable, line++, column, \
                                    "50", tr("Off-Grid DOD Protection Release SOC"), \
                                    tr("Off-Grid DOD Protection Release SOC: After triggering off-grid DOD protection, the off-grid DOD protection can only be lifted when the battery's SOC reaches this set value."));


    //充电电压上限说明
    ButtonToTable->add_SpecificationData(Charge_Volt_Upper_Limit_explain, myTable, line++, column, \
                                               "792", tr("Charging voltage upper limit"), \
                                                tr("Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down."));

    //充电电压上限回差说明
    ButtonToTable->add_SpecificationData(Charge_Volt_upper_Limit_delta_explain, myTable, line++, column, \
                                                      "10", tr("Charge Volt upper Limit delta"), \
                                                      tr("Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. "
                                                         "When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on."));

    line = 0;
    column = 3;
    //放电电压限制说明
    ButtonToTable->add_SpecificationData(Disc_Volt_lower_Limit_explain, myTable, line++, column, \
                                              "616", tr("Disc_Vol_lower_Limit"), \
                                              tr("Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down."));

    //放电电压下限回差说明
    ButtonToTable->add_SpecificationData(Discharge_Volt_upper_Limit_delta_explain, myTable, line++, column, \
                                                         "10", tr("Discharge Volt upper Limit delta"), \
                                                         tr("Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, "
                                                            "the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on."));

    //充电电流限制说明
    ButtonToTable->add_SpecificationData(Charge_Current_Limit_explain, myTable, line++, column, \
                                             "240", tr("Charge Current Limit"), \
                                             tr("Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging."));

    //放电电流限制说明
    ButtonToTable->add_SpecificationData(Discharge_Current_Limit_explain, myTable, line++, column, \
                                                "240", tr("Discharge Current Limit"), \
                                                tr("Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging."));

    //柴发开启SOC说明
    ButtonToTable->add_SpecificationData(Gen_turn_on_SOC_explain, myTable, line++, column, \
                                        "25", tr("Generator turn on SOC"), \
                                        tr("When the specified SOC is reached, the diesel generator starts."));

    //柴发关闭SOC说明
    ButtonToTable->add_SpecificationData(Gen_turn_off_SOC_explain, myTable, line++, column, \
                                         "85", tr("Generator turn off SOC"), \
                                         tr("When the specified SOC is reached, the diesel generator shuts down."));

    line = 0;
    column = 5;
    //强充开启说明
    ButtonToTable->add_SpecificationData(ForceCharge_start_explain, myTable, line++, column, \
                                          "2.85", tr("Force Charge On"), \
                                          tr("Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW."));

    // 强充结束说明
    ButtonToTable->add_SpecificationData(ForceCharge_top_explain, myTable, line++, column, \
                                        "3.2", tr("ForceCharge Off"), \
                                        tr("Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled."));

    //DCAC单体保护电压
    /*ButtonToTable->add_SpecificationData(DCAC_cell_protect_explain, myTable, line++, column, \
                                    "3650", tr("DCAC cell protect voltage"), \
                                    tr("When the battery current feedback type is 'Calculated Value', and the highest cell voltage in the battery reaches the cell protection voltage minus the cell protection voltage threshold,"
                                       "the Inverter will enable linear current limiting to restrict the charging current at that time."));*/

    //逻辑图查看说明
    View_LogicDiagram_explain->setText(tr("3650"));
    myTable->setCellWidget(line++, column, (QWidget *)View_LogicDiagram_explain);

    //DCAC单体保护电压回差
    ButtonToTable->add_SpecificationData(DCAC_cell_delta_explain, myTable, line++, column, \
                                    "50", tr("DCAC cell delta"), \
                                    tr("DCAC cell protect voltage delta."));

}
//设置铅酸电池页控件到表格
void MyWidget::SetLead_acidToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //容量
    ButtonToTable->add_SpecificationData(Capacity_explain, myTable, line++, column, \
                                        "0", tr("Capacity"), \
                                        tr("Capacity, the capacity of the lead-acid battery."));

    //电池节数
    ButtonToTable->add_SpecificationData(Cell_number_2V_explain, myTable, line++, column, \
                                        "0", tr("Cell_number_2V"), \
                                        tr("The number of battery cells connected in series in the battery stack (based on a 2V unit)."));

    //浮充电压
    ButtonToTable->add_SpecificationData(Bat_float_vol_explain, myTable, line++, column, \
                                        "0", tr("Battery float voltage"), \
                                        tr("This is the floating charge voltage."));

    //均充电压
    ButtonToTable->add_SpecificationData(Bat_filling_vol_explain, myTable, line++, column, \
                                        "0", tr("Battery filling voltage"), \
                                        tr("This is the filling voltage."));

    //充电限流值
    ButtonToTable->add_SpecificationData(Charge_limiting_value_explain, myTable, line++, column, \
                                        "0", tr("Charge limiting value"), \
                                        tr("Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)"));

    //放电限流值
    ButtonToTable->add_SpecificationData(Discharge_limiting_value_explain, myTable, line++, column, \
                                        "0", tr("Discharge limiting value"), \
                                        tr("Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)"));

    line = 0;
    column = 3;
    //发电机开启
    ButtonToTable->add_SpecificationData(Generator_turn_on_SOC_A1_explain, myTable, line++, column, \
                                        "0", tr("Generator turn on voltage(A1)"), \
                                        tr("Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up."));

    //发电机关闭
    ButtonToTable->add_SpecificationData(Generator_turn_off_SOC_B1_explain, myTable, line++, column, \
                                        "0", tr("Generator turn off voltage(B1)"), \
                                        tr("Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down."));

    //DCAC参考电压
    ButtonToTable->add_SpecificationData(DCACReferenceVoltage_explain, myTable, line++, column, \
                                        "10", tr("DCAC Reference Voltage"), \
                                        tr("."));

    //并网EOD
    ButtonToTable->add_SpecificationData(Grid_on_EOD_explain, myTable, line++, column, \
                                        "0", tr("Grid-on EOD"), \
                                        tr("Grid-on discharge cut-off voltage."));

    //离网EOD
        ButtonToTable->add_SpecificationData(Grid_off_EOD_explain, myTable, line++, column, \
                                            "0", tr("Grid-off EOD"), \
                                            tr("Grid-off discharge cut-off voltage."));
    line = 4;
    column = 5;
    //均充转浮充电流
    ButtonToTable->add_SpecificationData(Uniform_To_Flushing_current_explain, myTable, line++, column, \
                                        "0", tr("Uniform charging and flushing current"), \
                                        tr("Uniform charging to flushing current: Upper limit of 0.025C."));

    //浮充转均充电流
    ButtonToTable->add_SpecificationData(Flushing_To_Uniform_current_explain, myTable, line++, column, \
                                        "0", tr("Float turn uniform charging current"), \
                                         tr("Float turn to uniform charging current: Upper limit of 0.15C."));
}
//设置混合模式页控件到表格
void MyWidget::SetMixedTime_TabToTable(QTableWidget *myTable)
{
    QString temp1 = tr("Check");
    QString temp2 = tr("Start_Time");
    QString temp3 = tr("End_Time");
    QString temp4 = tr("Features");
    QString temp5 = tr("Power");
    QString temp6 = tr("08:00");
    QString temp7 = tr("10:00");
    QString temp8 = tr("End time: The system stops automatically running when the system reaches this time.");
    QString temp9 = tr("The function that will perform this function during business hours, there are two to choose from, They are Peak shaving,Economic mode.");
    QString temp10 = tr("Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.");
    QString temp11 = tr("Start time: When the system reaches this time, it starts to run automatically.");
    QString temp12 = tr("Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.");
    QString temp13 = tr("Peak shaving");
    QString temp14 = tr("Peak");//峰
    QString temp15 = tr("In the economic mode, select 'Peak' periods,'Flat' periods and 'Valley' periods based on electricity prices.");
    QString temp16 = tr("Peak-Flat-Valley");//峰-平-谷
    QString temp17 = tr("Generator action");
    QString temp18 = tr("Generator action:Generator trun on,Generator trun off,NONE.");
    QString temp19 = tr("Generator trun off");
    QString temp20 = tr("Generator trun on");
    QString temp21 = tr("NONE");
    QString temp22 = tr("Economic mode");

    for(int i = 0;i < 20; i++ )
    {
        if(i<5)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i), myTable,i, 0, "√", temp1, temp12);
        }
        else
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i), myTable,i, 0, "", temp1, temp12);
        }
        ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+20), myTable, i, 1, temp14, temp16, temp15);
        ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+40), myTable, i, 2, temp6, temp2, temp11);
        ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+60), myTable, i, 3, temp7, temp3, temp8);
        if(i%2==0)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+80), myTable, i, 4, temp13, temp4, temp9);
        }
        if(i%2==1)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+80), myTable, i, 4, temp22, temp4, temp9);
        }
        ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+100), myTable,i, 5, "10", temp5, temp10);
        if(i%3==0)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+120), myTable,i, 6, temp19, temp17, temp18);
        }
        else if(i%3==1)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+120), myTable,i, 6, temp20, temp17, temp18);
        }
        else if(i%3==2)
        {
            ButtonToTable->add_SpecificationData(MixedModeButtonList->at(i+120), myTable,i, 6, temp21, temp17, temp18);
        }

    }
}
//设置高级设置页1控件到表格
void MyWidget::SetAdvancedSetup1ToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //功率控制类型
    ButtonToTable->add_SpecificationData(Power_control_type_explain, myTable, line++, column,\
                                         "CP_AC" , tr("Power control type"), \
                                         tr("Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.\n"
                                            "Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.\n"
                                            "Constant Power AC (CP_AC) mode: The power level can be set at \"constant power.\" "
                                            "The value represents the power level, positive for discharge and negative for charge. "
                                            "For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, "
                                            "the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. "
                                            "Due to converter losses, the DC side power will be higher than the AC side power in this case.\nReserved."));

    //输出无功方式
    ButtonToTable->add_SpecificationData(Output_reactive_power_mode_explain, myTable, line++, column, \
                                         tr("Non adjustable"), tr("Output reactive power mode"), \
                                         tr("Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable."));

    //输出无功功率
    ButtonToTable->add_SpecificationData(Output_reactive_power_explain, myTable, line++, column, \
                                        tr("1"), tr("Output reactive power"), \
                                        tr("This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power."));

    //输出功率因素
    ButtonToTable->add_SpecificationData(Output_power_factor_explain, myTable, line++, column, \
                                        tr("1"), tr("Output power factor"), \
                                        tr("This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. "
                                           "A positive value indicates leading reactive power, while a negative value indicates lagging reactive power."));
    //恒压值
    ButtonToTable->add_SpecificationData(Constant_voltage_explain, myTable, line++, column, \
                                         tr("600"), tr("Constant voltage"), \
                                         tr("Enter the advanced settings interface and select the control power mode."
                                            "Choose constant voltage and modify the voltage value."
                                            "Converter will operate at the constant voltage value and function as a constant voltage source."));

    //恒流值
    ButtonToTable->add_SpecificationData(Constant_current_explain, myTable, line++, column, \
                                         tr("100"), tr("Constant current"), \
                                         tr("Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value."
                                            "Converter will charge or discharge the battery with this current value."
                                            "Positive values represent discharging, while negative values represent charging."));

    //输出功率限制
    ButtonToTable->add_SpecificationData(Output_power_limit_explain, myTable, line++, column,\
                                         "100", tr("Output power limit"), \
                                         tr("Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter."));

    //设备号
    ButtonToTable->add_SpecificationData(Machine_number_explain, myTable, line++, column,\
                                       tr("M_01"), tr("Machine number"), \
                                       tr("Device number: You can set ID number, which can be set within the range of M_01 to M_12."));



    //并机
    ButtonToTable->add_SpecificationData(Parallel_explain, myTable, line++, column,\
                                         tr("Disable"), tr("Parallel"), \
                                         tr("Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled."));

    line = 0;
    column = 3;
    //主机地址
    ButtonToTable->add_SpecificationData(Host_Address_explain, myTable, line++, column,\
                                         "1", tr("Serial Communication Address"), \
                                         tr("Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication."));

    ButtonToTable->add_SpecificationData(serial_port_1_explain, myTable, line++, column, \
                                         "9600", tr("serial port 2"), \
                                         tr("Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.\
                                            The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1)."));

    ButtonToTable->add_SpecificationData(serial_port_2_explain, myTable, line++, column, \
                                         "9600", tr("serial port 3"), \
                                         tr("Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. "
                                            "The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1)."));

    ButtonToTable->add_SpecificationData(serial_port_3_explain, myTable, line++, column, \
                                         "9600", tr("serial port 4"), \
                                         tr("Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. "
                                            "The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1)."));

    ButtonToTable->add_SpecificationData(serial_port_4_explain, myTable, line++, column, \
                                         "9600", tr("serial port 5"), \
                                         tr("Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. "
                                            "The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1)."));

    ButtonToTable->add_SpecificationData(serial_port_5_explain, myTable, line++, column, \
                                         "9600", tr("serial port 6"), \
                                         tr("Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. "
                                            "The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1)."));

    ButtonToTable->add_SpecificationData(Can_port_1_explain, myTable, line++, column, \
                                         "500", tr("Can port 1"), \
                                         tr("CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified."));

    ButtonToTable->add_SpecificationData(Can_port_2_explain, myTable, line++, column, \
                                         "250", tr("Can port 2"), \
                                         tr("CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps."));

    //能量优先级说明
    ButtonToTable->add_SpecificationData(Energy_priority_explain, myTable, line++, column, \
                                        tr("Bat>Grid"), tr("Energy priority"), \
                                        tr("Energy Priority: You can choose whether to preferentially use electricity from the grid or battery."));

    line = 0;
    column = 5;
    //电池容量告警
    ButtonToTable->add_SpecificationData(BatteryCapacityAlarm_explain, myTable, line++, column, \
                                         tr("Disable"), tr("Battery Capacity Alarm"), \
                                         tr("Battery Capacity Alarm: Enable,Disable.It is effective in Grid Expansion mode and is used to prevent over-discharge of the battery.\n"
                                            "    When the battery SOC is lower than the \"Charge SOC\" or \"On-Grid DOD\", the system will enter low protection mode for battery capacity. "
                                            "If, at this time, the load still exceeds the set grid capacity value and battery discharge is required, the system will shut down after the battery has been discharging continuously for 3 minutes."));
    //BMS通信故障判断时间
    ButtonToTable->add_SpecificationData(BmsComFaultTime_explain, myTable, line++, column, \
                                         tr("20"), tr("Bms Com. Fault Time"), \
                                         tr("BMS communication fault determination time: "
                                            "The BMS communication fault determination time refers to the BMS communication fault "
                                            "when the BMS communication is disconnected and the communication is not recovered after a preset period of time."));

    //EMS通信故障判断时间
    ButtonToTable->add_SpecificationData(EMSComFaultModel_explain, myTable, line++, column, \
                                         tr("120"), tr("EMS Com. Fault Model"), \
                                         tr("EMS communication fault determination time: "
                                            "The EMS communication fault determination time refers to the time "
                                            "when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time."));

    //语言
    /*QString language_str;
    if(LanguageType)
    {
        language_str = QString(tr("English"));
    }
    else {
        language_str = QString(tr("Chinese"));
    }*/
    ButtonToTable->add_SpecificationData(Language_explain, myTable, line++, column, \
                                         tr("English"), tr("Language"), \
                                         tr("You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language."));

    //声音
    ButtonToTable->add_SpecificationData(Sounds_explain, myTable, line++, column, \
                                         tr("Allow"), tr("Sounds"), \
                                         tr("Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid)."));

    //清除数据
    ButtonToTable->add_SpecificationData(Clear_Data_explain, myTable, line++, column, \
                                         tr("Clear"), tr("Clear Data"), \
                                         tr("Clear previous recorded data and operation data of the system."));

    //系统升级说明
    System_upgrade_explain->setText(tr("upgrade"));
    myTable->setCellWidget(line++, column, (QWidget *)System_upgrade_explain);

    //备份设置参数
    ButtonToTable->add_SpecificationData(BackupSetParameters_explain, myTable,line++, column, \
                                         tr("Backup"), tr("Backup Set Parameters"), \
                                         tr("Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed."));

    //恢复备份设置参数
    ButtonToTable->add_SpecificationData(RestoreBackupSetParameters_explain, myTable,line++, column, \
                                         tr("Restore\nBackup"), tr("Restore Backup Set Parameters"), \
                                         tr("Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device."));
}
//设置高级设置页2控件到表格
void MyWidget::SetAdvancedSetup2ToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //协议版本
    ButtonToTable->add_SpecificationData(ProtocolVersion_explain, myTable, line++, column, \
                                         "V1.0", tr("ProtocolVersion"), \
                                         tr("Protocol version: View the current protocol version. The default protocol version number is V1.0."));

    //恢复出厂
    ButtonToTable->add_SpecificationData(Restore_factory_explain, myTable,line++, column, \
                                         tr("restore"), tr("Restore factory"), \
                                         tr("Restore the factory default Settings."));

    //电池电流反馈类型
    ButtonToTable->add_SpecificationData(BatteryCurrentFeedbackType_explain, myTable,line++, column, \
                                         tr("Calculated value"), tr("Battery current feedback type"), \
                                         tr("The types of battery current feedback include 'Calculated Value' and 'BMS Value'.\n"
                                            "Calculated Value: When the highest cell voltage in the battery reaches the cell protection voltage mi nus the cell protection voltage delta,"
                                            "the inverter will enable linear current limiting to restrict the charging current at that time.\n"
                                            "BMS Value: The inverter restricts the charging current based on the charging current limit value uploaded by the BMS.\n"
                                            "The default is Calculated Value."));

    line = 0;
    column = 3;
    //释放充电标志
    ButtonToTable->add_SpecificationData(Relese_Charge_mark_explain, myTable,line++, column, \
                                         tr("Follow\nbattery"), tr("Release Prohibited Charging Flag"), \
                                         tr("When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%."));

    //释放禁放标志
    ButtonToTable->add_SpecificationData(Relese_discharge_mark_explain, myTable,line++, column, \
                                         tr("Follow\nbattery"), tr("Release Prohibited Discharging Flag"), \
                                         tr("When the battery SOC is higher than the selected value, there are four options: Follow battery, 5%, 10%, 15%."));

    //电表防逆流
    ButtonToTable->add_SpecificationData(ElectricityMeterAntiBackflow_explain, myTable,line++, column, \
                                         tr("Disable"), tr("Electric Meter Anti-Reverse Flow"), \
                                         tr("Electric Meter Anti-Reverse Flow：Enable、Disable.\n"
                                            "Enabling prevents system current from flowinginto the grid while Disabling allows systemcurrent to flow into the grid."));

    line = 0;
    column = 5;
    //用户密码
    ButtonToTable->add_SpecificationData(UserPassPort_explain, myTable, line++, column, \
                                         "123456", tr("User password"), \
                                         tr("User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)"));

    //维护密码
    ButtonToTable->add_SpecificationData(RootPassport_explain, myTable, line++, column,\
                                         "******", tr("Maintain password"), \
                                         tr("Maintain password: Available for resetting the maintain password.(Note: The maintain password must be six digits.)"));

    //电表型号
        ButtonToTable->add_SpecificationData(MeterModel_explain, myTable,line++, column, \
                                             tr("NONE"), tr("Meter Model"), \
                                             tr("Select the meter model based on the type of meter. Currently available models include: DTSD1352, AMC96E4KC, ADL3000EB, and AMC72_96."));

}
//设置高级设置页3控件到表格
void MyWidget::SetAdvancedSetup3ToTable(QTableWidget *myTable)
{
    int line = 0;int column = 1;//当前解释的button行和列
    //功率变化率
    ButtonToTable->add_SpecificationData(Change_rate_of_power_explain, myTable, line++, column, \
                                             "20", tr("Power change rate"), \
                                             tr("Power change rate: the rate at which power changes within a second ."));
    //电网频率变化范围上限
    ButtonToTable->add_SpecificationData(Grid_frequency_upper_limit_explain, myTable, line++, column, \
                                         "0.2", tr("Upper limit of power grid frequency variation range"), \
                                         tr("Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5."));

    //电网频率变化范围下限
    ButtonToTable->add_SpecificationData(Grid_frequency_lower_limit_explain, myTable, line++, column, \
                                         "-0.5", tr("Lower limit of power grid frequency variation range"), \
                                         tr("Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5."));

    //电压保护范围上限
    ButtonToTable->add_SpecificationData(Vol_protection_upper_limit_explain, myTable, line++, column, \
                                         "+15", tr("Vol protection upper limit"), \
                                         tr("Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20."));

    //电压保护范围下限
    ButtonToTable->add_SpecificationData(Vol_protection_lower_limit_explain, myTable, line++, column, \
                                         "-15", tr("Vol protection lower limit"), \
                                         tr("Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20."));

    //高穿使能说明
    ButtonToTable->add_SpecificationData(HVRT_enable_explain, myTable, line++, column, \
                                         tr("prohibit"), tr("HVRT enable"), \
                                         tr("High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)"));

    //低穿使能说明
    ButtonToTable->add_SpecificationData(LVRT_enable_explain, myTable, line++, column, \
                                         tr("prohibit"), "LVRT enable", \
                                         tr("Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)"));
    //孤岛使能说明
    ButtonToTable->add_SpecificationData(AFD_enable_explain, myTable, line++, column, \
                                         tr("prohibit"), tr("AFD enable"), \
                                         tr("Prevent islanding effect. When islanding effect is detected "
                                            "(in a photovoltaic grid-on system, when a power outage occurs in the main grid, "
                                            "and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, "
                                            "it can easily sustain power generation independently, "
                                            "resulting in an 'island' phenomenon, which endangers the safety of maintenance personnel), "
                                            "the converter automatically shuts down. The options for this feature can be set as 'Enable' or 'prohibited'."
                                            "(Note: This option is generally used in large grid-on power stations.)"));

    //一次调频使能说明
    ButtonToTable->add_SpecificationData(PrimaryFreq_enable_explain, myTable, line++, column, \
                                       tr("prohibit"), tr("PrimaryFreq enable"), \
                                       tr("Primary frequency control enable: "
                                          "When the grid frequency deviates from the rated value, "
                                          "the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. "
                                          "(Note: This option is generally used in large grid-on power stations.)"));

    line = 0;
    column = 3;
    //机器型号
    ButtonToTable->add_SpecificationData(Machine_type_explain, myTable, line++, column, \
                                         "MPS-TS", tr("Machine type"), \
                                         tr("Converter Model: As per factory settings, generally not modifiable."));

    //机器容量
    ButtonToTable->add_SpecificationData(Machine_capacity_explain, myTable, line++, column, \
                                         "100", tr("Machine capacity"), \
                                             tr("The rated capacity of the converter shall be based on the factory value and cannot be changed."));

    //变压器变比
    ButtonToTable->add_SpecificationData(Converter_side_vol_level_explain, myTable, line++, column, \
                                         "270:400", tr("Transformer Turns Ratio"), \
                                                 tr("Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable."));

    //输出电压等级
    ButtonToTable->add_SpecificationData(Output_vol_level_explain, myTable, line++, column, \
                                         "400", tr("Output vol level"), \
                                         tr("Output Voltage Level: As per factory settings, generally not modifiable."));

    //输出频率等级
    ButtonToTable->add_SpecificationData(Output_Fre_grade_explain, myTable, line++, column, \
                                         "50", tr("Output Fre grade"), \
                                         tr("Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz."));

    //变流器防逆流
    ButtonToTable->add_SpecificationData(Grid_connected_mode_of_Inv_explain, myTable, line++, column, \
                                         tr("Non countercurrent"), tr("Converter Anti-Reverse Flow"), \
                                         tr("Converter Anti-Reverse Flow: Countercurrent, Non Countercurrent;\n"
                                            "Countercurrent allows converter current to flow into the grid, while Non Countercurrent prevents converter current from flowing into the grid."));

    //过载降频
    ButtonToTable->add_SpecificationData(Pshedding_Freq_explain, myTable, line++, column, \
                                        tr("prohibit"), tr("Pshedding Freq"), \
                                        tr("Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)"));

    //转动惯量使能说明
    ButtonToTable->add_SpecificationData(Inertia_enable_explain, myTable, line++, column, \
                                         tr("prohibit"), tr("Inertia enable"), \
                                         tr("Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)"));

    //QP曲线
    ButtonToTable->add_SpecificationData(QP_curve_explain, myTable, line++, column, \
                                        tr("prohibit"), tr("QP curve"), \
                                        tr("QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)"));
    line = 0;
    column = 5;
    //模块数
    ButtonToTable->add_SpecificationData(Module_Number_explain, myTable, line++, column, \
                                        "1", tr("Module Number"), \
                                        tr("Number of modules, default 1(invalid setting)."));

    //机架
    ButtonToTable->add_SpecificationData(Machine_Type_explain, myTable, line++, column, \
                                        "DCAC", tr("Rack"), \
                                        tr("When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect."
                                           "You can only modify the database to restore the DCAC interface."
                                           "(Note:As per factory settings, generally not modifiable.)"));

    //最大模块号
    ButtonToTable->add_SpecificationData(Module_max_explain, myTable, line++, column, \
                                         "2", tr("Module max"), \
                                         tr("Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)"));

    //最小模块号
    ButtonToTable->add_SpecificationData(Module_min_explain, myTable, line++, column, \
                                         "1", tr("Module min"), \
                                         tr("Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)"));

    //电网恢复并网时间
    ButtonToTable->add_SpecificationData(Grid_recovery_time_explain, myTable, line++, column, \
                                         "0", tr("Grid recovery time"), \
                                         tr("Grid restoration time: reserved function, setting invalid."));

    //DCAC绝缘检测使能
    ButtonToTable->add_SpecificationData(Insulation_detection_enable_DCAC_explain, myTable, line++, column, \
                                         tr("Disable"), tr("Insulation detection enable DCAC"), \
                                         tr("DCAC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)"));
    //DCDC绝缘检测使能
    ButtonToTable->add_SpecificationData(Insulation_detection_enable_DCDC_explain, myTable, line++, column, \
                                         tr("Disable"), tr("Insulation detection enable DCDC"), \
                                         tr("DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)"));

    //恒压并机
    ButtonToTable->add_SpecificationData(CV_parallel_explain, myTable, line++, column, \
                                         tr("prohibit"), tr("CV parallel"), \
                                         tr("Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)"));
}
//设置高级设置外设页控件到表格
void MyWidget::Device_TabToTable(QTableWidget *myTable)
{
    QString str = tr("Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.");
    QString str1 = tr("When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.");
    QString str2 = tr("Input Dry Contact: nEnabled: "
                      "Triggers the Action when the dry contact detects a state other than the specified NO/NC."
                      "\nDisabled: No action is taken when the dry contact detects a state other than the specified NO/NC.");

    //使能/禁止
    int line = 0;int column = 0;//当前解释的button行和列
    ButtonToTable->add_SpecificationData(DI_1_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_1_Enable"), str2);

    ButtonToTable->add_SpecificationData(DI_2_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_2_Enable"), str2);

    ButtonToTable->add_SpecificationData(DI_3_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_3_Enable"), str2);

    ButtonToTable->add_SpecificationData(DI_4_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_4_Enable"), str2);

    ButtonToTable->add_SpecificationData(DI_5_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_5_Enable"), str2);

    ButtonToTable->add_SpecificationData(DI_6_Enable_explain, myTable, line++, column, \
                                    tr("Enable"), tr("DI_6_Enable"), str2);
    //常开/常闭
    line = 0;
    column = 1;
    ButtonToTable->add_SpecificationData(DI_1_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_1_NC_O"), str);

    ButtonToTable->add_SpecificationData(DI_2_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_2_NC_O"), str);

    ButtonToTable->add_SpecificationData(DI_3_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_3_NC_O"), str);

    ButtonToTable->add_SpecificationData(DI_4_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_4_NC_O"), str);

    ButtonToTable->add_SpecificationData(DI_5_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_5_NC_O"), str);

    ButtonToTable->add_SpecificationData(DI_6_NC_O_explain, myTable, line++, column, \
                                    tr("N_O"), tr("DI_6_NC_O"), str);

    //动作
    line = 0;
    column = 2;
    ButtonToTable->add_SpecificationData(DI_1_Action_explain, myTable, line++, column, \
                                    tr("Shut down"), tr("DI_1_Action"), str1);

    ButtonToTable->add_SpecificationData(DI_2_Action_explain, myTable, line++, column, \
                                    tr("Prompt"), tr("DI_2_Action"), str1);

    ButtonToTable->add_SpecificationData(DI_3_Action_explain, myTable, line++, column, \
                                    tr("Prompt"), tr("DI_3_Action"), str1);

    ButtonToTable->add_SpecificationData(DI_4_Action_explain, myTable, line++, column, \
                                    tr("Prompt"), tr("DI_4_Action"), str1);

    ButtonToTable->add_SpecificationData(DI_5_Action_explain, myTable, line++, column, \
                                    tr("Shut down"), tr("DI_5_Action"), str1);

    ButtonToTable->add_SpecificationData(DI_6_Action_explain, myTable, line++, column, \
                                    tr("Shut down"), tr("DI_6_Action"), str1);
}
//设置高级设置DCAC调试页控件到表格
void MyWidget::DCAC_Debugg(QTableWidget *myTable)
{
    QString str = tr("It is used for internal debugging only.");

    int line = 0;int column = 1;
    //调试变量1
    ButtonToTable->add_SpecificationData(Debug_variable_1_explain, myTable, line++, column, \
                                         "0", tr("Debug variable 1"),str);

    //调试变量2
    ButtonToTable->add_SpecificationData(Debug_variable_2_explain, myTable, line++, column, \
                                         "0", tr("Debug variable 2"),str);

    //调试变量3
    ButtonToTable->add_SpecificationData(Debug_variable_3_explain, myTable, line++, column, \
                                         "0", tr("Debug variable 3"),str);

    //调试内存变量1
    ButtonToTable->add_SpecificationData(Debug_memery_var_1_explain, myTable, line++, column, \
                                         "0", tr("Debug memery var 1"), str);

    //调试内存变量2
    ButtonToTable->add_SpecificationData(Debug_memery_var_2_explain, myTable, line++, column, \
                                         "0", tr("Debug memery var 2"), str);

    //调试内存变量3
    ButtonToTable->add_SpecificationData(Debug_memery_var_3_explain, myTable, line++, column, \
                                         "0", tr("Debug memery var 3"), str);

    //调试地址变量1
    ButtonToTable->add_SpecificationData(Debug_variable_1_addr_explain, myTable, line++, column, \
                                         "4096", tr("Debug variable 1 addr"), str);

    //调试地址变量2
    ButtonToTable->add_SpecificationData(Debug_variable_2_addr_explain, myTable, line++, column, \
                                         "4096", tr("Debug variable 2 addr"), str);

    //调试地址变量3
    ButtonToTable->add_SpecificationData(Debug_variable_3_addr_explain, myTable, line++, column, \
                                         "4096", tr("Debug variable 3 addr"), str);

    //开关机状态字
    ButtonToTable->add_SpecificationData(INV_On_off_flag_explain, myTable, line++, column, \
                                         "0", tr("INV On off flag"), str);
    line = 0;
    column = 3;
    //电网A相电压系数
    ButtonToTable->add_SpecificationData(Grid_A_AB_Vol_revise_explain, myTable, line++, column, \
                                         "", tr("Grid A AB Vol revise"), str);

    //电网B相电压系数
    ButtonToTable->add_SpecificationData(Grid_B_BC_Vol_revise_explain, myTable, line++, column, \
                                         "", tr("Grid B BC Vol revise"), str);

    //电网C相电压系数
    ButtonToTable->add_SpecificationData(Grid_C_CA_Vol_revise_explain, myTable, line++, column, \
                                         "", tr("Grid C CA Vol revise"), str);

    //输出A相电流系数
    ButtonToTable->add_SpecificationData(Output_A_Cur_revise_explain, myTable, line++, column, \
                                         "", tr("Output A Cur revise"), str);

    //输出B相电流系数
    ButtonToTable->add_SpecificationData(Output_B_Cur_revise_explain, myTable, line++, column, \
                                         "", tr("Output B Cur revise"), str);

    //输出C相电流系数
    ButtonToTable->add_SpecificationData(Output_C_Cur_revise_explain, myTable, line++, column, \
                                         "", tr("Output C Cur revise"), str);

    //1.5V电压系数
    ButtonToTable->add_SpecificationData(Voltage_1_5_revise_explain, myTable, line++, column, \
                                         "", tr("Voltage 1.5 revise"), str);

    //母线电压系数
    ButtonToTable->add_SpecificationData(Bus_Vol_revise_explain, myTable, line++, column, \
                                         "", tr("Bus Vol revise"), str);

    //逻辑状态字
    ButtonToTable->add_SpecificationData(Logic_state_explain, myTable, line++, column, \
                                         "0", tr("Logic state"), str);

    //逆变状态字
    ButtonToTable->add_SpecificationData(INV_flag_explain, myTable, line++, column, \
                                         "0", tr("INV flag"), str);
    line = 0;
    column = 5;
    //输入电压系数
    ButtonToTable->add_SpecificationData(Input_Vol_revise_explain, myTable, line++, column, \
                                   "", tr("Input Vol revise"), str);

    //输入电流系数
    ButtonToTable->add_SpecificationData(Input_Cur_revise_explain, myTable, line++, column, \
                                   "", tr("Input Cur revise"), str);

    //逆变A相电压系数
    ButtonToTable->add_SpecificationData(INV_A_Vol_revise_explain, myTable, line++, column, \
                                   "", tr("INV A Vol revise"), str);

    //逆变B相电压系数
    ButtonToTable->add_SpecificationData(INV_B_Vol_revise_explain, myTable, line++, column, \
                                   "", tr("INV B Vol revise"), str);

    //逆变C相电压系数
    ButtonToTable->add_SpecificationData(INV_C_Vol_revise_explain, myTable, line++, column, \
                                   "", tr("INV C Vol revise"), str);

    //电池电压状态字
    ButtonToTable->add_SpecificationData(PV_flag_explain, myTable, line++, column, \
                                   "0", tr("PV flag"), str);

    //母线状态字
    ButtonToTable->add_SpecificationData(DC_bus_flag_explain, myTable, line++, column, \
                                   "0", tr("DC bus flag"), str);

    //中断状态字
    ButtonToTable->add_SpecificationData(INT_main_flag_explain, myTable, line++, column, \
                                   "0", tr("INT main flag"), str);

    //电网保护状态字
    ButtonToTable->add_SpecificationData(Grid_protect_flag_explain, myTable, line++, column, \
                                   "0", tr("Grid protect flag"), str);

    //电网状态字
    ButtonToTable->add_SpecificationData(Grid_flag_explain, myTable, line++, column, \
                                   "0", tr("Grid flag"), str);
    line = 0;
    column = 7;
    //逆变A相电感电流系数
    ButtonToTable->add_SpecificationData(INV_A_ind_Cur_revise_explain, myTable, line++, column, \
                                   "", tr("INV A inductance Cur revise"), str);

    //逆变B相电感电流系数
    ButtonToTable->add_SpecificationData(INV_B_ind_Cur_revise_explain, myTable, line++, column, \
                                   "", tr("INV B inductance Cur revise"), str);

    //逆变C相电感电流系数
    ButtonToTable->add_SpecificationData(INV_C_ind_Cur_revise_explain, myTable, line++, column, \
                                   "", tr("INV C inductance Cur revise"), str);

    //电池状态字
    ButtonToTable->add_SpecificationData(Bat_State_explain, myTable, line++, column, \
                                   "0", tr("Bat State"), str);

    //电池信息字
    ButtonToTable->add_SpecificationData(Bat_Infor_explain, myTable, line++, column, \
                                   "0", tr("Bat Infor"), str);

    //监控命令状态字
    ButtonToTable->add_SpecificationData(Monitor_Order_explain, myTable, line++, column, \
                                   "0", tr("Monitor Order"), str);

    //并机状态字
    ButtonToTable->add_SpecificationData(parallel_signal_explain, myTable, line++, column, \
                                   "0", tr("parallel signal"), str);

}
//设置高级设置DCDC调试页控件到表格
void MyWidget::DCDC_Debugg(QTableWidget *myTable)
{
    QString str = tr("It is used for internal debugging only.");
    int line = 0;int column = 1;
    //调试变量1
    ButtonToTable->add_SpecificationData(DC_Debug_variable_1_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 1"), str);

    //调试变量2
    ButtonToTable->add_SpecificationData(DC_Debug_variable_2_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 2"), str);

    //调试变量3
    ButtonToTable->add_SpecificationData(DC_Debug_variable_3_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 3"), str);

    //当前模块号
    ButtonToTable->add_SpecificationData(Current_ID_explain, myTable, line++, column, \
                                   "1", tr("Debug variable 3"), str);

    //中断状态字
    ButtonToTable->add_SpecificationData(DC_INT_main_flag_explain, myTable, line++, column, \
                                   "0", tr("INT main flag"), str);

    //母线状态字
    ButtonToTable->add_SpecificationData(DC_DC_bus_flag_explain, myTable, line++, column, \
                                   "0", tr("DC bus flag"), str);

    //电池电压状态字
    ButtonToTable->add_SpecificationData(DC_PV_flag_explain, myTable, line++, column, \
                                   "0", tr("PV flag"), str);
    line = 0;
    column = 3;
    //调试地址变量1
    ButtonToTable->add_SpecificationData(DC_Debug_variable_1_addr_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 1 addr"), str);

    //调试地址变量2
    ButtonToTable->add_SpecificationData(DC_Debug_variable_2_addr_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 2 addr"), str);

    //调试地址变量3
    ButtonToTable->add_SpecificationData(DC_Debug_variable_3_addr_explain, myTable, line++, column, \
                                   "0", tr("Debug variable 3 addr"), str);
    line++;
    //开关机状态字
    ButtonToTable->add_SpecificationData(DC_INV_On_off_flag_explain, myTable, line++, column, \
                                   "0", tr("INV On off flag"), str);

    //开关机状态字2
    ButtonToTable->add_SpecificationData(DCONV_logic_explain, myTable, line++, column, \
                                    "0", tr("INV On off flag2"), str);

    //并机状态字
    ButtonToTable->add_SpecificationData(DC_parallel_signal_explain, myTable, line++, column, \
                                   "0", tr("parallel signal"), str);
    line = 0;
    column = 5;
    //调试内存变量1
    ButtonToTable->add_SpecificationData(DC_Debug_memery_var_1_explain, myTable, line++, column, \
                                   "0", tr("Debug memery var 1"), str);

    //调试内存变量2
    ButtonToTable->add_SpecificationData(DC_Debug_memery_var_2_explain, myTable, line++, column, \
                                   "0", tr("Debug memery var 2"), str);

    //调试内存变量3
    ButtonToTable->add_SpecificationData(DC_Debug_memery_var_3_explain, myTable, line++, column, \
                                   "0", tr("Debug memery var 3"), str);
    line++;
    //监控命令状态字
    ButtonToTable->add_SpecificationData(DC_Monitor_Order_explain, myTable, line++, column, \
                                   "0", tr("Monitor Order"), str);

    //电池信息字
    ButtonToTable->add_SpecificationData(DC_Bat_Infor_explain, myTable, line++, column, \
                                   "0", tr("Bat Infor"), str);

    //电池状态字
    ButtonToTable->add_SpecificationData(DC_Bat_State_explain, myTable, line++, column, \
                                   "0", tr("Bat State"), str);
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
    QMessageBox::question(this, tr("Y  -")\
                          ,tr("To view the data for the previous year."), tr("OK"));
}
/********* 点击Y+ *********/
void MyWidget::on_Add_Y_clicked()
{
    QMessageBox::question(this, tr("Y  +")\
                          ,tr("To view the data for the next year."), tr("OK"));
}
/********* 点击M- *********/
void MyWidget::on_Subtract_M_clicked()
{
    QMessageBox::question(this, tr("M  -")\
                          ,tr("To view the data of the previous month."), tr("OK"));
}
/********* 点击M+ *********/
void MyWidget::on_Add_M_clicked()
{
    QMessageBox::question(this, tr("M  +")\
                          ,tr("To view the data for the next month."), tr("OK"));
}
/********* 点击D- *********/
void MyWidget::on_Subtract_D_clicked()
{
    QMessageBox::question(this, tr("D  -")\
                          ,tr("To view the data of the previous day."), tr("OK"));
}
/********* 点击D+ *********/
void MyWidget::on_Add_D_clicked()
{
    QMessageBox::question(this, tr("D  +")\
                          ,tr("To view the data of the next day."), tr("OK"));
}
/********* 导出历史记录 *********/
void MyWidget::on_OutPut_historyFailuer_clicked()
{
    QMessageBox::question(this, tr("History Records")\
                          ,tr("Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel."), tr("OK"));//导出历史记录，点击此处将会导出历史记录到U盘里,导出到U盘的文件为Record.csv，此文件需要用Excel打开
}
/********* 导出操作日志 *********/
void MyWidget::on_Output_OperationLog_clicked()
{
    QMessageBox::question(this, tr("OperationLog")\
                          ,tr("Export operation log. Click here to export operation log to U disk."), tr("OK"));
}
/********* 导出电量统计表 *********/
void MyWidget::on_CoulombmeterReport_btn_clicked()
{
    QMessageBox::question(this, tr("Electricity Statistical Table")\
                          ,tr("Export the battery statistics. Click here to export the battery statistics to the U disk.\nThe accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value."), tr("OK"));//导出电量统计表，点击此处将会导出电量统计表到U盘里.精度为0.1,即所得数据*0.1为实际的数值.
}
/********* 退出U盘 *********/
void MyWidget::on_Eject_btn_clicked()
{
    QMessageBox::question(this, tr("Eject U disk")\
                          ,tr("Eject U disk."), tr("OK"));
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

/****************DCDC 变流器开启*****************/
void MyWidget::on_Switch_on_Inv_clicked()
{
    QMessageBox::question(this, tr("Turn on"), tr("The switch to turn on the DCDC converter, click to activate the DCDC converter."), tr("OK"));
}
/****************DCDC 变流器关闭*****************/
void MyWidget::on_Switch_off_Inv_clicked()
{
    QMessageBox::question(this, tr("Turn off"), tr("The switch to turn off the DCDC converter, click to deactivate the DCDC converter."), tr("OK"));
}
/****************DCAC 变流器开启*****************/
void MyWidget::on_Switch_on_clicked()
{
    QMessageBox::question(this, tr("Turn on"), tr("The switch to turn on the DCAC converter, click to activate the DCAC converter."), tr("OK"));
}
/****************DCAC 变流器关闭*****************/
void MyWidget::on_Switch_off_clicked()
{
    QMessageBox::question(this, tr("Turn off"), tr("The switch to turn off the DCAC converter, click to deactivate the DCAC converter."), tr("OK"));
}

/****************变流器当前状态*****************/
void MyWidget::on_Converter_State_btn_clicked()
{
    QMessageBox::question(this, tr("Converter State"), tr("Display the current status of the DCAC converter."), tr("OK"));
}
/****************DCDC模块状态*****************/
void MyWidget::on_DCDC_Module_State_btn_clicked()
{
    QMessageBox::question(this, tr("DCDC Module State"), tr("Rotate to display the status of each online DCDC module."), tr("OK"));
}
/**************模式介绍************/
void MyWidget::on_ModeInfo_bt_clicked()
{
    ui->UI_stackedWidget->setCurrentWidget(ui->UI_page);
    ui->stackedWidget->setCurrentWidget(ui->Wordking_page);
    ui->Set_stackedWidget->setCurrentWidget(ui->Introduction_page);//切换到 模式介绍页
    ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
}
//下一页
void MyWidget::on_SetNext_bt_clicked()
{
    if( CurrentCheckMode != 5 )
    {
        System_Current_Page++;
        if( System_Current_Page > MixedMode_PAGE_NUM  )
        {
            System_Current_Page = DCAC_PAGE_NUM;
        }
        if( (System_Current_Page == Lithium_PAGE_NUM) || (System_Current_Page == Lead_PAGE_NUM) )
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(Lithium_PAGE_NUM+1).arg(SystemTotal_PAGE) );
        }
        else if( System_Current_Page > Lead_PAGE_NUM )
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page).arg(SystemTotal_PAGE) );
        }
        else
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page+1).arg(SystemTotal_PAGE) );
        }
        if( System_Current_Page == MixedMode_PAGE_NUM )
        {

        }
        ui->PageInfo_lb->setText(Mode_title_Str.at(System_Current_Page));
        ui->setpage_stackedWidget->setCurrentIndex( System_Current_Page );//根据页面索引号切换页面
    }
    else if( CurrentCheckMode == 5 )
    {
        Advanced_Current_Page++;
        if( Advanced_Current_Page > PORTDATA_PAGE_NUM  )
        {
            Advanced_Current_Page = Advanced_PAGE1_NUM;
        }
        ui->SetPageNum_lb->setText( QString("%1/%2").arg(Advanced_Current_Page-4).arg(AdvancedTotal_PAGE) );
        ui->PageInfo_lb->setText(Mode_title_Str.at(Advanced_Current_Page));
        ui->setpage_stackedWidget->setCurrentIndex( Advanced_Current_Page );
    }
}

//上一页
void MyWidget::on_SetPrevious_bt_clicked()
{
    if( CurrentCheckMode != 5 )
    {
        System_Current_Page--;
        if( System_Current_Page < DCAC_PAGE_NUM  )
        {
            System_Current_Page = MixedMode_PAGE_NUM;
        }

        if( (System_Current_Page == Lithium_PAGE_NUM) || (System_Current_Page == Lead_PAGE_NUM) )
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(Lithium_PAGE_NUM+1).arg(SystemTotal_PAGE) );
        }
        else if( System_Current_Page > Lead_PAGE_NUM )
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page).arg(SystemTotal_PAGE) );
        }
        else
        {
            ui->SetPageNum_lb->setText( QString("%1/%2").arg(System_Current_Page+1).arg(SystemTotal_PAGE) );
        }
        if( System_Current_Page == MixedMode_PAGE_NUM )
        {

        }
        ui->PageInfo_lb->setText(Mode_title_Str.at(System_Current_Page));
        ui->setpage_stackedWidget->setCurrentIndex( System_Current_Page );
    }
    else if( CurrentCheckMode == 5 )
    {
        Advanced_Current_Page--;
        if( Advanced_Current_Page < Advanced_PAGE1_NUM  )
        {
            Advanced_Current_Page = PORTDATA_PAGE_NUM;
        }
        ui->SetPageNum_lb->setText( QString("%1/%2").arg(Advanced_Current_Page-4).arg(AdvancedTotal_PAGE) );
        ui->PageInfo_lb->setText(Mode_title_Str.at(Advanced_Current_Page));
        ui->setpage_stackedWidget->setCurrentIndex( Advanced_Current_Page );
    }
}
//模式介绍 上一页
void MyWidget::on_IntroPrevious_bt_clicked()
{
    ModeIntr_Current_Page--;

    if( CurrentCheckModeExplain == Mode_OPTIMAL_MODE )
    {
        //超过最小页码，返回最优模式页
        //最优模式有两页　3 4
        if( ModeIntr_Current_Page < 3 )
        {
            ui->IntrPageNum_lb->setText(tr("2/2"));
            ModeIntr_Current_Page = 4;
        }
        else if( ModeIntr_Current_Page == 3 )
        {
            ui->IntrPageNum_lb->setText(tr("1/2"));
        }
        //最优模式介绍
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
}
//模式介绍 下一页
void MyWidget::on_IntroNext_bt_clicked()
{
    ModeIntr_Current_Page++;
    if( CurrentCheckModeExplain == Mode_OPTIMAL_MODE_EXP )
    {
        if( ModeIntr_Current_Page > 4 )
        {
            ModeIntr_Current_Page = 3;
            ui->IntrPageNum_lb->setText( "1/2" );
        }
        else if( ModeIntr_Current_Page == 4 )
        {
            ui->IntrPageNum_lb->setText( "2/2" );
        }
        ui->Introduction_stackedWidget->setCurrentIndex( ModeIntr_Current_Page );
    }
}

/**********故障信息表搜索功能************/
void MyWidget::on_search_btn_clicked()
{
    if(FaultTable->isHidden())
    {
        FaultTable->show();
    }
    else
    {
        FaultTable->hide();
    }
    /*QString search = ui->search_le->text();
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
    }*/
}

/*************时间显示点击***********/
void MyWidget::on_TimeSeting_btn_clicked()
{
    QMessageBox::question(this ,tr("Time"), tr("Click here to modify the time displayed on the HMI."), tr("OK"));
}
//点击登录
void MyWidget::on_ToLogin_bt_clicked()
{
    if( ui->combox_Account->currentIndex() == Login_User )
    {
        ui->UI_stackedWidget->setCurrentWidget( ui->UI_page );
        ui->stackedWidget->setCurrentWidget( ui->Host_page );
        ui->RTState_stackedWidget->setCurrentWidget(ui->RTStateData_page);
        ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
        ui->System_btn->setText(tr("System"));
        Account_Type = Login_User;

    }
    else if( ui->combox_Account->currentIndex() == Login_Maintain )
    {
        ui->UI_stackedWidget->setCurrentWidget( ui->UI_page );
        ui->stackedWidget->setCurrentWidget( ui->Host_page );
        ui->RTState_stackedWidget->setCurrentWidget(ui->RTStateData_page);
        ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
        ui->System_btn->setText(tr("System"));
        Account_Type = Login_Maintain;
        Account_Change( Account_Type );
    }
    else if( ui->combox_Account->currentIndex() == Login_Root )
    {
        ui->UI_stackedWidget->setCurrentWidget( ui->UI_page );
        ui->stackedWidget->setCurrentWidget( ui->Host_page );
        ui->RTState_stackedWidget->setCurrentWidget(ui->RTStateData_page);
        ui->BAT_stackedWidget->setCurrentWidget(ui->BAT_Lithium_page);
        ui->System_btn->setText(tr("System"));
        Account_Type = Login_Root;
        Account_Change( Account_Type );
    }
}
//取消登录
void MyWidget::on_Cancel_bt_clicked()
{
    ui->UI_MenuBtn->click();
    Account_Change( Account_Type );
}
//进入高级设置
void MyWidget::on_Advanced_bt_clicked()
{
    //跳转高级设置页
    CurrentCheckMode = ADVANCED_SETTING;
    ui->Save_bt->setVisible(false);
    ui->SetPageNum_lb->setText( QString("%1/%2").arg(Advanced_Current_Page-4).arg(AdvancedTotal_PAGE) );
    ui->PageInfo_lb->setText(Mode_title_Str.at(Advanced_Current_Page));
    ui->Set_stackedWidget->setCurrentWidget( ui->Setting_page );
    ui->Mode_lb->setText( tr("Advanced Settings") );
    ui->setpage_stackedWidget->setCurrentIndex( Advanced_Current_Page );
}
//系统信息 下一页
void MyWidget::on_InfoNext_bt_clicked()
{
    if( ui->Info_stackedWidget->currentIndex() == 0 )
    {
        ui->Infor_lb->setText( tr("Battery Information") );
        ui->InfoPageNum_lb->setText( "2/2" );
        ui->Info_stackedWidget->setCurrentWidget( ui->Bat_Info_page );
    }
    else if( ui->Info_stackedWidget->currentIndex() == 1 )
    {
        ui->Infor_lb->setText( tr("MPS Information") );
        ui->InfoPageNum_lb->setText( "1/2" );
        ui->Info_stackedWidget->setCurrentWidget( ui->MPS_Info_page );
    }
}
//系统信息 上一页
void MyWidget::on_InfoPrevious_bt_clicked()
{
    if( ui->Info_stackedWidget->currentIndex() == 0 )
    {
        ui->Infor_lb->setText( tr("Battery Information") );
        ui->InfoPageNum_lb->setText( "2/2" );
        ui->Info_stackedWidget->setCurrentWidget( ui->Bat_Info_page );
    }
    else if( ui->Info_stackedWidget->currentIndex() == 1 )
    {
        ui->Infor_lb->setText( tr("MPS Information") );
        ui->InfoPageNum_lb->setText( "1/2" );
        ui->Info_stackedWidget->setCurrentWidget( ui->MPS_Info_page );
    }
}

//登录页面输入密码点击槽
void MyWidget::on_pushButton_16_clicked()
{
    QMessageBox::question(this , tr("Password"), \
                          tr("    When not logged in, it is not possible to access the system page or view and modify basic settings and advanced settings parameters.\n"
                             "    When logged in as a \"User\" account, it is possible to switch work modes and modify basic settings parameters related to the work mode. "
                             "Advanced settings parameters can be viewed but cannot be modified.\n"
                             "    When logged in as a \"Maintain\" or \"Admin\" account, it is possible to set both basic settings parameters and advanced settings parameters.\n"
                             "    The default user password is 123456. If there is a need to modify advanced settings parameters, please contact the maintenance personnel."), tr("OK"));
}

//工作模式介绍详细信息
void MyWidget::on_Details_bt_clicked()
{
    if(mode_expelain->isHidden())
    {
        mode_expelain->show();
    }
    else
    {
        mode_expelain->hide();
    }
}

//模式选择介绍信息
void MyWidget::on_Information_btn_clicked()
{
    QMessageBox::question(this, tr("Working mode introduction")\
                          ,tr("Click to enter the selected working mode, go to the working mode parameter settings page, "
                              "and click the \"Save\" button in the top-right corner to set the current working mode as the selected and saved working mode.\n"
                              "For example, if the current working mode is \"Battery Priority\", select \"Optimal Mode\", enter the parameter settings page for the optimal mode, "
                              "and click the \"Save\" button in the top-right corner to set the current working mode as \"Optimal Mode\"."), tr("OK"));
}

//端口选择
void MyWidget::on_PortNum_bt_clicked()
{
    QMessageBox::question(this, tr("Port"), tr("Select the port to be monitored. The optional port types are: None, RS485/2, RS485/3, RS485/4, RS485/5, RS485/6, CAN 1, CAN 2, Eth"), tr("OK"));
}

//报文抓取
void MyWidget::on_Bengin_bt_clicked()
{
    QMessageBox::question(this, tr("Begin"), tr("Start/Stop capturing messages."), tr("OK"));
}
//显示 方式
void MyWidget::on_comboBox_currentIndexChanged(int index)
{
    switch (index) {
    case 0:
        {
            ui->PortMessage_TextEdit->setPlainText(tr("2023-09-27  17:27:56.201  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00\n"
                                                      "2023-09-27  17:27:56.302  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03\n"
                                                      "2023-09-27  17:27:57.105  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03\n"
                                                      "2023-09-27  17:27:57.206  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00\n"
                                                      "2023-09-27  17:27:57.307  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03\n"
                                                      "2023-09-27  17:27:57.910  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00\n"
                                                      "2023-09-27  17:27:58.110  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03\n"
                                                      "2023-09-27  17:27:58.211  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00\n"
                                                      "2023-09-27  17:27:58.312  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03\n"
                                                      "2023-09-27  17:27:58.915  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00\n"
                                                      "2023-09-27  17:27:59.116  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03\n"
                                                      "2023-09-27  17:27:59.217  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00\n"
                                                      "2023-09-27  17:27:59.317  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03\n"
                                                      "2023-09-27  17:27:59.920  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00\n"
                                                      "2023-09-27  17:28:00.121  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03"));
        }
        break;
    case 1:
        {
        ui->PortMessage_TextEdit->setPlainText(tr("The message data will be recorded in the root directory of the USB drive in the 'PortDate.txt' file.\n"
                                                  "Please connect a UBS flash drive!"));
        }
        break;
    default:
        break;
    }
}

//静态IP
void MyWidget::on_radio_static_2_clicked()
{
    QMessageBox::question(this ,tr("STATIC"), tr("If this parameter is selected, static IP addresses are used"), tr("OK"));//如果选择此项，表示使用静态的IP地址
}
//动态IP
void MyWidget::on_radio_dhcp_2_clicked()
{
//    QMessageBox::question(this ,tr("DHCP"), tr("If this parameter is selected, the automatically assigned IP address is used"), tr("OK"));//如果选择此项，表示使用自动分配的IP地址 \n
}
//电池上电
void MyWidget::on_PowerOn_bt_clicked()
{
    QMessageBox::question(this , tr("Battery power-on"), \
                          tr("Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers)."), tr("OK"));
}
//电池下电
void MyWidget::on_PowerOff_bt_clicked()
{
    QMessageBox::question(this , tr("Battery power-off"), \
                          tr("Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers)."), tr("OK"));
}
