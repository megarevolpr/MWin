#-------------------------------------------------
#
# Project created by QtCreator 2019-05-20T08:42:02
#
#-------------------------------------------------

QT       += core gui


greaterThan(QT_MAJOR_VERSION, 4): QT += widgets
DEFINES += QT_DEPRECATED_WARNINGS
#QT      += network

TARGET = MPSWin
TEMPLATE = app



include         ($$PWD/UI_Menu/UI_Menu.pri)
include         ($$PWD/Specification/Specification.pri)

INCLUDEPATH     +=$$PWD/Specification/
INCLUDEPATH     +=$$PWD/UI_Menu/


CONFIG += c++11

SOURCES +=\
        mywidget.cpp \
    MainThread.cpp \

HEADERS  += mywidget.h \

FORMS    += mywidget.ui

TRANSLATIONS += \
    $$PWD/Language/CN.ts\
    $$PWD/Language/EN.ts\

RESOURCES += image.qrc \
    language.qrc

DISTFILES += \
    Language/CN.ts \
    Language/EN.ts







