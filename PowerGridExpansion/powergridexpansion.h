#ifndef POWERGRIDEXPANSION_H
#define POWERGRIDEXPANSION_H

#include <QMainWindow>

namespace Ui {
class PowerGridExpansion;
}

class PowerGridExpansion : public QMainWindow
{
    Q_OBJECT

public:
    explicit PowerGridExpansion(QWidget *parent = nullptr);
    ~PowerGridExpansion();

private:
    Ui::PowerGridExpansion *ui;
};

#endif // POWERGRIDEXPANSION_H
