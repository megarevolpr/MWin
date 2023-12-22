<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="en">
<context>
    <name>FaultTableInterface</name>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="14"/>
        <source>Fault description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="31"/>
        <source>Please enter search keywords</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="44"/>
        <source>Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="62"/>
        <source>DCAC Fault Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="76"/>
        <source>DCDC Module Fault Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="86"/>
        <source>Battery Protection Logic Explanation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="103"/>
        <source>Battery Cut-off Voltage Protection Logic Explanation for Grid-on and grid-off modes:

Grid-on mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter output power will drop to 0.
  The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage or when the mode is changed to charging.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode, the charging power will drop to 0. If the DCAC is in discharge mode, it will not be affected.
  The &quot;Charging Not Allowed&quot; alarm will be cleared when the battery voltage is lower than the upper limit of the charging voltage minus the charging hysteresis voltage or when it is in discharge mode.

Grid-off mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter will shut down. The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage. If there is no shutdown command, the system will resume operation.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode or in grid-off discharge mode, it will not be affected.
  The &quot;Charging Not Allowed&quot; alarm will be cleared when the battery voltage is lower than the upper limit of the charging voltage minus the charging hysteresis voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm leve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Trigger condition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Response action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Whether to reset
automatically and reset time</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyWidget</name>
    <message>
        <location filename="../mywidget.ui" line="7471"/>
        <location filename="../mywidget.cpp" line="3643"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7511"/>
        <source>BMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8875"/>
        <location filename="../mywidget.cpp" line="3983"/>
        <source>Power control type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7591"/>
        <source>EMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9010"/>
        <location filename="../mywidget.cpp" line="4115"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4709"/>
        <location filename="../mywidget.ui" line="4727"/>
        <location filename="../mywidget.ui" line="4745"/>
        <location filename="../mywidget.ui" line="4763"/>
        <source>kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9121"/>
        <source>System upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9047"/>
        <location filename="../mywidget.cpp" line="4120"/>
        <source>Sounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4181"/>
        <location filename="../mywidget.ui" line="4199"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9179"/>
        <location filename="../mywidget.cpp" line="4080"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4145"/>
        <source>V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9660"/>
        <location filename="../mywidget.cpp" line="4261"/>
        <source>Machine type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9697"/>
        <location filename="../mywidget.cpp" line="4266"/>
        <source>Machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9306"/>
        <location filename="../mywidget.cpp" line="4153"/>
        <source>Restore factory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9808"/>
        <source>Output Fre. grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9084"/>
        <location filename="../mywidget.cpp" line="4125"/>
        <source>Clear Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9771"/>
        <source>Output vol. level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9837"/>
        <location filename="../mywidget.cpp" line="4231"/>
        <source>HVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9874"/>
        <source>LVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9898"/>
        <location filename="../mywidget.cpp" line="4339"/>
        <source>Insulation detection enable DCDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9911"/>
        <location filename="../mywidget.cpp" line="4240"/>
        <source>AFD enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8883"/>
        <location filename="../mywidget.cpp" line="4042"/>
        <source>Serial Communication Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9158"/>
        <source>Backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9187"/>
        <source>Restore backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9948"/>
        <location filename="../mywidget.cpp" line="4251"/>
        <source>PrimaryFreq enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9882"/>
        <source>PsheddingFreq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9919"/>
        <location filename="../mywidget.cpp" line="4297"/>
        <source>Inertia enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="35"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9845"/>
        <location filename="../mywidget.cpp" line="4286"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9956"/>
        <location filename="../mywidget.cpp" line="4302"/>
        <source>QP curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10059"/>
        <source>Enable/Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10064"/>
        <source>NC/NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10069"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10095"/>
        <source>Access Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10160"/>
        <source>Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10327"/>
        <location filename="../mywidget.ui" line="10686"/>
        <location filename="../mywidget.cpp" line="4425"/>
        <location filename="../mywidget.cpp" line="4582"/>
        <source>Debug variable 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10527"/>
        <source>1.5V Voltage revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10599"/>
        <location filename="../mywidget.ui" line="10784"/>
        <source>Inv on off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10359"/>
        <location filename="../mywidget.ui" line="10710"/>
        <location filename="../mywidget.cpp" line="4429"/>
        <location filename="../mywidget.cpp" line="4586"/>
        <source>Debug variable 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10559"/>
        <source> Bus Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10583"/>
        <location filename="../mywidget.cpp" line="4498"/>
        <source>Logic state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10391"/>
        <location filename="../mywidget.ui" line="10734"/>
        <location filename="../mywidget.cpp" line="4433"/>
        <location filename="../mywidget.cpp" line="4590"/>
        <location filename="../mywidget.cpp" line="4594"/>
        <source>Debug variable 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10335"/>
        <source>Grid A/AB Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10607"/>
        <source>Inv flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10694"/>
        <source>Debug variable 1 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10367"/>
        <source>Grid B/BC Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10615"/>
        <location filename="../mywidget.cpp" line="4543"/>
        <source>Grid flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10718"/>
        <source>Debug variable 2 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10399"/>
        <source>Grid C/CA Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10591"/>
        <location filename="../mywidget.cpp" line="4539"/>
        <source>Grid protect flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10742"/>
        <source>Debug variable 3 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10431"/>
        <source>Output A Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10503"/>
        <location filename="../mywidget.ui" line="10824"/>
        <location filename="../mywidget.cpp" line="4527"/>
        <location filename="../mywidget.cpp" line="4606"/>
        <source>PV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10423"/>
        <location filename="../mywidget.ui" line="10702"/>
        <source>Debug memery var. 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10463"/>
        <source>Output B Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10535"/>
        <location filename="../mywidget.ui" line="10800"/>
        <location filename="../mywidget.cpp" line="4531"/>
        <location filename="../mywidget.cpp" line="4602"/>
        <source>DC bus flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10455"/>
        <location filename="../mywidget.ui" line="10726"/>
        <source>Debug memery var. 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10495"/>
        <source>Output C Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10567"/>
        <location filename="../mywidget.ui" line="10776"/>
        <location filename="../mywidget.cpp" line="4535"/>
        <location filename="../mywidget.cpp" line="4598"/>
        <source>INT main flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10487"/>
        <location filename="../mywidget.ui" line="10750"/>
        <source>Debug memery var. 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10407"/>
        <source>INV A Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10543"/>
        <location filename="../mywidget.ui" line="10832"/>
        <source>Parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10343"/>
        <source>Input Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10439"/>
        <source>INV B Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10511"/>
        <location filename="../mywidget.cpp" line="4568"/>
        <location filename="../mywidget.cpp" line="4648"/>
        <source>Monitor Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10471"/>
        <source>INV C Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10479"/>
        <source>BatInfor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10351"/>
        <source>INV A inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10447"/>
        <location filename="../mywidget.ui" line="10840"/>
        <source>Bat state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10383"/>
        <source>INV B inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10415"/>
        <source>INV C inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10758"/>
        <source>Current ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10792"/>
        <source>Monitor order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10808"/>
        <source>DCONV logic </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10816"/>
        <source>Bat infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="241"/>
        <source>100kW - TS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="782"/>
        <location filename="../mywidget.ui" line="997"/>
        <location filename="../mywidget.ui" line="1041"/>
        <location filename="../mywidget.ui" line="1113"/>
        <location filename="../mywidget.ui" line="1231"/>
        <location filename="../mywidget.ui" line="1463"/>
        <location filename="../mywidget.ui" line="1547"/>
        <location filename="../mywidget.ui" line="1575"/>
        <source>0V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="811"/>
        <location filename="../mywidget.ui" line="1260"/>
        <location filename="../mywidget.ui" line="1491"/>
        <location filename="../mywidget.ui" line="1519"/>
        <location filename="../mywidget.ui" line="1603"/>
        <source>0A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="827"/>
        <location filename="../mywidget.ui" line="1679"/>
        <source>0kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1025"/>
        <location filename="../mywidget.ui" line="1069"/>
        <location filename="../mywidget.ui" line="1097"/>
        <source>0A </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3577"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8060"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6492"/>
        <source>Model Introduction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6589"/>
        <location filename="../mywidget.ui" line="13304"/>
        <source>Self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6654"/>
        <source>Battery
Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6793"/>
        <source>Mixed
mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6859"/>
        <location filename="../mywidget.ui" line="13468"/>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6927"/>
        <source>Advanced
Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7122"/>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>DC/AC Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7195"/>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Self-issuance and self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7248"/>
        <source>1/4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7308"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7365"/>
        <source>Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7455"/>
        <source>DG ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7487"/>
        <source>Constant power (AC)(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7495"/>
        <source>DG FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7527"/>
        <location filename="../mywidget.cpp" line="3580"/>
        <source>Grid expansion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7551"/>
        <source>BMS Protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7567"/>
        <source>Grad capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7607"/>
        <source>DG charging power limit(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7615"/>
        <source>Grid EDP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7639"/>
        <source>Grid FDP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7655"/>
        <source>Start charging SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7679"/>
        <source>Stop charging SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7778"/>
        <source>Constant Curent(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7794"/>
        <location filename="../mywidget.cpp" line="3739"/>
        <source>IV curve scanning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7818"/>
        <source>Constant Voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7834"/>
        <source>IV curve scanning low voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7874"/>
        <source>IV curve scanning high voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8247"/>
        <source>Off-Grid DOD Protection Release SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9023"/>
        <source>Constant voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10932"/>
        <source>Can 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10963"/>
        <source>Display mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10985"/>
        <source>Displayed on screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10990"/>
        <source>Write to USB drive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11042"/>
        <source>Bengin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11072"/>
        <location filename="../mywidget.cpp" line="5089"/>
        <source>2023-09-27  17:27:56.201  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00
2023-09-27  17:27:56.302  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03
2023-09-27  17:27:57.105  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03
2023-09-27  17:27:57.206  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00
2023-09-27  17:27:57.307  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03
2023-09-27  17:27:57.910  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00
2023-09-27  17:27:58.110  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03
2023-09-27  17:27:58.211  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00
2023-09-27  17:27:58.312  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03
2023-09-27  17:27:58.915  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00
2023-09-27  17:27:59.116  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03
2023-09-27  17:27:59.217  CAN 2: Tx  Len=8  ID=9f000100 00 00 00 00 00 00 00 00
2023-09-27  17:27:59.317  CAN 2: Rx  Len=8  ID=9f000301 0d 00 64 00 70 17 e8 03
2023-09-27  17:27:59.920  CAN 2: Rx  Len=8  ID=9f000304 40 1f a0 0f 00 00 00 00
2023-09-27  17:28:00.121  CAN 2: Rx  Len=8  ID=9f000300 40 1f a0 0f e8 03 e8 03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11892"/>
        <source>Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11961"/>
        <source>Battery Area Partitioning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12182"/>
        <source>Battery zoning:   
    Areas where ECP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FCP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.

    Areas where EDP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FDP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12885"/>
        <source>When the PV is unavailable and the power of the load is less than the power value of the AC setting,the energy on the AC side will be provided to the load and remaining energy will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12921"/>
        <source>When the PV is unavailable and the load power is greater than the power value set the AC side energizes the load while battery energizes the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12997"/>
        <source>Enable the time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13081"/>
        <source>Functions performed in the current time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14368"/>
        <source>Turn On/Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7535"/>
        <source>Grid ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9060"/>
        <source>Constant current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7575"/>
        <source>Grid FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8949"/>
        <source>Output reactive power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8098"/>
        <source>Power On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8116"/>
        <source>Power Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8173"/>
        <source>On-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8181"/>
        <source>Discharge Voltage lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8197"/>
        <source>Force charge start(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8210"/>
        <source>Off-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8218"/>
        <source>Discharge Voltage lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8234"/>
        <source>Force charge stop(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8271"/>
        <source>DCAC cell protection voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8284"/>
        <source>Charge Voltage upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8308"/>
        <source>DCAC cell protection voltage delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8321"/>
        <source>Charge Voltage upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8511"/>
        <location filename="../mywidget.cpp" line="3880"/>
        <source>Generator turn on voltage(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8557"/>
        <location filename="../mywidget.cpp" line="3885"/>
        <source>Generator turn off voltage(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8603"/>
        <source>DCAC Reference Voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8732"/>
        <source>Shutdown voltage point(Delete)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8912"/>
        <source>Output reactiver power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9689"/>
        <source>Grid frequency upper limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8920"/>
        <source>serial port 2(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9726"/>
        <source>Grid frequency lower limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8957"/>
        <source>serial port 3(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9763"/>
        <source>Vol protection upper limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8994"/>
        <source>serial port 4(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9800"/>
        <source>Vol protection lower limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9031"/>
        <source>serial port 5(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9097"/>
        <source>Output power limit(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9105"/>
        <source>Can port 1(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7631"/>
        <source>DG capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9142"/>
        <source>Can port 2(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9652"/>
        <source>Rate of change of power(kW/s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8899"/>
        <source>Battery capacity alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9269"/>
        <source>Protocol Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8936"/>
        <source>BMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8973"/>
        <source>EMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9734"/>
        <source>Transformer ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9293"/>
        <source>User Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9330"/>
        <source>Maintenance password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9676"/>
        <source>Number of modules</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9750"/>
        <source>Maximum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9787"/>
        <source>Minimum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7447"/>
        <source>Grid connected mode of converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6720"/>
        <source>Optimal
mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7858"/>
        <location filename="../mywidget.cpp" line="3733"/>
        <source>Outer Ring Centralized Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9824"/>
        <source>Grid recovery time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9861"/>
        <location filename="../mywidget.cpp" line="4335"/>
        <source>Insulation detection enable DCAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10014"/>
        <source>DI 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10019"/>
        <source>DI 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10024"/>
        <source>DI 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10029"/>
        <source>DI 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10034"/>
        <source>DI 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10039"/>
        <source>DI 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10044"/>
        <source>DO 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10049"/>
        <source>DO 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10054"/>
        <source>DO 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10074"/>
        <source>Function(default)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10111"/>
        <source>Flooding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10204"/>
        <location filename="../mywidget.ui" line="10248"/>
        <source>Reserve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10375"/>
        <source>Input Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11183"/>
        <location filename="../mywidget.cpp" line="5010"/>
        <location filename="../mywidget.cpp" line="5026"/>
        <source>Battery Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11233"/>
        <location filename="../mywidget.cpp" line="2250"/>
        <location filename="../mywidget.cpp" line="4879"/>
        <source>1/2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12080"/>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12315"/>
        <source>The PV prioritizes power to the load, and if the PV is powerful enough, the remaining energy is provided to charge the batteries, and if the PV still has energy left, it sends the excess energy to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12351"/>
        <source>The PV gives priority to powering the load, and if the PV does not have enough energy to power the load, the battery and the PV together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12387"/>
        <source>The PV gives priority to powering the load, and if the PV and batter ries do not have enough energy to power the load, then the grid, PV and batteries together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12487"/>
        <source>The PV prioritizes charging the batteries, and the excess energy is given to the load, and if there is still excess energy it is delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12523"/>
        <source>When the PV does not have enough energy to supply the battery and the load, the grid provides fertility to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12559"/>
        <source>When the PV has no energy, the grid provides energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12659"/>
        <source>When there is enough PV energy, the PV will power the load while charging the battery, and if there is any left, it will be delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12695"/>
        <source>When the PV is low on energy, the PV charges the battery while supplying power to the load, at which point the grid supplements the load with insufficient energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12731"/>
        <source>When the PV energy is insufficient, the PV will charge the battery;if the power of the load is less than the power value set on the AC side, the AC side will provide energy to the load and the remaining energy will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12849"/>
        <source>When the energy of the PV is insufficient and the power of the load is greater than the set AC-side power, the available power on the AC-side will be supplied to the load in full, and the PV will replenish the remaining insufficient energy; if the energy replenished by the PV is insufficient, the battery will replenish the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13195"/>
        <source>The &quot;Manual Mode&quot; has no operational logic and allows for the manual control of battery charging and discharging. This mode is applicable in the following scenarios:
1、Battery charge and discharge testing.
2、Energy Management System (EMS) scheduling of the MPS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13263"/>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Battery Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13345"/>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Battery Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13386"/>
        <source>Optimal Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13427"/>
        <source>Mixed Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13657"/>
        <source>M_01 Converter turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13816"/>
        <location filename="../mywidget.cpp" line="1980"/>
        <source>Not Logged in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13952"/>
        <source>Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14055"/>
        <source>Rt.Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14161"/>
        <source>Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14266"/>
        <source>System
(Login to view)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14607"/>
        <source>Account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14638"/>
        <source>User</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14643"/>
        <source>Maintain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14668"/>
        <location filename="../mywidget.cpp" line="5041"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14693"/>
        <source>······</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14726"/>
        <source>Tip:Please check if account and password are
correct.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14773"/>
        <source>Login</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14800"/>
        <location filename="../mywidget.cpp" line="1429"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="507"/>
        <source>PV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="580"/>
        <source>Battery charging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="593"/>
        <source>Battery discharging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="533"/>
        <location filename="../mywidget.ui" line="567"/>
        <location filename="../mywidget.ui" line="606"/>
        <location filename="../mywidget.ui" line="1771"/>
        <location filename="../mywidget.ui" line="1849"/>
        <location filename="../mywidget.ui" line="1862"/>
        <source>0kWh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1784"/>
        <source>Load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1657"/>
        <source>Power meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1272"/>
        <source>SOC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8444"/>
        <source>A1: Generator turn on voltage
B1: Generator turn off voltage
A1 Setting range: [250, 900]
B1 Setting range: [250, 900]
Set rule:B1 - A1 ≥ 10V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9935"/>
        <source>CV Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9713"/>
        <location filename="../mywidget.cpp" line="4313"/>
        <source>Rack</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10103"/>
        <source>ATS Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10138"/>
        <location filename="../mywidget.ui" line="10182"/>
        <location filename="../mywidget.ui" line="10226"/>
        <location filename="../mywidget.cpp" line="4379"/>
        <location filename="../mywidget.cpp" line="4382"/>
        <location filename="../mywidget.cpp" line="4385"/>
        <location filename="../mywidget.cpp" line="4388"/>
        <location filename="../mywidget.cpp" line="4391"/>
        <location filename="../mywidget.cpp" line="4394"/>
        <source>N_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2134"/>
        <location filename="../mywidget.ui" line="3216"/>
        <location filename="../mywidget.ui" line="3450"/>
        <location filename="../mywidget.ui" line="3510"/>
        <location filename="../mywidget.ui" line="11321"/>
        <location filename="../mywidget.cpp" line="3132"/>
        <location filename="../mywidget.cpp" line="3999"/>
        <location filename="../mywidget.cpp" line="4004"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2161"/>
        <location filename="../mywidget.ui" line="3243"/>
        <location filename="../mywidget.ui" line="3455"/>
        <location filename="../mywidget.ui" line="3515"/>
        <location filename="../mywidget.ui" line="11326"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2179"/>
        <location filename="../mywidget.ui" line="3261"/>
        <location filename="../mywidget.ui" line="3460"/>
        <location filename="../mywidget.ui" line="3520"/>
        <location filename="../mywidget.ui" line="11331"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2197"/>
        <location filename="../mywidget.ui" line="3279"/>
        <location filename="../mywidget.ui" line="3465"/>
        <location filename="../mywidget.ui" line="3525"/>
        <location filename="../mywidget.ui" line="11336"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2215"/>
        <location filename="../mywidget.ui" line="3297"/>
        <location filename="../mywidget.ui" line="3470"/>
        <location filename="../mywidget.ui" line="3530"/>
        <location filename="../mywidget.ui" line="11341"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2233"/>
        <location filename="../mywidget.ui" line="3315"/>
        <location filename="../mywidget.ui" line="3475"/>
        <location filename="../mywidget.ui" line="3535"/>
        <location filename="../mywidget.ui" line="11346"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2257"/>
        <location filename="../mywidget.ui" line="3339"/>
        <location filename="../mywidget.ui" line="3480"/>
        <location filename="../mywidget.ui" line="11351"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2275"/>
        <location filename="../mywidget.ui" line="3357"/>
        <location filename="../mywidget.ui" line="3485"/>
        <location filename="../mywidget.ui" line="11356"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2293"/>
        <location filename="../mywidget.ui" line="3375"/>
        <location filename="../mywidget.ui" line="3490"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2311"/>
        <location filename="../mywidget.ui" line="3393"/>
        <location filename="../mywidget.ui" line="3495"/>
        <location filename="../mywidget.cpp" line="3590"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2329"/>
        <location filename="../mywidget.ui" line="3411"/>
        <location filename="../mywidget.ui" line="3500"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2347"/>
        <location filename="../mywidget.ui" line="3429"/>
        <location filename="../mywidget.ui" line="3505"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2462"/>
        <location filename="../mywidget.cpp" line="1894"/>
        <source>Converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2685"/>
        <location filename="../mywidget.cpp" line="1892"/>
        <source>PV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2908"/>
        <location filename="../mywidget.cpp" line="1896"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3131"/>
        <location filename="../mywidget.cpp" line="1893"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3635"/>
        <source>Alarm Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3679"/>
        <source>Battery Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3759"/>
        <location filename="../mywidget.ui" line="4312"/>
        <location filename="../mywidget.ui" line="11361"/>
        <location filename="../mywidget.cpp" line="1574"/>
        <location filename="../mywidget.cpp" line="1617"/>
        <location filename="../mywidget.cpp" line="1663"/>
        <location filename="../mywidget.cpp" line="1721"/>
        <location filename="../mywidget.cpp" line="1905"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3778"/>
        <source>Bat voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3797"/>
        <location filename="../mywidget.cpp" line="2451"/>
        <source>Bat current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3816"/>
        <location filename="../mywidget.cpp" line="2455"/>
        <source>SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3835"/>
        <location filename="../mywidget.cpp" line="2459"/>
        <source>SOH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3854"/>
        <source>Cell voltage (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3873"/>
        <source>Cell voltage (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3892"/>
        <source>Cell temp. (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3911"/>
        <source>Cell temp. (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3939"/>
        <location filename="../mywidget.ui" line="4484"/>
        <location filename="../mywidget.cpp" line="1527"/>
        <location filename="../mywidget.cpp" line="1574"/>
        <location filename="../mywidget.cpp" line="1617"/>
        <location filename="../mywidget.cpp" line="1663"/>
        <location filename="../mywidget.cpp" line="1721"/>
        <location filename="../mywidget.cpp" line="1905"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3969"/>
        <location filename="../mywidget.ui" line="3988"/>
        <location filename="../mywidget.ui" line="4007"/>
        <location filename="../mywidget.ui" line="4026"/>
        <location filename="../mywidget.ui" line="4045"/>
        <location filename="../mywidget.ui" line="4064"/>
        <location filename="../mywidget.ui" line="4083"/>
        <location filename="../mywidget.ui" line="4102"/>
        <location filename="../mywidget.ui" line="4509"/>
        <location filename="../mywidget.ui" line="4528"/>
        <location filename="../mywidget.ui" line="4547"/>
        <location filename="../mywidget.ui" line="4566"/>
        <location filename="../mywidget.ui" line="4585"/>
        <location filename="../mywidget.ui" line="4604"/>
        <location filename="../mywidget.ui" line="8538"/>
        <location filename="../mywidget.ui" line="8584"/>
        <location filename="../mywidget.ui" line="8630"/>
        <location filename="../mywidget.ui" line="8676"/>
        <location filename="../mywidget.ui" line="8743"/>
        <location filename="../mywidget.cpp" line="3112"/>
        <location filename="../mywidget.cpp" line="3571"/>
        <location filename="../mywidget.cpp" line="3624"/>
        <location filename="../mywidget.cpp" line="3628"/>
        <location filename="../mywidget.cpp" line="3744"/>
        <location filename="../mywidget.cpp" line="3749"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4127"/>
        <location filename="../mywidget.ui" line="4655"/>
        <source>Unit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4163"/>
        <location filename="../mywidget.ui" line="4673"/>
        <location filename="../mywidget.ui" line="4691"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4217"/>
        <location filename="../mywidget.ui" line="4235"/>
        <source>mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4253"/>
        <location filename="../mywidget.ui" line="4271"/>
        <source>℃</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4823"/>
        <source>prompt:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4864"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5020"/>
        <source>Alarm level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5089"/>
        <location filename="../mywidget.ui" line="5133"/>
        <location filename="../mywidget.ui" line="10127"/>
        <location filename="../mywidget.ui" line="10171"/>
        <location filename="../mywidget.ui" line="10215"/>
        <location filename="../mywidget.cpp" line="2891"/>
        <location filename="../mywidget.cpp" line="2907"/>
        <location filename="../mywidget.cpp" line="3580"/>
        <location filename="../mywidget.cpp" line="4359"/>
        <location filename="../mywidget.cpp" line="4362"/>
        <location filename="../mywidget.cpp" line="4365"/>
        <location filename="../mywidget.cpp" line="4368"/>
        <location filename="../mywidget.cpp" line="4371"/>
        <location filename="../mywidget.cpp" line="4374"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4366"/>
        <location filename="../mywidget.cpp" line="2487"/>
        <source>Allowable charging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4384"/>
        <location filename="../mywidget.cpp" line="2491"/>
        <source>Allowable discharging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4402"/>
        <location filename="../mywidget.cpp" line="2495"/>
        <source>Allowable charging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4420"/>
        <location filename="../mywidget.cpp" line="2499"/>
        <source>Allowable discharging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5214"/>
        <source>Data report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5327"/>
        <source>yyyy-MM-dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5359"/>
        <location filename="../mywidget.cpp" line="4672"/>
        <source>Y  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5378"/>
        <location filename="../mywidget.cpp" line="4684"/>
        <source>M  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5397"/>
        <location filename="../mywidget.cpp" line="4696"/>
        <source>D  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5423"/>
        <location filename="../mywidget.cpp" line="4678"/>
        <source>Y  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5442"/>
        <location filename="../mywidget.cpp" line="4690"/>
        <source>M  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5461"/>
        <location filename="../mywidget.cpp" line="4702"/>
        <source>D  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5477"/>
        <source>Export Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5526"/>
        <source>Note:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5546"/>
        <source>Log.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5567"/>
        <source>Out put file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5609"/>
        <source>Report.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5650"/>
        <source>Data To Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5912"/>
        <source>History Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5802"/>
        <location filename="../mywidget.ui" line="5949"/>
        <source>Operation Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5698"/>
        <source>status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7623"/>
        <location filename="../mywidget.cpp" line="3668"/>
        <source>Control mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9134"/>
        <location filename="../mywidget.cpp" line="4028"/>
        <source>Machine number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8986"/>
        <location filename="../mywidget.cpp" line="4004"/>
        <source>Output power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="183"/>
        <source>Change
Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1901"/>
        <source>Grid sell:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1836"/>
        <source>Grid buy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1282"/>
        <source>0%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2009"/>
        <source>Converter Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3154"/>
        <location filename="../mywidget.cpp" line="4764"/>
        <source>Converter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3548"/>
        <source>Converter Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4330"/>
        <location filename="../mywidget.cpp" line="2479"/>
        <source>Charging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4348"/>
        <location filename="../mywidget.cpp" line="2483"/>
        <source>Discharging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4899"/>
        <source>Level1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4941"/>
        <source>Level2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4976"/>
        <source>Level3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5061"/>
        <source>Charging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5105"/>
        <source>Discharging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5588"/>
        <source>Record.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5739"/>
        <source>u disk disconnect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5773"/>
        <location filename="../mywidget.cpp" line="4708"/>
        <source>History Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5837"/>
        <location filename="../mywidget.cpp" line="4720"/>
        <source>Electricity Statistical Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8255"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8292"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8366"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8329"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8503"/>
        <location filename="../mywidget.cpp" line="3848"/>
        <source>Capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8695"/>
        <source>Grid off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8549"/>
        <source>Cell number(2V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8649"/>
        <source>Grid on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8595"/>
        <location filename="../mywidget.cpp" line="3858"/>
        <source>Battery float voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8641"/>
        <location filename="../mywidget.cpp" line="3863"/>
        <source>Battery filling voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8527"/>
        <source>Mending center point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8687"/>
        <location filename="../mywidget.cpp" line="3868"/>
        <source>Charge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8573"/>
        <source>Temperature filling coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8724"/>
        <location filename="../mywidget.cpp" line="3873"/>
        <source>Discharge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8619"/>
        <source>Mending allowable setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8665"/>
        <source>Temperature alarm upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8711"/>
        <location filename="../mywidget.cpp" line="3906"/>
        <source>Uniform charging and flushing current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8754"/>
        <location filename="../mywidget.cpp" line="3911"/>
        <source>Float turn uniform charging current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11288"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11456"/>
        <source>Network:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11515"/>
        <source>interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10891"/>
        <location filename="../mywidget.ui" line="11556"/>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11537"/>
        <source>eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11578"/>
        <source>502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11771"/>
        <source>Apply and Reatart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11612"/>
        <source>DHCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11366"/>
        <location filename="../mywidget.ui" line="14450"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11371"/>
        <source>   Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11384"/>
        <source>   DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11392"/>
        <source>   DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11400"/>
        <source>   DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11413"/>
        <source>   DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11421"/>
        <source>   DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11429"/>
        <source>   DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11437"/>
        <source>   SN:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11628"/>
        <location filename="../mywidget.cpp" line="5120"/>
        <source>STATIC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11648"/>
        <source>ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11678"/>
        <source>netmask:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11708"/>
        <source>gateway:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11738"/>
        <source>Server ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11661"/>
        <source>192 . 168 . 1 . 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11691"/>
        <source>255 . 255 . 255 . 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11721"/>
        <source>192 . 168 .  1  . 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11751"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6316"/>
        <source>DCAC converter 
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6243"/>
        <source>DCAC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6143"/>
        <source>DCDC converter
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6070"/>
        <source>DCDC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9068"/>
        <source>serial port 6(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9277"/>
        <source>Release Charging Prohibition Indicator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9314"/>
        <source>Release Discharging Prohibition Indicator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10079"/>
        <source>EPO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10087"/>
        <source>Shut Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10119"/>
        <source>Fire fighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13018"/>
        <source>Selection &quot;Peak&quot;,&quot;Valley&quot; or &quot;Flat&quot; according to the gtid tariff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13039"/>
        <source>The time to start the autorun.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13060"/>
        <source>The time to end the autorun.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13102"/>
        <source>The power value of the execution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13120"/>
        <source>The action performed by the generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13141"/>
        <source>The &quot;Mixed Mode&quot; primarily offers the following functionalities:
1. Economic mode:
   a. Peak: Performs &quot;Self-use&quot; mode. The load is energized by the battery.
   b. Fair: Performs &quot;Self-use&quot; mode. Energy is supplied to the load from the grid.
   c. Valley: Performs &quot;Battery priority&quot; mode. The grid charges the battery and provides energy to the load.
2. peak shaving: according to the set power value (positive discharge, negative charge) to decide the battery charging or discharging.
Next, you can decide whether or not to turn on the generator based on the selected &quot;Generator Action&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13599"/>
        <source>Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13712"/>
        <source>Converter2 Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>切换语言</source>
        <translation type="vanished">Change Language</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7770"/>
        <location filename="../mywidget.cpp" line="3711"/>
        <source>Work parttern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7810"/>
        <location filename="../mywidget.cpp" line="3716"/>
        <source>Boost or Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9171"/>
        <location filename="../mywidget.cpp" line="4035"/>
        <source>Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5866"/>
        <location filename="../mywidget.cpp" line="4726"/>
        <source>Eject U disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10149"/>
        <location filename="../mywidget.ui" line="10193"/>
        <location filename="../mywidget.ui" line="10237"/>
        <location filename="../mywidget.cpp" line="4403"/>
        <location filename="../mywidget.cpp" line="4406"/>
        <location filename="../mywidget.cpp" line="4409"/>
        <source>Prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10519"/>
        <location filename="../mywidget.cpp" line="4449"/>
        <location filename="../mywidget.cpp" line="4611"/>
        <source>Debug variable 1 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10551"/>
        <location filename="../mywidget.cpp" line="4453"/>
        <location filename="../mywidget.cpp" line="4615"/>
        <source>Debug variable 2 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10575"/>
        <location filename="../mywidget.cpp" line="4457"/>
        <location filename="../mywidget.cpp" line="4619"/>
        <source>Debug variable 3 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12017"/>
        <location filename="../mywidget.cpp" line="1989"/>
        <location filename="../mywidget.cpp" line="2228"/>
        <location filename="../mywidget.cpp" line="2234"/>
        <location filename="../mywidget.cpp" line="2259"/>
        <location filename="../mywidget.cpp" line="2266"/>
        <source>1/1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14648"/>
        <location filename="../mywidget.cpp" line="1976"/>
        <source>Admin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <source>Upgrade prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1428"/>
        <source>1. Make sure to press the EPO button before upgrading.
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1429"/>
        <source>Next</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1508"/>
        <source>Inv. Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1508"/>
        <source>Inv. Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1508"/>
        <source>Inv. Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1509"/>
        <source>Inv. Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1509"/>
        <source>Inv. Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1509"/>
        <source>Inv. Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1510"/>
        <location filename="../mywidget.cpp" line="2612"/>
        <source>IGBT temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1510"/>
        <source>Env. temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1510"/>
        <location filename="../mywidget.cpp" line="1558"/>
        <location filename="../mywidget.cpp" line="2621"/>
        <source>Leakage current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1512"/>
        <location filename="../mywidget.cpp" line="2626"/>
        <source>PV voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1512"/>
        <location filename="../mywidget.cpp" line="2630"/>
        <source>PV current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1512"/>
        <location filename="../mywidget.cpp" line="2634"/>
        <source>PV power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1513"/>
        <location filename="../mywidget.cpp" line="2638"/>
        <source>Battery voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1513"/>
        <location filename="../mywidget.cpp" line="2642"/>
        <source>Battery current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1513"/>
        <location filename="../mywidget.cpp" line="2646"/>
        <source>Battery power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1514"/>
        <location filename="../mywidget.cpp" line="2650"/>
        <source>Bus voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1514"/>
        <location filename="../mywidget.cpp" line="2654"/>
        <source>Bus current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1527"/>
        <source>Inverter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1527"/>
        <source>DC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1557"/>
        <source>PV Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1557"/>
        <source>PV Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1557"/>
        <source>PV Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1558"/>
        <source>PV Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1558"/>
        <source>PV Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1558"/>
        <source>PV Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1560"/>
        <source>Bus_H_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1560"/>
        <source>Bus_H_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1560"/>
        <source>Bus_L_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1560"/>
        <source>Bus_L_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <location filename="../mywidget.cpp" line="2722"/>
        <source>IGBT Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <source>PositiveInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <source>NegativeInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1601"/>
        <location filename="../mywidget.cpp" line="2738"/>
        <source>Grid Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1601"/>
        <location filename="../mywidget.cpp" line="2742"/>
        <source>Grid Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1601"/>
        <location filename="../mywidget.cpp" line="2746"/>
        <source>Grid Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1602"/>
        <location filename="../mywidget.cpp" line="2750"/>
        <source>Grid Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1602"/>
        <location filename="../mywidget.cpp" line="2754"/>
        <source>Grid Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1602"/>
        <location filename="../mywidget.cpp" line="2758"/>
        <source>Grid Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1604"/>
        <location filename="../mywidget.cpp" line="2764"/>
        <source>Grid active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1604"/>
        <location filename="../mywidget.cpp" line="2768"/>
        <source>Grid reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1604"/>
        <location filename="../mywidget.cpp" line="2772"/>
        <source>Grid apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1604"/>
        <location filename="../mywidget.cpp" line="2776"/>
        <source>Grid power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <location filename="../mywidget.cpp" line="2780"/>
        <source>Grid frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1646"/>
        <location filename="../mywidget.cpp" line="2788"/>
        <source>Load Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1646"/>
        <location filename="../mywidget.cpp" line="2792"/>
        <source>Load Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1646"/>
        <location filename="../mywidget.cpp" line="2796"/>
        <source>Load Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1647"/>
        <location filename="../mywidget.cpp" line="2800"/>
        <source>Load Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1647"/>
        <location filename="../mywidget.cpp" line="2804"/>
        <source>Load Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1647"/>
        <location filename="../mywidget.cpp" line="2808"/>
        <source>Load Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1649"/>
        <location filename="../mywidget.cpp" line="2813"/>
        <source>Load active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1649"/>
        <location filename="../mywidget.cpp" line="2817"/>
        <source>Load reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1649"/>
        <location filename="../mywidget.cpp" line="2821"/>
        <source>Load apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1649"/>
        <location filename="../mywidget.cpp" line="2825"/>
        <source>Load power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1650"/>
        <location filename="../mywidget.cpp" line="2829"/>
        <source>Load frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1699"/>
        <location filename="../mywidget.cpp" line="2849"/>
        <source>DC input breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1699"/>
        <location filename="../mywidget.cpp" line="2853"/>
        <source>DC contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1699"/>
        <source>Maintenance Bypass breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="2861"/>
        <source>Output breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="2865"/>
        <source>Output contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="2869"/>
        <source>Grid breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="2873"/>
        <source>DCAC insulation detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="2877"/>
        <source>Start generator signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="2881"/>
        <source>DO2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="2885"/>
        <source>DO3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1703"/>
        <location filename="../mywidget.cpp" line="2891"/>
        <source>DCAC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1703"/>
        <location filename="../mywidget.cpp" line="2895"/>
        <source>DC Soft start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1703"/>
        <location filename="../mywidget.cpp" line="1707"/>
        <location filename="../mywidget.cpp" line="1888"/>
        <source>Converter status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1703"/>
        <location filename="../mywidget.cpp" line="2903"/>
        <source>Reactive power Regulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2907"/>
        <source>LVRT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2911"/>
        <source>DI1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2915"/>
        <source>DI2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2919"/>
        <source>DI3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2923"/>
        <source>DI4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2927"/>
        <source>DI5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="2931"/>
        <source>DI6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1706"/>
        <location filename="../mywidget.cpp" line="2936"/>
        <source>DCDC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1706"/>
        <location filename="../mywidget.cpp" line="2940"/>
        <source>Run mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1706"/>
        <source>Soft start status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1706"/>
        <source>Soft start status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1707"/>
        <source>Contactor status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1707"/>
        <source>Contactor status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1707"/>
        <location filename="../mywidget.cpp" line="2964"/>
        <source>DCDC insulation detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1775"/>
        <source>PV power generation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1775"/>
        <source>Load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1775"/>
        <source>Battery charge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1776"/>
        <source>Battery discharge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1776"/>
        <source>Grid buy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1776"/>
        <source>Grid sell</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1778"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1778"/>
        <source>Day(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1778"/>
        <source>Month(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1778"/>
        <source>Year(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1778"/>
        <source>Total(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1804"/>
        <location filename="../mywidget.cpp" line="3113"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1804"/>
        <location filename="../mywidget.cpp" line="3115"/>
        <source>Start Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1804"/>
        <location filename="../mywidget.cpp" line="3117"/>
        <source>End Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1804"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1845"/>
        <location filename="../mywidget.cpp" line="3421"/>
        <source>Modification Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1845"/>
        <location filename="../mywidget.cpp" line="3423"/>
        <source>Record Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Optimal mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1872"/>
        <source>Mixed mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>DC/DC Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>Lithium Battery Setting Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>Lead-acid Battery Setting Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>Time Period Setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>Function Sentting 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1873"/>
        <source>Function Sentting 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1874"/>
        <source>System Senttings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1874"/>
        <source>Device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1874"/>
        <source>DC/AC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1874"/>
        <source>DC/DC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1874"/>
        <source>Port data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1877"/>
        <location filename="../mywidget.cpp" line="5065"/>
        <source>Working mode introduction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1878"/>
        <source>Apply this mode and exit the parameter settings page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1879"/>
        <source>Eexit the parameter settings page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1880"/>
        <source>Next page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1881"/>
        <source>Last page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1882"/>
        <source>Machine typs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1883"/>
        <source>Current system time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1884"/>
        <source>Alarm severity warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1885"/>
        <source>Chinese and English switching</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1886"/>
        <source>Open menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1887"/>
        <source>User login</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1889"/>
        <source>DCDC module state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1890"/>
        <source>Return to previous page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1891"/>
        <source>View the detailed running logic and related parameters of the working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1895"/>
        <source>Battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1897"/>
        <source>Set the port to listen on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1898"/>
        <source>Start/Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <location filename="../mywidget.cpp" line="3917"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <location filename="../mywidget.cpp" line="3932"/>
        <source>Peak-Flat-Valley</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <source>StartTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <source>EndTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <location filename="../mywidget.cpp" line="3920"/>
        <source>Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <source>Power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1912"/>
        <location filename="../mywidget.cpp" line="3933"/>
        <source>Generator action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1968"/>
        <source>USER</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1972"/>
        <source>MAINTAIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2013"/>
        <location filename="../mywidget.cpp" line="5002"/>
        <source>Advanced Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2325"/>
        <source>Alarm icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2326"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2328"/>
        <location filename="../mywidget.cpp" line="2448"/>
        <location filename="../mywidget.cpp" line="2452"/>
        <location filename="../mywidget.cpp" line="2456"/>
        <location filename="../mywidget.cpp" line="2460"/>
        <location filename="../mywidget.cpp" line="2464"/>
        <location filename="../mywidget.cpp" line="2468"/>
        <location filename="../mywidget.cpp" line="2472"/>
        <location filename="../mywidget.cpp" line="2476"/>
        <location filename="../mywidget.cpp" line="2480"/>
        <location filename="../mywidget.cpp" line="2484"/>
        <location filename="../mywidget.cpp" line="2488"/>
        <location filename="../mywidget.cpp" line="2492"/>
        <location filename="../mywidget.cpp" line="2496"/>
        <location filename="../mywidget.cpp" line="2500"/>
        <location filename="../mywidget.cpp" line="2504"/>
        <location filename="../mywidget.cpp" line="2508"/>
        <location filename="../mywidget.cpp" line="2512"/>
        <location filename="../mywidget.cpp" line="2526"/>
        <location filename="../mywidget.cpp" line="2530"/>
        <location filename="../mywidget.cpp" line="2534"/>
        <location filename="../mywidget.cpp" line="2538"/>
        <location filename="../mywidget.cpp" line="2542"/>
        <location filename="../mywidget.cpp" line="2546"/>
        <location filename="../mywidget.cpp" line="2550"/>
        <location filename="../mywidget.cpp" line="4662"/>
        <location filename="../mywidget.cpp" line="4667"/>
        <location filename="../mywidget.cpp" line="4673"/>
        <location filename="../mywidget.cpp" line="4679"/>
        <location filename="../mywidget.cpp" line="4685"/>
        <location filename="../mywidget.cpp" line="4691"/>
        <location filename="../mywidget.cpp" line="4697"/>
        <location filename="../mywidget.cpp" line="4703"/>
        <location filename="../mywidget.cpp" line="4709"/>
        <location filename="../mywidget.cpp" line="4715"/>
        <location filename="../mywidget.cpp" line="4721"/>
        <location filename="../mywidget.cpp" line="4727"/>
        <location filename="../mywidget.cpp" line="4732"/>
        <location filename="../mywidget.cpp" line="4737"/>
        <location filename="../mywidget.cpp" line="4743"/>
        <location filename="../mywidget.cpp" line="4748"/>
        <location filename="../mywidget.cpp" line="4753"/>
        <location filename="../mywidget.cpp" line="4758"/>
        <location filename="../mywidget.cpp" line="4764"/>
        <location filename="../mywidget.cpp" line="4769"/>
        <location filename="../mywidget.cpp" line="4949"/>
        <location filename="../mywidget.cpp" line="5046"/>
        <location filename="../mywidget.cpp" line="5069"/>
        <location filename="../mywidget.cpp" line="5075"/>
        <location filename="../mywidget.cpp" line="5081"/>
        <location filename="../mywidget.cpp" line="5120"/>
        <location filename="../mywidget.cpp" line="5131"/>
        <location filename="../mywidget.cpp" line="5137"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2447"/>
        <source>Bat volage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2448"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2452"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2456"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2460"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2463"/>
        <source>Cell voltage(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2464"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2467"/>
        <source>Cell voltage(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2468"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2471"/>
        <source>Cell temp.(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2472"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2475"/>
        <source>Cell temp.(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2476"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2480"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2484"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2488"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2492"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2496"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2500"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2503"/>
        <source>Alarm level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2504"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2507"/>
        <source>Charging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2508"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2511"/>
        <source>Discharging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2512"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2525"/>
        <source>Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2526"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2529"/>
        <location filename="../mywidget.cpp" line="5075"/>
        <source>Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2530"/>
        <source>This is the port number, default 502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2533"/>
        <source>Ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2534"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2537"/>
        <source>Netmask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2538"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2541"/>
        <source>Gateway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2542"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2545"/>
        <source>Serber ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2546"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2549"/>
        <source>Apply and Restart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2550"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2588"/>
        <source>Inv. voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2589"/>
        <source>Inv. side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2592"/>
        <source>Inv. voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2593"/>
        <source>Inv. side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2596"/>
        <source>Inv. voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2597"/>
        <source>Inv. side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2600"/>
        <source>Inv. current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2601"/>
        <source>Inv. side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2604"/>
        <source>Inv. current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2605"/>
        <source>Inv. side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2608"/>
        <source>Inv. current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2609"/>
        <source>Inv. side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2613"/>
        <location filename="../mywidget.cpp" line="2723"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2617"/>
        <source>Environment temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2618"/>
        <source>The ambient temperature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2622"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2627"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2631"/>
        <source>Total current on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2635"/>
        <source>Total power on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2639"/>
        <source>converter battery side voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2643"/>
        <source>converter battery side current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2647"/>
        <source>converter battery side power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2651"/>
        <source>converter bus voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2655"/>
        <source>converter bus current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2674"/>
        <source>Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2675"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2678"/>
        <source>Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2679"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2682"/>
        <source>Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2683"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2686"/>
        <source>Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2687"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2690"/>
        <source>Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2691"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2694"/>
        <source>Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2695"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2698"/>
        <source>Leakage cur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2699"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2706"/>
        <source>Bus H vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2707"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2710"/>
        <source>Bus H vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2711"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2714"/>
        <source>Bus L vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2715"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2718"/>
        <source>Bus L vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2719"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2726"/>
        <source>Positive Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2727"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2730"/>
        <source>Negative Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2731"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2739"/>
        <source>Grid side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2743"/>
        <source>Grid side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2747"/>
        <source>Grid side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2751"/>
        <source>Grid side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2755"/>
        <source>Grid side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2759"/>
        <source>Grid side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2765"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2769"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2773"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2777"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2781"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2789"/>
        <source>Load side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2793"/>
        <source>Load side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2797"/>
        <source>Load side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2801"/>
        <source>Load side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2805"/>
        <source>Load side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2809"/>
        <source>Load side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2814"/>
        <source>Active power P on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2818"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2822"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2826"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2830"/>
        <source>Frequency on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2849"/>
        <location filename="../mywidget.cpp" line="2853"/>
        <location filename="../mywidget.cpp" line="2857"/>
        <location filename="../mywidget.cpp" line="2861"/>
        <location filename="../mywidget.cpp" line="2865"/>
        <location filename="../mywidget.cpp" line="2869"/>
        <location filename="../mywidget.cpp" line="2956"/>
        <source>On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2850"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2854"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2857"/>
        <source>Maintenance Bypass Breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2858"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2862"/>
        <source>The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2866"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2870"/>
        <source>The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2873"/>
        <location filename="../mywidget.cpp" line="2877"/>
        <location filename="../mywidget.cpp" line="2881"/>
        <location filename="../mywidget.cpp" line="2885"/>
        <location filename="../mywidget.cpp" line="2903"/>
        <location filename="../mywidget.cpp" line="2911"/>
        <location filename="../mywidget.cpp" line="2915"/>
        <location filename="../mywidget.cpp" line="2919"/>
        <location filename="../mywidget.cpp" line="2923"/>
        <location filename="../mywidget.cpp" line="2927"/>
        <location filename="../mywidget.cpp" line="2931"/>
        <location filename="../mywidget.cpp" line="2936"/>
        <location filename="../mywidget.cpp" line="2964"/>
        <location filename="../mywidget.cpp" line="3733"/>
        <location filename="../mywidget.cpp" line="3739"/>
        <location filename="../mywidget.cpp" line="4035"/>
        <location filename="../mywidget.cpp" line="4087"/>
        <location filename="../mywidget.cpp" line="4179"/>
        <location filename="../mywidget.cpp" line="4286"/>
        <location filename="../mywidget.cpp" line="4335"/>
        <location filename="../mywidget.cpp" line="4339"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2874"/>
        <source>DCAC insulation detection:Enable,Disable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2878"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2882"/>
        <source>Dry contact 2 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2886"/>
        <source>Dry contact 3 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2892"/>
        <location filename="../mywidget.cpp" line="2937"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2895"/>
        <source>Not starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2896"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2899"/>
        <source>OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2899"/>
        <location filename="../mywidget.cpp" line="2960"/>
        <source>Converter Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2900"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2904"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2908"/>
        <source>LVRT states : Enable , Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2912"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2916"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2920"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2924"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2928"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2932"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2940"/>
        <location filename="../mywidget.cpp" line="3716"/>
        <source>Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2941"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2944"/>
        <location filename="../mywidget.cpp" line="2948"/>
        <source>Not
starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2944"/>
        <source>Soft Start Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2945"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2948"/>
        <source>Soft Start Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2949"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2952"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2952"/>
        <source>Contator Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2953"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2956"/>
        <source>Contator Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2957"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2960"/>
        <location filename="../mywidget.cpp" line="4748"/>
        <location filename="../mywidget.cpp" line="4758"/>
        <source>Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2961"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2965"/>
        <source>DCDC insulation detection:Enable,Disable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2972"/>
        <source>Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2973"/>
        <source>This is the monitor screen version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2976"/>
        <source>DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2977"/>
        <source>This is the DCAC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2980"/>
        <source>DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2981"/>
        <source>This is the DCAC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2984"/>
        <source>DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2985"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2988"/>
        <source>DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2989"/>
        <source>This is the DCDC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2992"/>
        <source>DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2993"/>
        <source>This is the DCDC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2996"/>
        <source>DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2997"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3000"/>
        <source>SN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3001"/>
        <source>This is SN, the serial number of the product.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3009"/>
        <source>PV power generation Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3010"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3013"/>
        <source>PV power generation Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3014"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3017"/>
        <source>PV power generation Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3018"/>
        <source>Annual photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3021"/>
        <source>PV power generation Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3022"/>
        <source>Total photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3026"/>
        <source>Daily load electricity consumption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3027"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3030"/>
        <source>Monthly load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3031"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3034"/>
        <source>Annual load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3035"/>
        <source>Annual electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3038"/>
        <source>Total load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3039"/>
        <source>Total electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3043"/>
        <location filename="../mywidget.cpp" line="3060"/>
        <source>Battery Charge Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3044"/>
        <source>Today&apos;s battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3047"/>
        <location filename="../mywidget.cpp" line="3064"/>
        <source>Battery Discharge Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3048"/>
        <source>Monthly battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3051"/>
        <location filename="../mywidget.cpp" line="3068"/>
        <source>Battery Discharge Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3052"/>
        <source>Annual battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3055"/>
        <location filename="../mywidget.cpp" line="3072"/>
        <source>Battery Discharge Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3056"/>
        <source>Total battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3061"/>
        <source>Today&apos;s battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3065"/>
        <source>Monthly battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3069"/>
        <source>Annual battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3073"/>
        <source>Total battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3077"/>
        <source>Grid buy Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3078"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>Grid buy Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3082"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3085"/>
        <source>Grid buy Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3086"/>
        <source>Annual electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3089"/>
        <source>Grid buy Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3090"/>
        <source>Total electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3094"/>
        <source>Grid sell Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3095"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3098"/>
        <source>Grid sell Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3102"/>
        <source>Grid sell Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3103"/>
        <source>Annual electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3106"/>
        <source>Grid sell Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3107"/>
        <source>Total electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3114"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3116"/>
        <source>Event start time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3118"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3119"/>
        <source>CAN communication failure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3120"/>
        <source>event description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3121"/>
        <source>event description.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3122"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3123"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3124"/>
        <source>Converter Standby.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3125"/>
        <source>The grid contactor connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3126"/>
        <source>The grid breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3127"/>
        <source>The output breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3128"/>
        <source>Buck not softened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3129"/>
        <source>Contactor off buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3130"/>
        <source>The grid breaker disconnected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3422"/>
        <source>Time when the system Settings are modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3424"/>
        <source>System settings operation records.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3506"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3510"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3514"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3518"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3522"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3526"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3530"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3534"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3538"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3563"/>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3563"/>
        <source>Grid conected mode of the converter </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3564"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3571"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3572"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3581"/>
        <source>Grid Expansion: Enable, Disable. Enabling activates the Grid Expansion mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>30</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>Grid capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3586"/>
        <source>Grid Capacity: In the grid expansion mode, the maximum power limit is imposed on the grid side .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3590"/>
        <source>DG Charging power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3591"/>
        <source>DG Charging power limit: Diesel generators allow for the maximum charging power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3595"/>
        <source>DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3596"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3600"/>
        <source>Start charging SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3601"/>
        <source>Start charging SOC:
 (1) At the self-use mode, when the battery SOC is lower than the&quot;Start charging SOC&quot;, the converter maintains the battery SOC at this value.
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.
 (3) At the optimal mode, when the battery SOC is lower than the &quot;Start charging SOC&quot;, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the &quot;Stop charging SOC&quot;, the converter exits the FCP state and enters the ECP state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3609"/>
        <source>Stop charging SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3610"/>
        <source>Stop charging SOC: When the SOC is greater than the &quot;Stop charging SOC&quot;, the FCP state is released.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3616"/>
        <location filename="../mywidget.cpp" line="3620"/>
        <location filename="../mywidget.cpp" line="4093"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3616"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3617"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3620"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3621"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3624"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3625"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3628"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3629"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3632"/>
        <location filename="../mywidget.cpp" line="3636"/>
        <location filename="../mywidget.cpp" line="4016"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3632"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3633"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3636"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3637"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3643"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3644"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3648"/>
        <source>BMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3649"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3654"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3654"/>
        <source>BAT protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3662"/>
        <source>EMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3663"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3668"/>
        <source>Local</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3669"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
    Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3711"/>
        <source>MPPT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3712"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3717"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3723"/>
        <source>60</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3723"/>
        <source>DC CC Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3724"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3728"/>
        <source>300</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3728"/>
        <source>DC CV Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3729"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3734"/>
        <source>Outer Ring Centralized Control：Multiple DCDC modules, especially when the DCDC module power fluctuation is significant.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3740"/>
        <location filename="../mywidget.cpp" line="3745"/>
        <location filename="../mywidget.cpp" line="3750"/>
        <location filename="../mywidget.cpp" line="4420"/>
        <location filename="../mywidget.cpp" line="4578"/>
        <source>It is used for internal debugging only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3744"/>
        <source>IV curve scanning low voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3749"/>
        <source>IV curve scanning high voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3761"/>
        <source>Grid-on DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3762"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3766"/>
        <source>Grid-off DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3767"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3770"/>
        <source>Off-Grid DOD Protection Release SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3771"/>
        <source>Off-Grid DOD Protection Release SOC: After triggering off-grid DOD protection, the off-grid DOD protection can only be lifted when the battery&apos;s SOC reaches this set value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3776"/>
        <source>Charging voltage upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3777"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3781"/>
        <source>Charge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3782"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3789"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3790"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3794"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3795"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3800"/>
        <source>Charge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3801"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3805"/>
        <source>Discharge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3806"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3810"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3811"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3815"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3816"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3822"/>
        <source>Force Charge On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3823"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3827"/>
        <source>ForceCharge Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3828"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3833"/>
        <source>When the battery current feedback type is &apos;Calculated Value&apos;, and the highest cell voltage in the battery reaches the cell protection voltage minus the cell protection voltage threshold,the Inverter will enable linear current limiting to restrict the charging current at that time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3838"/>
        <source>DCAC cell delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3839"/>
        <source>DCAC cell protect voltage delta.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3849"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3853"/>
        <source>Cell_number_2V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3854"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3859"/>
        <source>This is the floating charge voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3864"/>
        <source>This is the filling voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3869"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3874"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3881"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3886"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3890"/>
        <source>DCAC Reference Voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3891"/>
        <source>.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3895"/>
        <source>Grid-on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3896"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3900"/>
        <source>Grid-off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3901"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3907"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3912"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3918"/>
        <source>Start_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3919"/>
        <source>End_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3921"/>
        <source>Power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3922"/>
        <source>08:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3923"/>
        <source>10:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3924"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3925"/>
        <source>The function that will perform this function during business hours, there are two to choose from, They are Peak shaving,Economic mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3926"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3927"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3928"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3929"/>
        <source>Peak shaving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3930"/>
        <source>Peak</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3931"/>
        <source>In the economic mode, select &apos;Peak&apos; periods,&apos;Flat&apos; periods and &apos;Valley&apos; periods based on electricity prices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3934"/>
        <source>Generator action:Generator trun on,Generator trun off,NONE.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3935"/>
        <source>Generator trun off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3936"/>
        <source>Generator trun on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3937"/>
        <location filename="../mywidget.cpp" line="4197"/>
        <source>NONE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3938"/>
        <source>Economic mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3984"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3994"/>
        <source>Non adjustable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3994"/>
        <source>Output reactive power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3995"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3999"/>
        <source>Output reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4000"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4005"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4009"/>
        <source>600</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4009"/>
        <source>Constant voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4010"/>
        <source>Enter the advanced settings interface and select the control power mode.Choose constant voltage and modify the voltage value.Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4016"/>
        <source>Constant current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4017"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value.Converter will charge or discharge the battery with this current value.Positive values represent discharging, while negative values represent charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4023"/>
        <source>Output power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4024"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4028"/>
        <source>M_01</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4029"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4036"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4043"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4046"/>
        <source>serial port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4047"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                            The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4051"/>
        <source>serial port 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4052"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4056"/>
        <source>serial port 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4057"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4061"/>
        <source>serial port 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4062"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4066"/>
        <source>serial port 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4067"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4071"/>
        <source>Can port 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4072"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4075"/>
        <source>Can port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4076"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4080"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4081"/>
        <source>Energy Priority: You can choose whether to preferentially use electricity from the grid or battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4087"/>
        <source>Battery Capacity Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4088"/>
        <source>Battery Capacity Alarm: Enable,Disable.It is effective in Grid Expansion mode and is used to prevent over-discharge of the battery.
    When the battery SOC is lower than the &quot;Charge SOC&quot; or &quot;On-Grid DOD&quot;, the system will enter low protection mode for battery capacity. If, at this time, the load still exceeds the set grid capacity value and battery discharge is required, the system will shut down after the battery has been discharging continuously for 3 minutes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4093"/>
        <source>Bms Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4094"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4100"/>
        <source>120</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4100"/>
        <source>EMS Com. Fault Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4101"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4115"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4116"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4120"/>
        <source>Allow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4121"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4125"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4126"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4129"/>
        <source>upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4134"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4134"/>
        <source>Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4135"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4139"/>
        <source>Restore
Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4139"/>
        <source>Restore Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4140"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4148"/>
        <source>ProtocolVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4149"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4153"/>
        <source>restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4154"/>
        <source>Restore the factory default Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4158"/>
        <source>Calculated value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9343"/>
        <location filename="../mywidget.cpp" line="4158"/>
        <source>Battery current feedback type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4159"/>
        <source>The types of battery current feedback include &apos;Calculated Value&apos; and &apos;BMS Value&apos;.
Calculated Value: When the highest cell voltage in the battery reaches the cell protection voltage mi nus the cell protection voltage delta,the inverter will enable linear current limiting to restrict the charging current at that time.
BMS Value: The inverter restricts the charging current based on the charging current limit value uploaded by the BMS.
The default is Calculated Value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9367"/>
        <location filename="../mywidget.cpp" line="4197"/>
        <source>Meter Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4198"/>
        <source>Select the meter model based on the type of meter. Currently available models include: DTSD1352, AMC96E4KC, ADL3000EB, and AMC72_96.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4169"/>
        <location filename="../mywidget.cpp" line="4174"/>
        <source>Follow
battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3655"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, PGS, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI,BGS,HUASU,ALPHA,SHIDING,Freedom.
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3832"/>
        <source>DCAC cell protect voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4169"/>
        <source>Release Prohibited Charging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4170"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4174"/>
        <source>Release Prohibited Discharging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4175"/>
        <source>When the battery SOC is higher than the selected value, there are four options: Follow battery, 5%, 10%, 15%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9351"/>
        <location filename="../mywidget.cpp" line="4179"/>
        <source>Electric Meter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4180"/>
        <source>Electric Meter Anti-Reverse Flow：Enable、Disable.
Enabling prevents system current from flowinginto the grid while Disabling allows systemcurrent to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4187"/>
        <source>User password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4188"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4192"/>
        <source>Maintain password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4193"/>
        <source>Maintain password: Available for resetting the maintain password.(Note: The maintain password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4207"/>
        <source>Power change rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4208"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4211"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4212"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4216"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4217"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4221"/>
        <source>Vol protection upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4222"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4226"/>
        <source>Vol protection lower limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4227"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4231"/>
        <location filename="../mywidget.cpp" line="4236"/>
        <location filename="../mywidget.cpp" line="4240"/>
        <location filename="../mywidget.cpp" line="4251"/>
        <location filename="../mywidget.cpp" line="4292"/>
        <location filename="../mywidget.cpp" line="4297"/>
        <location filename="../mywidget.cpp" line="4302"/>
        <location filename="../mywidget.cpp" line="4344"/>
        <source>prohibit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4232"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4237"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4241"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4252"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4262"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4267"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4271"/>
        <source>Transformer Turns Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4272"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4276"/>
        <source>Output vol level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4277"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4281"/>
        <source>Output Fre grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4282"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4287"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4292"/>
        <source>Pshedding Freq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4293"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4298"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4303"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4308"/>
        <source>Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4309"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4314"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.You can only modify the database to restore the DCAC interface.(Note:As per factory settings, generally not modifiable.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4320"/>
        <source>Module max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4321"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4325"/>
        <source>Module min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4326"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4330"/>
        <source>Grid recovery time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4331"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4336"/>
        <source>DCAC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4340"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4344"/>
        <source>CV parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4345"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4350"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4351"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4352"/>
        <source>Input Dry Contact: nEnabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4359"/>
        <source>DI_1_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4362"/>
        <source>DI_2_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4365"/>
        <source>DI_3_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4368"/>
        <source>DI_4_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4371"/>
        <source>DI_5_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4374"/>
        <source>DI_6_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4379"/>
        <source>DI_1_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4382"/>
        <source>DI_2_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4385"/>
        <source>DI_3_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4388"/>
        <source>DI_4_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4391"/>
        <source>DI_5_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4394"/>
        <source>DI_6_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4400"/>
        <location filename="../mywidget.cpp" line="4412"/>
        <location filename="../mywidget.cpp" line="4415"/>
        <source>Shut down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4400"/>
        <source>DI_1_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4403"/>
        <source>DI_2_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4406"/>
        <source>DI_3_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4409"/>
        <source>DI_4_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4412"/>
        <source>DI_5_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4415"/>
        <source>DI_6_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4437"/>
        <location filename="../mywidget.cpp" line="4636"/>
        <source>Debug memery var 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4441"/>
        <location filename="../mywidget.cpp" line="4640"/>
        <source>Debug memery var 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4445"/>
        <location filename="../mywidget.cpp" line="4644"/>
        <source>Debug memery var 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4461"/>
        <location filename="../mywidget.cpp" line="4623"/>
        <source>INV On off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4466"/>
        <source>Grid A AB Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4470"/>
        <source>Grid B BC Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4474"/>
        <source>Grid C CA Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4478"/>
        <source>Output A Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4482"/>
        <source>Output B Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4486"/>
        <source>Output C Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4490"/>
        <source>Voltage 1.5 revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4494"/>
        <source>Bus Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4502"/>
        <source>INV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4507"/>
        <source>Input Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4511"/>
        <source>Input Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4515"/>
        <source>INV A Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4519"/>
        <source>INV B Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4523"/>
        <source>INV C Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4548"/>
        <source>INV A inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4552"/>
        <source>INV B inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4556"/>
        <source>INV C inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4560"/>
        <location filename="../mywidget.cpp" line="4656"/>
        <source>Bat State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4564"/>
        <location filename="../mywidget.cpp" line="4652"/>
        <source>Bat Infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4572"/>
        <location filename="../mywidget.cpp" line="4631"/>
        <source>parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4627"/>
        <source>INV On off flag2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4662"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4667"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4673"/>
        <source>To view the data for the previous year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4679"/>
        <source>To view the data for the next year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4685"/>
        <source>To view the data of the previous month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4691"/>
        <source>To view the data for the next month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4697"/>
        <source>To view the data of the previous day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4703"/>
        <source>To view the data of the next day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4709"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4714"/>
        <source>OperationLog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4715"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4721"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4727"/>
        <source>Eject U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4732"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4737"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4743"/>
        <location filename="../mywidget.cpp" line="4753"/>
        <source>Turn on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4743"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4748"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4753"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4758"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4764"/>
        <source>Display the current status of the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4769"/>
        <source>DCDC Module State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4769"/>
        <source>Rotate to display the status of each online DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4874"/>
        <source>2/2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4949"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4949"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4961"/>
        <location filename="../mywidget.cpp" line="4972"/>
        <location filename="../mywidget.cpp" line="4982"/>
        <source>System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5016"/>
        <location filename="../mywidget.cpp" line="5032"/>
        <source>MPS Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5042"/>
        <source>    When not logged in, it is not possible to access the system page or view and modify basic settings and advanced settings parameters.
    When logged in as a &quot;User&quot; account, it is possible to switch work modes and modify basic settings parameters related to the work mode. Advanced settings parameters can be viewed but cannot be modified.
    When logged in as a &quot;Maintain&quot; or &quot;Admin&quot; account, it is possible to set both basic settings parameters and advanced settings parameters.
    The default user password is 123456. If there is a need to modify advanced settings parameters, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5066"/>
        <source>Click to enter the selected working mode, go to the working mode parameter settings page, and click the &quot;Save&quot; button in the top-right corner to set the current working mode as the selected and saved working mode.
For example, if the current working mode is &quot;Battery Priority&quot;, select &quot;Optimal Mode&quot;, enter the parameter settings page for the optimal mode, and click the &quot;Save&quot; button in the top-right corner to set the current working mode as &quot;Optimal Mode&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5075"/>
        <source>Select the port to be monitored. The optional port types are: None, RS485/2, RS485/3, RS485/4, RS485/5, RS485/6, CAN 1, CAN 2, Eth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5081"/>
        <source>Begin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5081"/>
        <source>Start/Stop capturing messages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5108"/>
        <source>The message data will be recorded in the root directory of the USB drive in the &apos;PortDate.txt&apos; file.
Please connect a UBS flash drive!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5120"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5130"/>
        <source>Battery power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5131"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5136"/>
        <source>Battery power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5137"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OperMode</name>
    <message>
        <location filename="../OperMode/opermode.ui" line="23"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="108"/>
        <source>System for self-use:
When PV, battery, photovoltaic available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="159"/>
        <source>A. PV gives priority to the load power supply, if the PV power is large enough, the remaining energy is provided to the battery charge, if the PV has remaining energy, the energy is returned to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="209"/>
        <source>B, PV priority to supply the load, if the PV is not enough to power the load, the battery and PV at the same time to power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="259"/>
        <source>C, PV priority to supply the load, if the PV and battery are not enough to supply power to the load, the grid, PV, battery at the same time to supply power to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="279"/>
        <location filename="../OperMode/opermode.ui" line="1291"/>
        <location filename="../OperMode/opermode.ui" line="2444"/>
        <location filename="../OperMode/opermode.ui" line="3498"/>
        <location filename="../OperMode/opermode.ui" line="4321"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="284"/>
        <location filename="../OperMode/opermode.ui" line="1296"/>
        <location filename="../OperMode/opermode.ui" line="2449"/>
        <location filename="../OperMode/opermode.ui" line="3503"/>
        <location filename="../OperMode/opermode.ui" line="4326"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="289"/>
        <location filename="../OperMode/opermode.ui" line="1301"/>
        <location filename="../OperMode/opermode.ui" line="2454"/>
        <location filename="../OperMode/opermode.ui" line="3508"/>
        <location filename="../OperMode/opermode.ui" line="4331"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="294"/>
        <location filename="../OperMode/opermode.ui" line="1306"/>
        <location filename="../OperMode/opermode.ui" line="2459"/>
        <location filename="../OperMode/opermode.ui" line="3513"/>
        <location filename="../OperMode/opermode.ui" line="4336"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="299"/>
        <location filename="../OperMode/opermode.ui" line="1311"/>
        <location filename="../OperMode/opermode.ui" line="2464"/>
        <location filename="../OperMode/opermode.ui" line="3518"/>
        <location filename="../OperMode/opermode.ui" line="4341"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="304"/>
        <location filename="../OperMode/opermode.ui" line="1316"/>
        <location filename="../OperMode/opermode.ui" line="2469"/>
        <location filename="../OperMode/opermode.ui" line="3523"/>
        <location filename="../OperMode/opermode.ui" line="4346"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="309"/>
        <location filename="../OperMode/opermode.ui" line="1321"/>
        <location filename="../OperMode/opermode.ui" line="2474"/>
        <location filename="../OperMode/opermode.ui" line="3528"/>
        <location filename="../OperMode/opermode.ui" line="4351"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="314"/>
        <location filename="../OperMode/opermode.ui" line="1326"/>
        <location filename="../OperMode/opermode.ui" line="2479"/>
        <location filename="../OperMode/opermode.ui" line="3533"/>
        <location filename="../OperMode/opermode.ui" line="4356"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="319"/>
        <location filename="../OperMode/opermode.ui" line="1331"/>
        <location filename="../OperMode/opermode.ui" line="2484"/>
        <location filename="../OperMode/opermode.ui" line="3538"/>
        <location filename="../OperMode/opermode.ui" line="4361"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="324"/>
        <location filename="../OperMode/opermode.ui" line="824"/>
        <location filename="../OperMode/opermode.ui" line="1336"/>
        <location filename="../OperMode/opermode.ui" line="1836"/>
        <location filename="../OperMode/opermode.ui" line="2489"/>
        <location filename="../OperMode/opermode.ui" line="2989"/>
        <location filename="../OperMode/opermode.ui" line="3543"/>
        <location filename="../OperMode/opermode.ui" line="4043"/>
        <location filename="../OperMode/opermode.ui" line="4366"/>
        <location filename="../OperMode/opermode.ui" line="4866"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="329"/>
        <location filename="../OperMode/opermode.ui" line="1341"/>
        <location filename="../OperMode/opermode.ui" line="2494"/>
        <location filename="../OperMode/opermode.ui" line="3548"/>
        <location filename="../OperMode/opermode.ui" line="4371"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="334"/>
        <location filename="../OperMode/opermode.ui" line="1346"/>
        <location filename="../OperMode/opermode.ui" line="2499"/>
        <location filename="../OperMode/opermode.ui" line="3553"/>
        <location filename="../OperMode/opermode.ui" line="4376"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="339"/>
        <location filename="../OperMode/opermode.ui" line="1351"/>
        <location filename="../OperMode/opermode.ui" line="2504"/>
        <location filename="../OperMode/opermode.ui" line="3558"/>
        <location filename="../OperMode/opermode.ui" line="4381"/>
        <source>13</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="344"/>
        <location filename="../OperMode/opermode.ui" line="1356"/>
        <location filename="../OperMode/opermode.ui" line="2509"/>
        <location filename="../OperMode/opermode.ui" line="3563"/>
        <location filename="../OperMode/opermode.ui" line="4386"/>
        <source>14</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="349"/>
        <location filename="../OperMode/opermode.ui" line="1361"/>
        <location filename="../OperMode/opermode.ui" line="2514"/>
        <location filename="../OperMode/opermode.ui" line="3568"/>
        <location filename="../OperMode/opermode.ui" line="4391"/>
        <source>15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="354"/>
        <location filename="../OperMode/opermode.ui" line="1366"/>
        <location filename="../OperMode/opermode.ui" line="2519"/>
        <location filename="../OperMode/opermode.ui" line="3573"/>
        <location filename="../OperMode/opermode.ui" line="4396"/>
        <source>16</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="359"/>
        <location filename="../OperMode/opermode.ui" line="1371"/>
        <location filename="../OperMode/opermode.ui" line="2524"/>
        <location filename="../OperMode/opermode.ui" line="3578"/>
        <location filename="../OperMode/opermode.ui" line="4401"/>
        <source>17</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="364"/>
        <location filename="../OperMode/opermode.ui" line="1376"/>
        <location filename="../OperMode/opermode.ui" line="2529"/>
        <location filename="../OperMode/opermode.ui" line="3583"/>
        <location filename="../OperMode/opermode.ui" line="4406"/>
        <source>18</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="369"/>
        <location filename="../OperMode/opermode.ui" line="1381"/>
        <location filename="../OperMode/opermode.ui" line="2534"/>
        <location filename="../OperMode/opermode.ui" line="3588"/>
        <location filename="../OperMode/opermode.ui" line="4411"/>
        <source>19</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="374"/>
        <location filename="../OperMode/opermode.ui" line="512"/>
        <location filename="../OperMode/opermode.ui" line="1386"/>
        <location filename="../OperMode/opermode.ui" line="1524"/>
        <location filename="../OperMode/opermode.ui" line="2539"/>
        <location filename="../OperMode/opermode.ui" line="2677"/>
        <location filename="../OperMode/opermode.ui" line="3593"/>
        <location filename="../OperMode/opermode.ui" line="3731"/>
        <location filename="../OperMode/opermode.ui" line="4416"/>
        <location filename="../OperMode/opermode.ui" line="4554"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="379"/>
        <location filename="../OperMode/opermode.ui" line="1391"/>
        <location filename="../OperMode/opermode.ui" line="2544"/>
        <location filename="../OperMode/opermode.ui" line="3598"/>
        <location filename="../OperMode/opermode.ui" line="4421"/>
        <source>21</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="384"/>
        <location filename="../OperMode/opermode.ui" line="1396"/>
        <location filename="../OperMode/opermode.ui" line="2549"/>
        <location filename="../OperMode/opermode.ui" line="3603"/>
        <location filename="../OperMode/opermode.ui" line="4426"/>
        <source>22</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="389"/>
        <location filename="../OperMode/opermode.ui" line="1401"/>
        <location filename="../OperMode/opermode.ui" line="2554"/>
        <location filename="../OperMode/opermode.ui" line="3608"/>
        <location filename="../OperMode/opermode.ui" line="4431"/>
        <source>23</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="394"/>
        <location filename="../OperMode/opermode.ui" line="1406"/>
        <location filename="../OperMode/opermode.ui" line="2559"/>
        <location filename="../OperMode/opermode.ui" line="3613"/>
        <location filename="../OperMode/opermode.ui" line="4436"/>
        <source>24</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="399"/>
        <location filename="../OperMode/opermode.ui" line="1411"/>
        <location filename="../OperMode/opermode.ui" line="2564"/>
        <location filename="../OperMode/opermode.ui" line="3618"/>
        <location filename="../OperMode/opermode.ui" line="4441"/>
        <source>25</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="404"/>
        <location filename="../OperMode/opermode.ui" line="1416"/>
        <location filename="../OperMode/opermode.ui" line="2569"/>
        <location filename="../OperMode/opermode.ui" line="3623"/>
        <location filename="../OperMode/opermode.ui" line="4446"/>
        <source>Parameter name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="409"/>
        <location filename="../OperMode/opermode.ui" line="1421"/>
        <location filename="../OperMode/opermode.ui" line="2574"/>
        <location filename="../OperMode/opermode.ui" line="3628"/>
        <location filename="../OperMode/opermode.ui" line="4451"/>
        <source>Parameter description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="414"/>
        <location filename="../OperMode/opermode.ui" line="1426"/>
        <location filename="../OperMode/opermode.ui" line="2579"/>
        <location filename="../OperMode/opermode.ui" line="3633"/>
        <location filename="../OperMode/opermode.ui" line="4456"/>
        <source>Radius</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="419"/>
        <location filename="../OperMode/opermode.ui" line="1431"/>
        <location filename="../OperMode/opermode.ui" line="2584"/>
        <location filename="../OperMode/opermode.ui" line="3638"/>
        <location filename="../OperMode/opermode.ui" line="4461"/>
        <source>Default value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="424"/>
        <location filename="../OperMode/opermode.ui" line="1436"/>
        <location filename="../OperMode/opermode.ui" line="2589"/>
        <location filename="../OperMode/opermode.ui" line="3643"/>
        <location filename="../OperMode/opermode.ui" line="4466"/>
        <location filename="../OperMode/opermode.cpp" line="165"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="432"/>
        <location filename="../OperMode/opermode.ui" line="440"/>
        <location filename="../OperMode/opermode.ui" line="1444"/>
        <location filename="../OperMode/opermode.ui" line="1452"/>
        <location filename="../OperMode/opermode.ui" line="2597"/>
        <location filename="../OperMode/opermode.ui" line="2605"/>
        <location filename="../OperMode/opermode.ui" line="3651"/>
        <location filename="../OperMode/opermode.ui" line="3659"/>
        <location filename="../OperMode/opermode.ui" line="4474"/>
        <location filename="../OperMode/opermode.ui" line="4482"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="448"/>
        <location filename="../OperMode/opermode.ui" line="1460"/>
        <location filename="../OperMode/opermode.ui" line="2613"/>
        <location filename="../OperMode/opermode.ui" line="3667"/>
        <location filename="../OperMode/opermode.ui" line="4490"/>
        <location filename="../OperMode/opermode.cpp" line="166"/>
        <source>BMS Comm.type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="456"/>
        <location filename="../OperMode/opermode.ui" line="1468"/>
        <location filename="../OperMode/opermode.ui" line="2621"/>
        <location filename="../OperMode/opermode.ui" line="3675"/>
        <location filename="../OperMode/opermode.ui" line="4498"/>
        <source>CAN/485</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="464"/>
        <location filename="../OperMode/opermode.ui" line="1476"/>
        <location filename="../OperMode/opermode.ui" line="2629"/>
        <location filename="../OperMode/opermode.ui" line="3683"/>
        <location filename="../OperMode/opermode.ui" line="4506"/>
        <source>CAN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="472"/>
        <location filename="../OperMode/opermode.ui" line="1484"/>
        <location filename="../OperMode/opermode.ui" line="2637"/>
        <location filename="../OperMode/opermode.ui" line="3691"/>
        <location filename="../OperMode/opermode.ui" line="4514"/>
        <location filename="../OperMode/opermode.cpp" line="167"/>
        <source>EMS Comm.type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="480"/>
        <location filename="../OperMode/opermode.ui" line="1492"/>
        <location filename="../OperMode/opermode.ui" line="2645"/>
        <location filename="../OperMode/opermode.ui" line="3699"/>
        <location filename="../OperMode/opermode.ui" line="4522"/>
        <source>485/TCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="488"/>
        <location filename="../OperMode/opermode.ui" line="1500"/>
        <location filename="../OperMode/opermode.ui" line="2653"/>
        <location filename="../OperMode/opermode.ui" line="3707"/>
        <location filename="../OperMode/opermode.ui" line="4530"/>
        <source>485</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="496"/>
        <location filename="../OperMode/opermode.ui" line="1508"/>
        <location filename="../OperMode/opermode.ui" line="2661"/>
        <location filename="../OperMode/opermode.ui" line="3715"/>
        <location filename="../OperMode/opermode.ui" line="4538"/>
        <location filename="../OperMode/opermode.cpp" line="168"/>
        <source>Start charging SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="504"/>
        <location filename="../OperMode/opermode.ui" line="528"/>
        <location filename="../OperMode/opermode.ui" line="1516"/>
        <location filename="../OperMode/opermode.ui" line="1540"/>
        <location filename="../OperMode/opermode.ui" line="2669"/>
        <location filename="../OperMode/opermode.ui" line="2693"/>
        <location filename="../OperMode/opermode.ui" line="3723"/>
        <location filename="../OperMode/opermode.ui" line="3747"/>
        <location filename="../OperMode/opermode.ui" line="4546"/>
        <location filename="../OperMode/opermode.ui" line="4570"/>
        <source>1~100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="520"/>
        <location filename="../OperMode/opermode.ui" line="1532"/>
        <location filename="../OperMode/opermode.ui" line="2685"/>
        <location filename="../OperMode/opermode.ui" line="3739"/>
        <location filename="../OperMode/opermode.ui" line="4562"/>
        <location filename="../OperMode/opermode.cpp" line="169"/>
        <source>Stop charging SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="536"/>
        <location filename="../OperMode/opermode.ui" line="648"/>
        <location filename="../OperMode/opermode.ui" line="696"/>
        <location filename="../OperMode/opermode.ui" line="1660"/>
        <location filename="../OperMode/opermode.ui" line="1708"/>
        <location filename="../OperMode/opermode.ui" line="2813"/>
        <location filename="../OperMode/opermode.ui" line="2861"/>
        <location filename="../OperMode/opermode.ui" line="3867"/>
        <location filename="../OperMode/opermode.ui" line="3915"/>
        <location filename="../OperMode/opermode.ui" line="4690"/>
        <location filename="../OperMode/opermode.ui" line="4738"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="544"/>
        <location filename="../OperMode/opermode.ui" line="1556"/>
        <location filename="../OperMode/opermode.ui" line="2709"/>
        <location filename="../OperMode/opermode.ui" line="3763"/>
        <location filename="../OperMode/opermode.ui" line="4586"/>
        <location filename="../OperMode/opermode.cpp" line="170"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="552"/>
        <location filename="../OperMode/opermode.ui" line="1564"/>
        <location filename="../OperMode/opermode.ui" line="2717"/>
        <location filename="../OperMode/opermode.ui" line="3771"/>
        <location filename="../OperMode/opermode.ui" line="4594"/>
        <source>Bat&gt;Grid、Grid&gt;Bat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="560"/>
        <location filename="../OperMode/opermode.ui" line="1572"/>
        <location filename="../OperMode/opermode.ui" line="2725"/>
        <location filename="../OperMode/opermode.ui" line="3779"/>
        <location filename="../OperMode/opermode.ui" line="4602"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="568"/>
        <location filename="../OperMode/opermode.ui" line="1580"/>
        <location filename="../OperMode/opermode.ui" line="2733"/>
        <location filename="../OperMode/opermode.ui" line="3787"/>
        <location filename="../OperMode/opermode.ui" line="4610"/>
        <location filename="../OperMode/opermode.cpp" line="171"/>
        <source>Grid connected mode of lnv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="576"/>
        <location filename="../OperMode/opermode.ui" line="1588"/>
        <location filename="../OperMode/opermode.ui" line="2741"/>
        <location filename="../OperMode/opermode.ui" line="3795"/>
        <location filename="../OperMode/opermode.ui" line="4618"/>
        <source>Countercurret、Non Countercurret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="584"/>
        <location filename="../OperMode/opermode.ui" line="1596"/>
        <location filename="../OperMode/opermode.ui" line="2749"/>
        <location filename="../OperMode/opermode.ui" line="3803"/>
        <location filename="../OperMode/opermode.ui" line="4626"/>
        <source>Non Countercurret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="592"/>
        <location filename="../OperMode/opermode.ui" line="1604"/>
        <location filename="../OperMode/opermode.ui" line="2757"/>
        <location filename="../OperMode/opermode.ui" line="3811"/>
        <location filename="../OperMode/opermode.ui" line="4634"/>
        <location filename="../OperMode/opermode.cpp" line="172"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="600"/>
        <location filename="../OperMode/opermode.ui" line="1612"/>
        <location filename="../OperMode/opermode.ui" line="2765"/>
        <location filename="../OperMode/opermode.ui" line="3819"/>
        <location filename="../OperMode/opermode.ui" line="4642"/>
        <source>-Rated power~Rated power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="608"/>
        <location filename="../OperMode/opermode.ui" line="1620"/>
        <location filename="../OperMode/opermode.ui" line="2773"/>
        <location filename="../OperMode/opermode.ui" line="3827"/>
        <location filename="../OperMode/opermode.ui" line="4650"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="616"/>
        <location filename="../OperMode/opermode.ui" line="1628"/>
        <location filename="../OperMode/opermode.ui" line="2781"/>
        <location filename="../OperMode/opermode.ui" line="3835"/>
        <location filename="../OperMode/opermode.ui" line="4658"/>
        <location filename="../OperMode/opermode.cpp" line="173"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="624"/>
        <location filename="../OperMode/opermode.ui" line="672"/>
        <location filename="../OperMode/opermode.ui" line="1636"/>
        <location filename="../OperMode/opermode.ui" line="1684"/>
        <location filename="../OperMode/opermode.ui" line="2789"/>
        <location filename="../OperMode/opermode.ui" line="2837"/>
        <location filename="../OperMode/opermode.ui" line="3843"/>
        <location filename="../OperMode/opermode.ui" line="3891"/>
        <location filename="../OperMode/opermode.ui" line="4666"/>
        <location filename="../OperMode/opermode.ui" line="4714"/>
        <source>400~850</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="632"/>
        <location filename="../OperMode/opermode.ui" line="1644"/>
        <location filename="../OperMode/opermode.ui" line="2797"/>
        <location filename="../OperMode/opermode.ui" line="3851"/>
        <location filename="../OperMode/opermode.ui" line="4674"/>
        <source>Battery charging cut-off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="640"/>
        <location filename="../OperMode/opermode.ui" line="1652"/>
        <location filename="../OperMode/opermode.ui" line="2805"/>
        <location filename="../OperMode/opermode.ui" line="3859"/>
        <location filename="../OperMode/opermode.ui" line="4682"/>
        <location filename="../OperMode/opermode.cpp" line="174"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="656"/>
        <location filename="../OperMode/opermode.ui" line="704"/>
        <location filename="../OperMode/opermode.ui" line="1668"/>
        <location filename="../OperMode/opermode.ui" line="1716"/>
        <location filename="../OperMode/opermode.ui" line="2821"/>
        <location filename="../OperMode/opermode.ui" line="2869"/>
        <location filename="../OperMode/opermode.ui" line="3875"/>
        <location filename="../OperMode/opermode.ui" line="3923"/>
        <location filename="../OperMode/opermode.ui" line="4698"/>
        <location filename="../OperMode/opermode.ui" line="4746"/>
        <source>10mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="664"/>
        <location filename="../OperMode/opermode.ui" line="1676"/>
        <location filename="../OperMode/opermode.ui" line="2829"/>
        <location filename="../OperMode/opermode.ui" line="3883"/>
        <location filename="../OperMode/opermode.ui" line="4706"/>
        <location filename="../OperMode/opermode.cpp" line="175"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="680"/>
        <location filename="../OperMode/opermode.ui" line="1692"/>
        <location filename="../OperMode/opermode.ui" line="2845"/>
        <location filename="../OperMode/opermode.ui" line="3899"/>
        <location filename="../OperMode/opermode.ui" line="4722"/>
        <source>Battery discharge cut-off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="688"/>
        <location filename="../OperMode/opermode.ui" line="1700"/>
        <location filename="../OperMode/opermode.ui" line="2853"/>
        <location filename="../OperMode/opermode.ui" line="3907"/>
        <location filename="../OperMode/opermode.ui" line="4730"/>
        <location filename="../OperMode/opermode.cpp" line="176"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="712"/>
        <location filename="../OperMode/opermode.ui" line="1724"/>
        <location filename="../OperMode/opermode.ui" line="2877"/>
        <location filename="../OperMode/opermode.ui" line="3931"/>
        <location filename="../OperMode/opermode.ui" line="4754"/>
        <location filename="../OperMode/opermode.cpp" line="177"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="720"/>
        <location filename="../OperMode/opermode.ui" line="744"/>
        <location filename="../OperMode/opermode.ui" line="1732"/>
        <location filename="../OperMode/opermode.ui" line="1756"/>
        <location filename="../OperMode/opermode.ui" line="2885"/>
        <location filename="../OperMode/opermode.ui" line="2909"/>
        <location filename="../OperMode/opermode.ui" line="3939"/>
        <location filename="../OperMode/opermode.ui" line="3963"/>
        <location filename="../OperMode/opermode.ui" line="4762"/>
        <location filename="../OperMode/opermode.ui" line="4786"/>
        <source>0 ~ 1000</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="728"/>
        <location filename="../OperMode/opermode.ui" line="752"/>
        <location filename="../OperMode/opermode.ui" line="1740"/>
        <location filename="../OperMode/opermode.ui" line="1764"/>
        <location filename="../OperMode/opermode.ui" line="2893"/>
        <location filename="../OperMode/opermode.ui" line="2917"/>
        <location filename="../OperMode/opermode.ui" line="3947"/>
        <location filename="../OperMode/opermode.ui" line="3971"/>
        <location filename="../OperMode/opermode.ui" line="4770"/>
        <location filename="../OperMode/opermode.ui" line="4794"/>
        <source>By battery limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="736"/>
        <location filename="../OperMode/opermode.ui" line="1748"/>
        <location filename="../OperMode/opermode.ui" line="2901"/>
        <location filename="../OperMode/opermode.ui" line="3955"/>
        <location filename="../OperMode/opermode.ui" line="4778"/>
        <location filename="../OperMode/opermode.cpp" line="178"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="760"/>
        <location filename="../OperMode/opermode.ui" line="1772"/>
        <location filename="../OperMode/opermode.ui" line="2925"/>
        <location filename="../OperMode/opermode.ui" line="3979"/>
        <location filename="../OperMode/opermode.ui" line="4802"/>
        <source>DOD_OnGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="768"/>
        <location filename="../OperMode/opermode.ui" line="792"/>
        <location filename="../OperMode/opermode.ui" line="816"/>
        <location filename="../OperMode/opermode.ui" line="840"/>
        <location filename="../OperMode/opermode.ui" line="1780"/>
        <location filename="../OperMode/opermode.ui" line="1804"/>
        <location filename="../OperMode/opermode.ui" line="1828"/>
        <location filename="../OperMode/opermode.ui" line="1852"/>
        <location filename="../OperMode/opermode.ui" line="2933"/>
        <location filename="../OperMode/opermode.ui" line="2957"/>
        <location filename="../OperMode/opermode.ui" line="2981"/>
        <location filename="../OperMode/opermode.ui" line="3005"/>
        <location filename="../OperMode/opermode.ui" line="3987"/>
        <location filename="../OperMode/opermode.ui" line="4011"/>
        <location filename="../OperMode/opermode.ui" line="4035"/>
        <location filename="../OperMode/opermode.ui" line="4059"/>
        <location filename="../OperMode/opermode.ui" line="4810"/>
        <location filename="../OperMode/opermode.ui" line="4834"/>
        <location filename="../OperMode/opermode.ui" line="4858"/>
        <location filename="../OperMode/opermode.ui" line="4882"/>
        <source>1 ~ 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="776"/>
        <location filename="../OperMode/opermode.ui" line="1788"/>
        <location filename="../OperMode/opermode.ui" line="2941"/>
        <location filename="../OperMode/opermode.ui" line="3995"/>
        <location filename="../OperMode/opermode.ui" line="4818"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="784"/>
        <location filename="../OperMode/opermode.ui" line="1796"/>
        <location filename="../OperMode/opermode.ui" line="2949"/>
        <location filename="../OperMode/opermode.ui" line="4003"/>
        <location filename="../OperMode/opermode.ui" line="4826"/>
        <source>DOD_OffGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="800"/>
        <location filename="../OperMode/opermode.ui" line="1812"/>
        <location filename="../OperMode/opermode.ui" line="2965"/>
        <location filename="../OperMode/opermode.ui" line="4019"/>
        <location filename="../OperMode/opermode.ui" line="4842"/>
        <source>90</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="808"/>
        <location filename="../OperMode/opermode.ui" line="1820"/>
        <location filename="../OperMode/opermode.ui" line="2973"/>
        <location filename="../OperMode/opermode.ui" line="4027"/>
        <location filename="../OperMode/opermode.ui" line="4850"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="832"/>
        <location filename="../OperMode/opermode.ui" line="1844"/>
        <location filename="../OperMode/opermode.ui" line="2997"/>
        <location filename="../OperMode/opermode.ui" line="4051"/>
        <location filename="../OperMode/opermode.ui" line="4874"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="848"/>
        <location filename="../OperMode/opermode.ui" line="1860"/>
        <location filename="../OperMode/opermode.ui" line="3013"/>
        <location filename="../OperMode/opermode.ui" line="4067"/>
        <location filename="../OperMode/opermode.ui" line="4890"/>
        <source>95</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="856"/>
        <location filename="../OperMode/opermode.ui" line="1868"/>
        <location filename="../OperMode/opermode.ui" line="3021"/>
        <location filename="../OperMode/opermode.ui" line="4075"/>
        <location filename="../OperMode/opermode.ui" line="4898"/>
        <location filename="../OperMode/opermode.cpp" line="183"/>
        <source>Maximum battery protection value(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="864"/>
        <location filename="../OperMode/opermode.ui" line="1876"/>
        <location filename="../OperMode/opermode.ui" line="3029"/>
        <location filename="../OperMode/opermode.ui" line="4083"/>
        <location filename="../OperMode/opermode.ui" line="4906"/>
        <source>3550 ~ 3650</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="872"/>
        <location filename="../OperMode/opermode.ui" line="1884"/>
        <location filename="../OperMode/opermode.ui" line="3037"/>
        <location filename="../OperMode/opermode.ui" line="4091"/>
        <location filename="../OperMode/opermode.ui" line="4914"/>
        <source>3650</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="880"/>
        <location filename="../OperMode/opermode.ui" line="1892"/>
        <location filename="../OperMode/opermode.ui" line="3045"/>
        <location filename="../OperMode/opermode.ui" line="4099"/>
        <location filename="../OperMode/opermode.ui" line="4922"/>
        <location filename="../OperMode/opermode.cpp" line="184"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="888"/>
        <location filename="../OperMode/opermode.ui" line="912"/>
        <location filename="../OperMode/opermode.ui" line="1900"/>
        <location filename="../OperMode/opermode.ui" line="1924"/>
        <location filename="../OperMode/opermode.ui" line="3053"/>
        <location filename="../OperMode/opermode.ui" line="3077"/>
        <location filename="../OperMode/opermode.ui" line="4107"/>
        <location filename="../OperMode/opermode.ui" line="4131"/>
        <location filename="../OperMode/opermode.ui" line="4930"/>
        <location filename="../OperMode/opermode.ui" line="4954"/>
        <source>the maximum cannot exceed the DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="896"/>
        <location filename="../OperMode/opermode.ui" line="920"/>
        <location filename="../OperMode/opermode.ui" line="944"/>
        <location filename="../OperMode/opermode.ui" line="968"/>
        <location filename="../OperMode/opermode.ui" line="992"/>
        <location filename="../OperMode/opermode.ui" line="1016"/>
        <location filename="../OperMode/opermode.ui" line="1908"/>
        <location filename="../OperMode/opermode.ui" line="1932"/>
        <location filename="../OperMode/opermode.ui" line="1956"/>
        <location filename="../OperMode/opermode.ui" line="1980"/>
        <location filename="../OperMode/opermode.ui" line="2004"/>
        <location filename="../OperMode/opermode.ui" line="2028"/>
        <location filename="../OperMode/opermode.ui" line="3061"/>
        <location filename="../OperMode/opermode.ui" line="3085"/>
        <location filename="../OperMode/opermode.ui" line="3109"/>
        <location filename="../OperMode/opermode.ui" line="3133"/>
        <location filename="../OperMode/opermode.ui" line="3157"/>
        <location filename="../OperMode/opermode.ui" line="3181"/>
        <location filename="../OperMode/opermode.ui" line="4115"/>
        <location filename="../OperMode/opermode.ui" line="4139"/>
        <location filename="../OperMode/opermode.ui" line="4163"/>
        <location filename="../OperMode/opermode.ui" line="4187"/>
        <location filename="../OperMode/opermode.ui" line="4211"/>
        <location filename="../OperMode/opermode.ui" line="4235"/>
        <location filename="../OperMode/opermode.ui" line="4938"/>
        <location filename="../OperMode/opermode.ui" line="4962"/>
        <location filename="../OperMode/opermode.ui" line="4986"/>
        <location filename="../OperMode/opermode.ui" line="5010"/>
        <location filename="../OperMode/opermode.ui" line="5034"/>
        <location filename="../OperMode/opermode.ui" line="5058"/>
        <source>Set according to customer requirements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="904"/>
        <location filename="../OperMode/opermode.ui" line="1916"/>
        <location filename="../OperMode/opermode.ui" line="3069"/>
        <location filename="../OperMode/opermode.ui" line="4123"/>
        <location filename="../OperMode/opermode.ui" line="4946"/>
        <location filename="../OperMode/opermode.cpp" line="185"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="928"/>
        <location filename="../OperMode/opermode.ui" line="1940"/>
        <location filename="../OperMode/opermode.ui" line="3093"/>
        <location filename="../OperMode/opermode.ui" line="4147"/>
        <location filename="../OperMode/opermode.ui" line="4970"/>
        <location filename="../OperMode/opermode.cpp" line="186"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="936"/>
        <location filename="../OperMode/opermode.ui" line="960"/>
        <location filename="../OperMode/opermode.ui" line="984"/>
        <location filename="../OperMode/opermode.ui" line="1008"/>
        <location filename="../OperMode/opermode.ui" line="1948"/>
        <location filename="../OperMode/opermode.ui" line="1972"/>
        <location filename="../OperMode/opermode.ui" line="1996"/>
        <location filename="../OperMode/opermode.ui" line="2020"/>
        <location filename="../OperMode/opermode.ui" line="3101"/>
        <location filename="../OperMode/opermode.ui" line="3125"/>
        <location filename="../OperMode/opermode.ui" line="3149"/>
        <location filename="../OperMode/opermode.ui" line="3173"/>
        <location filename="../OperMode/opermode.ui" line="4155"/>
        <location filename="../OperMode/opermode.ui" line="4179"/>
        <location filename="../OperMode/opermode.ui" line="4203"/>
        <location filename="../OperMode/opermode.ui" line="4227"/>
        <location filename="../OperMode/opermode.ui" line="4978"/>
        <location filename="../OperMode/opermode.ui" line="5002"/>
        <location filename="../OperMode/opermode.ui" line="5026"/>
        <location filename="../OperMode/opermode.ui" line="5050"/>
        <source>the maximum cannot exceed the machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="952"/>
        <location filename="../OperMode/opermode.ui" line="1964"/>
        <location filename="../OperMode/opermode.ui" line="3117"/>
        <location filename="../OperMode/opermode.ui" line="4171"/>
        <location filename="../OperMode/opermode.ui" line="4994"/>
        <location filename="../OperMode/opermode.cpp" line="187"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="976"/>
        <location filename="../OperMode/opermode.ui" line="1988"/>
        <location filename="../OperMode/opermode.ui" line="3141"/>
        <location filename="../OperMode/opermode.ui" line="4195"/>
        <location filename="../OperMode/opermode.ui" line="5018"/>
        <location filename="../OperMode/opermode.cpp" line="188"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1000"/>
        <location filename="../OperMode/opermode.ui" line="2012"/>
        <location filename="../OperMode/opermode.ui" line="3165"/>
        <location filename="../OperMode/opermode.ui" line="4219"/>
        <location filename="../OperMode/opermode.ui" line="5042"/>
        <location filename="../OperMode/opermode.cpp" line="189"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1085"/>
        <source>Battery priority: 
	When PV, battery, photovoltaic is available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1130"/>
        <source>(1)A, PV priority to charge the battery, excess energy to the load, if there is excess energy back to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1180"/>
        <source>B, PV energy is given priority to battery charging, excess energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1230"/>
        <source>B, when PV is not enough to supply the battery and load, the grid provides the load with surplus energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1274"/>
        <source>(2) When the grid battery is available: A, the grid charges the battery and provides energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1548"/>
        <location filename="../OperMode/opermode.ui" line="2701"/>
        <location filename="../OperMode/opermode.ui" line="3755"/>
        <location filename="../OperMode/opermode.ui" line="4578"/>
        <source>50</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2099"/>
        <source>1, when the battery, PV, grid is available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2149"/>
        <source>A. When the PV is large enough, the PV charges the battery and supplies the load at the same time, and if there is any surplus, it is returned to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2199"/>
        <source>B. When PV is insufficient, PV charges the battery and supplies power to the load at the same time, and the grid supplements the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2249"/>
        <source>C. When PV is insufficient and the load power is less than the power set value on the AC side, the AC side supplies the load, the remaining available power on the AC side will charge the battery, and the PV will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2299"/>
        <source>D, when the PV is insufficient, the load power is greater than the AC power, the AC power is available to power the load, and the PV makes up the remaining power to the load, if the PV is insufficient, the battery adds the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2326"/>
        <source>2, when the battery, the grid is available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2376"/>
        <source>A. When the load power is less than the power set value on the AC side, the AC side supplies the load, and the remaining available power on the AC side will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2425"/>
        <source>B. When the load power is greater than the AC power, the available power on the AC side will supply power to the load and supplement the remaining energy with the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3246"/>
        <source>Battery zoning:   
    Areas where ECP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FCP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.

    Areas where EDP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FDP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3290"/>
        <source>Chaifa startup logic (for all modes) :
    The display starts to enter the firewood control logic 4 minutes after the start of the display screen. 
    If the DCAC is not running, the diesel generator will be started if the power grid fails, and the diesel generator will be shut down when the power grid recovers. 
    If the DCAC is running, the SOC will be started/SOC will be stopped to control the diesel power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3360"/>
        <source>Enable the time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3381"/>
        <source>Select &quot;Peak&quot;, &quot;Valley&quot; or &quot;Flat&quot; according to the grid tariff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3402"/>
        <source>The time to start the autorun.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3423"/>
        <source>The time to end the autorun.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3444"/>
        <source>Functions performed in the current time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3465"/>
        <source>The power value of the execution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3483"/>
        <source>The action performed by the generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="4261"/>
        <source>The &quot;Mixed Mode&quot; primarily offers the following functionalities:
1. Economic mode:
   a. Peak: Performs &quot;Self-use&quot; mode. The load is energized by the battery.
   b. Fair: Performs &quot;Self-use&quot; mode. Energy is supplied to the load from the grid.
   c. Valley: Performs &quot;Battery priority&quot; mode. The grid charges the battery and provides energy to the load.
2. peak shaving: according to the set power value (positive discharge, negative charge) to decide the battery charging or discharging.
Next, you can decide whether or not to turn on the generator based on the selected &quot;Generator Action&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="4303"/>
        <source>The &quot;Manual Mode&quot; has no operational logic and allows for the manual control of battery charging and discharging. This mode is applicable in the following scenarios:
1、Battery charge and discharge testing.
2、Energy Management System (EMS) scheduling of the MPS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5111"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5157"/>
        <source>Battery
Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5198"/>
        <source>Self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5238"/>
        <source>Batter
Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5288"/>
        <source>Optimal
Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5329"/>
        <source>Mixde
Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="5370"/>
        <source>Manual
Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="154"/>
        <source>Click to view</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="155"/>
        <location filename="../OperMode/opermode.cpp" line="195"/>
        <location filename="../OperMode/opermode.cpp" line="198"/>
        <source>Invalid in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="156"/>
        <source>In this mode, the charging power of the AC side is limited.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="157"/>
        <source>Protection is not triggered in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="158"/>
        <source>If the SOC is lower than this value, it is in the empty zone and FCP is executed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="159"/>
        <source>Disarm FCP point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="160"/>
        <source>Control battery does not discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="161"/>
        <source>After DOD is triggered in this mode, it is not triggered in grid-connected mode and is shut down in off-network mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="162"/>
        <source>In this mode, positive discharge and negative charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="163"/>
        <source>The functionality changes based on the mode selected in the &quot;Mixed Mode&quot; runtime schedule.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="179"/>
        <source>DOD OnGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="180"/>
        <source>DOD OffGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="181"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="182"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="191"/>
        <source>Currently, only lithium batteries are supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="192"/>
        <source>Set the communication mode with the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="193"/>
        <source>This section describes how to set the communication mode with the EMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="194"/>
        <source>In this mode, if the SOC is smaller than the &quot;Start charging SOC&quot;, the AC test provides a small power to maintain the &quot;Start charging SOC&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="196"/>
        <source>In this mode, you can choose whether to preferentially use electricity from the grid or battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="197"/>
        <source>In this mode, you can choose whether to reverse the flow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="199"/>
        <source>Battery charging voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="200"/>
        <source>Battery charge voltage back almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="201"/>
        <source>Battery discharge voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="202"/>
        <source>Battery discharge voltage back to almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="203"/>
        <source>Limit the battery charging current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="204"/>
        <source>Limit the battery discharge current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="205"/>
        <source>The AC test provides a small power to maintain the &quot;Start charging SOC&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="206"/>
        <source>When in an off-Grid state, off-Grid DOD Protection will be triggered and a shutdown action will be executed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="207"/>
        <source>When SOC is less than or equal to Chaifa, start Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="208"/>
        <source>When SOC is greater than or equal to Chaifa, turn off Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="209"/>
        <source>Limit the maximum voltage of the battery charging cell.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="210"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="211"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="212"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="213"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="214"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="215"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Specification</name>
    <message>
        <location filename="../Specification/Specification.cpp" line="51"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SpecificationData</name>
    <message>
        <location filename="../SpecificationData/specificationdata.cpp" line="37"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpgradeTools</name>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="14"/>
        <source>UpgradeTools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="46"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="69"/>
        <source>MPS Upgrade app V2.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="105"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="508"/>
        <source> Message:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="135"/>
        <source> Mounting finished 
 File checked ok 
 Monitor Upadate file not exited 
 DCAC Upadate file ready 
 DCDC Upadate file not exited 
 Start copying...

 DCAC_Update.hex 
 UPDATE_BEGIN 
 Unknown signal received 
 Unknown signal received 
 Unknown signal received 
 ERASE GOING 
 ERASE GOING 
 BLOCK_DATATRANS_END
 BLOCK_CHECKSUM_OK 
 BLOCK_CHECKSUM_OK
 BLOCK_HEAD_OK
 BLOCK_CHECKSUM_OK
 BLOCK_DATATRANS_END
 BLOCK_HEAD_OK 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="177"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="444"/>
        <source>Module number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="277"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="667"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="69"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="91"/>
        <source>Monitor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="298"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="688"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="73"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="95"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="319"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="709"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="77"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="99"/>
        <source>Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="342"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="82"/>
        <source>Apply and restart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="397"/>
        <source>PCS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="420"/>
        <source>PCS Upgrade Tools V2.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="538"/>
        <source> Mounting finished 
 File checked ok 
 Monitor.hex not exited
 DSPUpadate ok
 Start copying...
 
 DSPUpdate.hex
 UPDATE_BEGIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="572"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="118"/>
        <source>Monitor.hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="593"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="122"/>
        <source>DSPUpdate.hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="618"/>
        <source>Baud rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="642"/>
        <source>500k</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="753"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="109"/>
        <source>Restart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="233"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="59"/>
        <source>DCDC Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="254"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="64"/>
        <source>DCAC Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="732"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="103"/>
        <source>DSP Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="60"/>
        <source>DCDC Upgrade: Insert a u disk and check for the presence of the DCDC upgrade program &apos;DCDC_Update.hex&apos;. Click on DCDC, and then upgrade the corresponding DCDC module according to the selected module number above.                                
(Note: Before upgrading the DCDC, ensure that the ship mode switch on the DCDC module is set to the OFF position.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="61"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="66"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="70"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="88"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="105"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="119"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="65"/>
        <source>DCAC Upgrade: Insert the u disk and check if there is a DCAC upgrade program called &apos;DCAC_Update.hex&apos;. Click to upgrade the DCAC.                                
(Note: Press the EPO button before upgrading.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="70"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <source>After inserting the u disk and checking that there is a Monitor upgrade program &apos;Monitor.hex&apos;, click to upgrade the monitor program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <source>Backup: Click to backup the current program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <source>Restore: Restore to the most recent backup program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Click to restart.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="87"/>
        <source>Baud Rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="88"/>
        <source>Baud Rate: Default is 500k and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="104"/>
        <source>DSP Upgrade: Insert the u disk and check if there is a DSP upgrade program called &apos;DSPUpdate.hex&apos;. Click to upgrade the DSP.                                
(Note: Press the EPO button before upgrading.))</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Previous Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="119"/>
        <source>This is the name of the monitoring upgrade program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <source>This is the DSP upgrade program name.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
