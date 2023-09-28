#-------------------------------------------------
#
# Project created by QtCreator 2019-05-20T08:42:02
#
#-------------------------------------------------

QT       += core gui


greaterThan(QT_MAJOR_VERSION, 4): QT += widgets
DEFINES += QT_DEPRECATED_WARNINGS
#QT      += network

TARGET = MPS_V2.0.0
TEMPLATE = app



include         ($$PWD/Specification/Specification.pri)
include         ($$PWD/OperMode/OperMode.pri)
include         ($$PWD/UpgradeTools/UpgradeTools.pri)
include         ($$PWD/FaultTableInterface/FaultTableInterface.pri)
include         ($$PWD/SpecificationData/SpecificationData.pri)

INCLUDEPATH     +=$$PWD/Specification/
INCLUDEPATH     +=$$PWD/OperMode/
INCLUDEPATH     +=$$PWD/UpgradeTools/
INCLUDEPATH     +=$$PWD/FaultTableInterface/
INCLUDEPATH     +=$$PWD/SpecificationData/

CONFIG += c++11

SOURCES +=\
        mywidget.cpp \
        MainThread.cpp

HEADERS  += mywidget.h

FORMS    += mywidget.ui

TRANSLATIONS += \
    $$PWD/Language/CN.ts\
    $$PWD/Language/EN.ts

RESOURCES += image.qrc \
            language.qrc \
    faultdescription.qrc

DISTFILES +=







