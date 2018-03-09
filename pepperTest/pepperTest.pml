<?xml version="1.0" encoding="UTF-8" ?>
<Package name="pepperTest" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="test" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="test1" src="test1/test1.dlg" />
    </Dialogs>
    <Resources>
        <File name="swiftswords_ext" src="behavior_1/swiftswords_ext.mp3" />
        <File name="taichimove" src="behavior_1/taichimove.pmt" />
        <File name="index" src="html/index.html" />
        <File name="style" src="html/css/style.css" />
        <File name="jquery-3.3.1.min" src="html/js/jquery-3.3.1.min.js" />
        <File name="myApp" src="html/js/myApp.js" />
        <File name="vue" src="html/js/vue.js" />
        <File name="temp-menu" src="html/template/temp-menu.html" />
        <File name="test" src="test.py" />
        <File name="D.min" src="html/js/D.min.js" />
        <File name="data" src="html/data.json" />
        <File name="testApp" src="html/js/testApp.js" />
        <File name="swiftswords_ext" src="test/swiftswords_ext.mp3" />
        <File name="taichimove" src="test/taichimove.pmt" />
    </Resources>
    <Topics>
        <Topic name="test1_mnc" src="test1/test1_mnc.top" topicName="test1" language="zh_CN" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="zh_CN">
        <Translation name="translation_zh_CN" src="translations/translation_zh_CN.ts" language="zh_CN" />
    </Translations>
</Package>
