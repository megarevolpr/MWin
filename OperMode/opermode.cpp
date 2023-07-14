#include "opermode.h"
#include "ui_opermode.h"

OperMode::OperMode(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::OperMode)
{
    ui->setupUi(this);
    InitializeText();
}

OperMode::~OperMode()
{
    delete ui;
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
}
//电池优先
void OperMode::on_Batter_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Batterpage);
}
//削峰填谷
void OperMode::on_Peak_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Peakpage);
}
//初始化文本
void OperMode::InitializeText()
{
//    QFile file("D:/Desktop/WORD/MPS_code/MPSWin_V1.0/MWin/RunLogic/System-Chinese.txt");
//    file.open((QFile::ReadOnly | QFile::Text));
//    QTextStream in(&file);
//    ui->SystemEidt->insertPlainText(read());

    ui->SystemEidt->setPlainText(QString(tr("\
System for self-use mode:\nPV first provides energy to the user's load, and if there is more energy left, it will charge the battery.\n\n\
System for self-use Running logic:\n\
1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.\n\
① PPV≥PLOAD+PBAT \n\
PV provides energy to user`s load as first priority, if there is more energy left, it will charge up the batteries. After the batteries are fully charged, if PPV＞PLOAD, the MPS will run at power limited operation.\n\n\
② PPV＜PLOAD＜PPV+PBAT\n\
PV and batteries provide energy to the load together, when the battery SOC < 20%(set point resettable), the battery will stop discharging. The load will be supplied from PV and grid.\n\n\
③ When PV and batteries are unavailable, the grid will provide energy to the load.\n\n\
1.2 When the grid has faults or cut off from electricity, ATS will switch from grid side to diesel power generator side automatically. The MPS is under off-grid mode during the progress of switching. PV and batteries will provide energy to the load under this circumstance. When MPS detects that ATS has switched to the diesel power generator side already, and MPS detects battery SOC <20%, then MPS will send Dry Contact signal to start the diesel generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode.\n\n\
① PPV≥PLOAD+PBAT\n\
PV will provide energy to user`s loads as first priority, if there is more energy from PV, the energy will be used to charge up batteries. After the batteries are fully charged, if PPV > PLOAD, the MPS will run at power limited operation.\n\n\
② PPV＜PLOAD＜PPV+PBAT\n\
PV and batteries provide energy to the load together, when the batteries SOC < 20%(set point resettable), MPS will send the starting signal to DG controller so that the diesel generator is started. The load will be supplied from PV and DG.\n\n\
③ PPV＜PLOAD＜PPV+PBAT\n\
When the battery SOC > 80% (this set point resettable), MPS will send Dry Contact signals to shut down the diesel generator, PV and batteries provide energy to user`s load all together.\n\n\
1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.\n\n\
After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.")));

/*自发自用模式:\n光伏首先为用户的负载提供能量，如果剩下更多的能量，它将为电池充电。\n\n\
自发自用模式运行逻辑：
1.1电网运行时，系统处于并网运行模式。ATS的电网侧关闭。
① PPV≥PLOAD+PBAT \n\
光伏首先为用户的负载提供能量，如果剩下更多的能量，它将为电池充电。电池充满电后，如果PPV＞PLOAD，MPS将以功率限制运行。
② PPV＜PLOAD＜PPV+PBAT\n\
PV和电池一起向负载提供能量，当电池SOC<20%（可重置设定值）时，电池将停止放电。负载将由光伏和电网提供。
③ 当光伏和电池不可用时，电网将为负载提供能量。\n\
1.2当电网出现故障或停电时，ATS将自动从电网侧切换到柴油发电机侧。在切换过程中，MPS处于离网模式。在这种情况下，光伏和电池将为负载提供能量。\n\
当MPS检测到ATS已经切换到柴油发电机侧，并且MPS检测到电池SOC<20%时，MPS将发送干触点信号以启动柴油发电机。\n\
柴油发电机成功启动后，如果实时检测与电网电压幅值、频率和相位一致，MPS将处于并网模式。\n\n\
① PPV≥PLOAD+PBAT\n\
光伏将首先为用户的负载提供能量，如果光伏有更多的能量，这些能量将用于为电池充电。电池充满电后，如果PPV>PLOAD，MPS将以功率限制运行。\n\n\
② PPV＜PLOAD＜PPV+PBAT\n\
PV和电池一起向负载提供能量，当电池SOC<20%（设定值可重置）时，MPS将向DG控制器发送启动信号，从而启动柴油发电机。负载将由PV和DG提供。\n\n\
③ PPV＜PLOAD＜PPV+PBAT\n\
当电池SOC>80%（该设定值可重置）时，MPS将发送干触点信号以关闭柴油发电机，PV和电池一起为用户的负载提供能量。\n\n\
1.3电网恢复后，ATS将自动从柴油发电机侧切换到电网侧。在切换过程中，MPS进入离网运行模式，当MPS检测到ATS切换到电网侧时，MPS将再次恢复电网运行模式。\n\n\
MPS切换到并网模式后，控制策略遵循正常电网环境的设置。*/

    ui->BatterEdit->setPlainText(QString(tr("\
Battery priority mode:\nPV prioritizes charging the battery, and if more energy is available, it will be used to power the user's load.\n\n\
Battery priority mode running logic:\n\
1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.\n\
① PPV≥PLOAD+PBAT(charging)\n\
PV charges battery up as first priority, if there is more energy, it will be used to provide energy to user`s load. After the battery is fully charged, if PPV > PLOAD, then MPS will work under power limited operation.\n\n\
② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)\n\
PV will charge the batteries up as first priority, PV and the grid will provide energy to user`s load all together. That is PLOAD =PPV －PBAT(charging)＋PGRID.\n\n\
③ PPV＜PBAT(charging) \n\
PV and the grid charge the batteries up all together, the load's energy will be provided totally by the grid. That is PBAT（charging）= Pset（charging）＋ PPV ，PGRID =Pset＋ PLOAD.\n\n\
④ When PV is unavailable, the grid will provide energy to the load, and charge the batteries simultaneously. That is PGRID = PLOAD ＋ PBAT（charging）.\n\n\
⑤ PPV < PLOAD and the battery SOC=100%\n\n\
PV and the grid provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, the remaining energy required by the load is provided by the grid, that is PLOAD = PPV ＋PGRID.\n\n\
1.2 When the grid has faults or cut off from electricity, ATS switches from grid side to diesel power generator side automatically, the MPS is under off-grid operation mode while switching, PV and batteries will provide energy to the load. When MPS detects ATS has switched to diesel generators side, MPS will send Dry Contact signals to start the diesel power generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode. \n\n\
① PPV≥PLOAD+PBAT(charging)\n\
PV will charge the batteries up as first priority, if there is more energy left, it will be provided to the load. When the battery is fully charged, if PPV > PLOAD, then MPS will work under power limited operation.\n\n\
② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)\n\
PV will charge the batteries up as first priority, PV and diesel generator will provide energy to user`s load all together. That is PLOAD =PPV －PBAT（charging）＋PDG.\n\n\
③ PPV＜PBAT(charging) \n\
PV and diesel generator combine to charge the batteries up, the load’s energy will be provided totally by the diesel generator. PBAT（charging）=PDG － PLOAD ＋PPV. \n\n\
④ When PV is unavailable, diesel generator will provide energy to the load and charge the batteries simultaneously. That is PDG= PLOAD ＋ PBAT（charging）.\n\n\
⑤ PPV < PLOAD and the battery SOC=100%\n\
PV and diesel generator provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, diesel generator will provide the remaining energy, that is PLOAD = PPV ＋PDG.\n\n\
1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.\n\n\
After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.")));

/* 电池优先模式:\n光伏优先给电池充电，如果有更多的能量，它将被用于为用户的负载提供能量。\n\n\
电池优先模式运行逻辑：\n\
1.1电网运行时，系统处于并网运行模式。ATS的电网侧关闭。\n\
①PPV≥PLOAD+PBAT（充电）\n\
光伏电池充电是第一要务，如果有更多的能量，它将被用于为用户的负载提供能量。电池充满电后，如果PPV>PLOAD，则MPS将在功率限制操作下工作。\n\n\
② PPV＞PBAT（充电）和PPV＜PLOAD+PBAT（充电）\n\
光伏将首先为电池充电，光伏和电网将一起为用户的负载提供能量。即PLOAD=PPV－PBAT（充电）＋PGRID\n\n\
③ PPV＜PBAT（充电）\n\
光伏和电网一起为电池充电，负载的能量将完全由电网提供。即PBAT（充电）=Pset（充电）＋PPV，PGRID=Pset＋PLOAD。\n\n\
④ 当光伏不可用时，电网将向负载提供能量，同时为电池充电。即PGRID=PLOAD+PBAT（充电）。\n\n\
⑤ PPV<PLOAD且电池SOC=100%\n\
PV和电网一起向负载提供能量。MPS收集实时负载功率和光伏发电功率。通过计算光伏发电功率和负载功率，负载所需的剩余能量由电网提供，即PLOAD=PPV+PGRID。\n\n\
1.2当电网出现故障或断电时，ATS自动从电网侧切换到柴油发电机侧，MPS处于离网运行模式，同时切换，PV和电池将为负载提供能量。\n\
当MPS检测到ATS已切换到柴油发电机侧时，MPS将发送干触点信号以启动柴油发电机。柴油发电机成功启动后，如果实时检测与电网电压幅值、频率和相位一致，MPS将处于并网模式。\n\n\
① PPV≥PLOAD+PBAT（充电）\n\
光伏将作为第一要务为电池充电，如果剩余的能量更多，将提供给负载。当电池充满电时，如果PPV>PLOAD，则MPS将在功率限制操作下工作。\n\n\
② PPV＞PBAT（充电）和PPV＜PLOAD+PBAT（充电）\n\
光伏将首先为电池充电，光伏和柴油发电机将一起为用户的负载提供能量。即PLOAD=PPV－PBAT（充电）＋PDG。\n\n\
③ PPV＜PBAT（充电）\n\
光伏和柴油发电机结合为电池充电，负载的能量将全部由柴油发电机提供。PBAT（充电）=PDG－PLOAD＋PPV。\n\n\
④ 当光伏不可用时，柴油发电机将向负载提供能量并同时为电池充电。即PDG=PLOAD+PBAT（充电）。\n\n\
⑤ PPV<PLOAD且电池SOC=100%\n\
光伏和柴油发电机一起为负载提供能量。MPS收集实时负载功率和光伏发电功率。通过计算光伏发电功率和负载功率，柴油发电机将提供剩余能量，即PLOAD=PPV+PDG。\n\n\
1.3电网恢复后，ATS将自动从柴油发电机侧切换到电网侧。在切换过程中，MPS进入离网运行模式，当MPS检测到ATS切换到电网侧时，MPS将再次恢复电网运行模式。\n\
MPS切换到并网模式后，控制策略遵循正常电网环境的设置。*/

    ui->PeakEdit->setPlainText(QString(tr("\
Peak shaving mode:\nThe peak-valley filling mode is used for peak-valley arbitrage.PCS can operate according tothe local peak-valley electricity price period, andcan go to the automatic operation page to setthe charging and discharging mode chargingand discharging power and other informationduring the operation period.")));
/*削峰填谷模式：\n削峰填谷模式用于峰谷套利，PCS可根据当地的峰谷电价时段运行，可前往“自动运行”页面设置运行时间段、充放电模式、充放电功率等信息。*/
    ui->SystemEidt->setReadOnly(true);//设置为不可编辑属性
    ui->BatterEdit->setReadOnly(true);
    ui->PeakEdit->setReadOnly(true);


/*这是工作模式，有三项可选：自发自用(System for self-use)，电池优先(Battery priority)，削峰填谷(Peak shaving)\n
    选择自发自用模式时，优先给负载供电\n
    选择电池优先模式时，优先给电池充电\n
    削峰填谷模式时，用电高峰时优先使用电池给负载供电，用电低谷时优先给电池充电\n*/

}



