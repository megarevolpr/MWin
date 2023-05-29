#-------------------------------------------------
#
# Project created by QtCreator 2019-05-20T08:42:02
#
#-------------------------------------------------

QT       += core gui


greaterThan(QT_MAJOR_VERSION, 4): QT += widgets
DEFINES += QT_DEPRECATED_WARNINGS
#QT      += network

TARGET = MPSWin/config
TEMPLATE = app



include         ($$PWD/UI_Menu/UI_Menu.pri)
#include         ($$PWD/Specification/Specification.pri)


#INCLUDEPATH     +=$$PWD/Specification/
INCLUDEPATH     +=$$PWD/UI_Menu/


CONFIG += c++11

SOURCES +=\
        mywidget.cpp \
    MainThread.cpp \
    Specification/Specification.cpp



HEADERS  += mywidget.h \
    Specification/database.h \
    Specification/Specification.h \
    Specification/Specification.h.autosave

FORMS    += mywidget.ui





RESOURCES += image.qrc

DISTFILES += \
    Specification/Specification.pri






