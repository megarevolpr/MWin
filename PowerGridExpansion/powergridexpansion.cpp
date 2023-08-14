#include "powergridexpansion.h"
#include "ui_powergridexpansion.h"

PowerGridExpansion::PowerGridExpansion(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::PowerGridExpansion)
{
    ui->setupUi(this);
}

PowerGridExpansion::~PowerGridExpansion()
{
    delete ui;
}
