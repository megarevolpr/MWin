#include "opermode.h"
#include "ui_opermode.h"

OperMode::OperMode(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::OperMode)
{
    ui->setupUi(this);
//    InitializeText();
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
void OperMode::on_Optimal_btn_clicked()
{
    ui->ExplainWidget->setCurrentWidget(ui->Explainpage);
    ui->ExplanationTextWidget->setCurrentWidget(ui->Optimalpage);
}
//初始化文本
//void OperMode::InitializeText()
//{
////    QFile file("D:/Desktop/WORD/MPS_code/MPSWin_V1.0/MWin/RunLogic/System-Chinese.txt");
////    file.open((QFile::ReadOnly | QFile::Text));
////    QTextStream in(&file);
////    ui->SystemEidt->insertPlainText(read());

//    ui->SystemEidt->setPlainText(QString(tr("\
//System for self-use mode:\nPV first provides energy to the user's load, and if there is more energy left, it will charge the battery.\n\n\
//System for self-use Running logic:\n\
//1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.\n\
//① PPV≥PLOAD+PBAT \n\
//PV provides energy to user`s load as first priority, if there is more energy left, it will charge up the batteries. After the batteries are fully charged, if PPV＞PLOAD, the MPS will run at power limited operation.\n\n\
//② PPV＜PLOAD＜PPV+PBAT\n\
//PV and batteries provide energy to the load together, when the battery SOC < 20%(set point resettable), the battery will stop discharging. The load will be supplied from PV and grid.\n\n\
//③ When PV and batteries are unavailable, the grid will provide energy to the load.\n\n\
//1.2 When the grid has faults or cut off from electricity, ATS will switch from grid side to diesel power generator side automatically. The MPS is under off-grid mode during the progress of switching. PV and batteries will provide energy to the load under this circumstance. When MPS detects that ATS has switched to the diesel power generator side already, and MPS detects battery SOC <20%, then MPS will send Dry Contact signal to start the diesel generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode.\n\n\
//① PPV≥PLOAD+PBAT\n\
//PV will provide energy to user`s loads as first priority, if there is more energy from PV, the energy will be used to charge up batteries. After the batteries are fully charged, if PPV > PLOAD, the MPS will run at power limited operation.\n\n\
//② PPV＜PLOAD＜PPV+PBAT\n\
//PV and batteries provide energy to the load together, when the batteries SOC < 20%(set point resettable), MPS will send the starting signal to DG controller so that the diesel generator is started. The load will be supplied from PV and DG.\n\n\
//③ PPV＜PLOAD＜PPV+PBAT\n\
//When the battery SOC > 80% (this set point resettable), MPS will send Dry Contact signals to shut down the diesel generator, PV and batteries provide energy to user`s load all together.\n\n\
//1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.\n\n\
//After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.")));


//    ui->BatterEdit->setPlainText(QString(tr("\
//Battery priority mode:\nPV prioritizes charging the battery, and if more energy is available, it will be used to power the user's load.\n\n\
//Battery priority mode running logic:\n\
//1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.\n\
//① PPV≥PLOAD+PBAT(charging)\n\
//PV charges battery up as first priority, if there is more energy, it will be used to provide energy to user`s load. After the battery is fully charged, if PPV > PLOAD, then MPS will work under power limited operation.\n\n\
//② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)\n\
//PV will charge the batteries up as first priority, PV and the grid will provide energy to user`s load all together. That is PLOAD =PPV －PBAT(charging)＋PGRID.\n\n\
//③ PPV＜PBAT(charging) \n\
//PV and the grid charge the batteries up all together, the load's energy will be provided totally by the grid. That is PBAT（charging）= Pset（charging）＋ PPV ，PGRID =Pset＋ PLOAD.\n\n\
//④ When PV is unavailable, the grid will provide energy to the load, and charge the batteries simultaneously. That is PGRID = PLOAD ＋ PBAT（charging）.\n\n\
//⑤ PPV < PLOAD and the battery SOC=100%\n\n\
//PV and the grid provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, the remaining energy required by the load is provided by the grid, that is PLOAD = PPV ＋PGRID.\n\n\
//1.2 When the grid has faults or cut off from electricity, ATS switches from grid side to diesel power generator side automatically, the MPS is under off-grid operation mode while switching, PV and batteries will provide energy to the load. When MPS detects ATS has switched to diesel generators side, MPS will send Dry Contact signals to start the diesel power generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode. \n\n\
//① PPV≥PLOAD+PBAT(charging)\n\
//PV will charge the batteries up as first priority, if there is more energy left, it will be provided to the load. When the battery is fully charged, if PPV > PLOAD, then MPS will work under power limited operation.\n\n\
//② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)\n\
//PV will charge the batteries up as first priority, PV and diesel generator will provide energy to user`s load all together. That is PLOAD =PPV －PBAT（charging）＋PDG.\n\n\
//③ PPV＜PBAT(charging) \n\
//PV and diesel generator combine to charge the batteries up, the load’s energy will be provided totally by the diesel generator. PBAT（charging）=PDG － PLOAD ＋PPV. \n\n\
//④ When PV is unavailable, diesel generator will provide energy to the load and charge the batteries simultaneously. That is PDG= PLOAD ＋ PBAT（charging）.\n\n\
//⑤ PPV < PLOAD and the battery SOC=100%\n\
//PV and diesel generator provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, diesel generator will provide the remaining energy, that is PLOAD = PPV ＋PDG.\n\n\
//1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.\n\n\
//After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.")));



//    ui->PeakEdit->setPlainText(QString(tr("\
//Peak shaving mode:\nThe peak-valley filling mode is used for peak-valley arbitrage.PCS can operate according tothe local peak-valley electricity price period, andcan go to the automatic operation page to setthe charging and discharging mode chargingand discharging power and other informationduring the operation period.")));
///*削峰填谷模式：\n削峰填谷模式用于峰谷套利，PCS可根据当地的峰谷电价时段运行，可前往“自动运行”页面设置运行时间段、充放电模式、充放电功率等信息。*/



//    ui->SystemEidt->setReadOnly(true);//设置为不可编辑属性
//    ui->BatterEdit->setReadOnly(true);
//    ui->PeakEdit->setReadOnly(true);




///*这是工作模式，有三项可选：自发自用(System for self-use)，电池优先(Battery priority)，削峰填谷(Peak shaving)\n
//    选择自发自用模式时，优先给负载供电\n
//    选择电池优先模式时，优先给电池充电\n
//    削峰填谷模式时，用电高峰时优先使用电池给负载供电，用电低谷时优先给电池充电\n*/

//}
//调整控件大小
void OperMode::resizeEvent(QResizeEvent *event)
{
    int x = this->frameGeometry().width(); //获取ui形成窗口宽度
    int y = this->frameGeometry().height();//获取窗口高度

//    ui->ExplainWidget->setGeometry(0,0,x,y-20);
//    ui->Explainpage->setGeometry(0,0,x,y-20);
//    ui->ExplanationTextWidget->setGeometry(0,0,x-20,y-20);
//    ui->Systempage->setGeometry(0,0,x-130,y-20);
//    ui->Batterpage->setGeometry(0,0,x-130,y-20);
//    ui->Optimalpage->setGeometry(0,0,x-130,y-20);
//    ui->SystemEidt->setGeometry(0,0,x-130,y-20);
//    ui->BatterEdit->setGeometry(0,0,x-130,y-20);
//    ui->PeakEdit->setGeometry(0,0,x-130,y-20);
}





