$wnd.gwtmaterialdemo.runAsyncCallback29("function $setShowOn(this$static, showOn){\n  $setCssName((!this$static.showOnMixin && (this$static.showOnMixin = new CssNameMixin(this$static)) , this$static.showOnMixin), showOn);\n}\n\nfunction $clinit_ShowOn(){\n  $clinit_ShowOn = emptyMethod;\n  SHOW_ON_SMALL = new ShowOn('SHOW_ON_SMALL', 0, 'show-on-small');\n  SHOW_ON_LARGE = new ShowOn('SHOW_ON_LARGE', 1, 'show-on-large');\n  SHOW_ON_MED = new ShowOn('SHOW_ON_MED', 2, 'show-on-med');\n  SHOW_ON_MED_UP = new ShowOn('SHOW_ON_MED_UP', 3, 'show-on-medium-and-up');\n  SHOW_ON_MED_DOWN = new ShowOn('SHOW_ON_MED_DOWN', 4, 'hide-on-med-and-up');\n}\n\nfunction ShowOn(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_45(){\n  $clinit_ShowOn();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_ShowOn_2_classLit, 1), $intern_5, 189, 0, [SHOW_ON_SMALL, SHOW_ON_LARGE, SHOW_ON_MED, SHOW_ON_MED_UP, SHOW_ON_MED_DOWN]);\n}\n\ndefineClass(189, 19, {33:1, 125:1, 189:1, 103:1, 8:1, 29:1, 19:1}, ShowOn);\n_.getCssName = function getCssName_83(){\n  return this.cssClass;\n}\n;\nvar SHOW_ON_LARGE, SHOW_ON_MED, SHOW_ON_MED_DOWN, SHOW_ON_MED_UP, SHOW_ON_SMALL;\nvar Lgwt_material_design_client_constants_ShowOn_2_classLit = createForEnum('gwt.material.design.client.constants', 'ShowOn', 189, values_45);\nfunction HelperPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(601, 56, $intern_38, HelperPresenter);\n_.onReveal = function onReveal_38(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Helper', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperPresenter', 601);\nfunction HelperView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_22(new HelperView_BinderImpl$Widgets));\n}\n\ndefineClass(779, 59, $intern_39, HelperView);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView', 779);\nfunction HelperView_BinderImpl(){\n}\n\ndefineClass(1070, 1, {}, HelperView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl', 1070);\nfunction $build_f_HTMLPanel1_22(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialPanel3, f_PrettyPre5, f_MaterialTitle6, f_MaterialPanel7, f_MaterialPanel9, f_MaterialPanel11, f_PrettyPre13, f_MaterialTitle14, f_PrettyPre15, f_MaterialTitle16, f_PrettyPre17, f_MaterialTitle18, f_PrettyPre19, f_MaterialTitle20, f_MaterialTitle21, f_MaterialPanel22, f_PrettyPre24, f_MaterialLabel4, sb, f_MaterialLabel8, f_MaterialLabel10, f_MaterialLabel12, sb_0, sb_1, sb_2, sb_3, f_MaterialLabel23, sb_4;\n  f_HTMLPanel1 = new HTMLPanel($html7_4(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16, this$static.domId17).html);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  $get_0(this$static.domId17Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Alignment') , $setText_5(f_MaterialTitle2.paragraph, 'Vertical Align - You can easily vertically center things by adding the class valign-wrapper to the container holding the items you want to vertically align.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialPanel3 = new MaterialPanel , $add_12(f_MaterialPanel3, (f_MaterialLabel4 = new MaterialLabel , setStyleName(f_MaterialLabel4.element, 'valign', true) , setStyleName(f_MaterialLabel4.element, 'center', true) , $setInnerHTML(f_MaterialLabel4.element, 'This should be vertically aligned') , $setFontSize_0(f_MaterialLabel4.fontSizeMixin, '2em') , f_MaterialLabel4)) , setStyleName(f_MaterialPanel3.element, 'valign-wrapper', true) , setStyleName(f_MaterialPanel3.element, 'HMPMMUB-s-b', true) , f_MaterialPanel3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML(f_PrettyPre5, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialPanel addStyleNames=\"valign-wrapper {style.panel}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"valign center {style.title}\" text=\"This should be vertically aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle6 = new MaterialTitle , $setText_5(f_MaterialTitle6.paragraph, \"Text Align - These classes are for horizontally aligning content. Just add textAlign='CENTER, LEFT OR RIGHT' to any material widget\") , f_MaterialTitle6), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialPanel7 = new MaterialPanel , $add_12(f_MaterialPanel7, (f_MaterialLabel8 = new MaterialLabel , $setInnerHTML(f_MaterialLabel8.element, 'This should be left aligned') , $setFontSize_0(f_MaterialLabel8.fontSizeMixin, '1.5em') , f_MaterialLabel8)) , setStyleName(f_MaterialPanel7.element, 'HMPMMUB-s-a', true) , $setTextAlign(f_MaterialPanel7, ($clinit_TextAlign() , LEFT_6)) , f_MaterialPanel7), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialPanel9 = new MaterialPanel , $add_12(f_MaterialPanel9, (f_MaterialLabel10 = new MaterialLabel , $setInnerHTML(f_MaterialLabel10.element, 'This should be center aligned') , $setFontSize_0(f_MaterialLabel10.fontSizeMixin, '1.5em') , f_MaterialLabel10)) , setStyleName(f_MaterialPanel9.element, 'HMPMMUB-s-a', true) , $setTextAlign(f_MaterialPanel9, CENTER_4) , f_MaterialPanel9), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialPanel11 = new MaterialPanel , $add_12(f_MaterialPanel11, (f_MaterialLabel12 = new MaterialLabel , $setInnerHTML(f_MaterialLabel12.element, 'This should be right aligned') , $setFontSize_0(f_MaterialLabel12.fontSizeMixin, '1.5em') , f_MaterialLabel12)) , setStyleName(f_MaterialPanel11.element, 'HMPMMUB-s-a', true) , $setTextAlign(f_MaterialPanel11, RIGHT_7) , f_MaterialPanel11), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre13 = new PrettyPre , $setHTML(f_PrettyPre13, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialTitle description=\"Text Align - These classes are for horizontally aligning content. We have .left-align, .right-align and .center-align\"/&gt;<br> &lt;m:MaterialPanel textAlign=\"LEFT\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be left aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br><br> &lt;m:MaterialPanel textAlign=\"CENTER\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be center aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br><br> &lt;m:MaterialPanel textAlign=\"RIGHT\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be right aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre13.element, 'lang-xml', true) , setStyleName(f_PrettyPre13.element, 'z-depth-1', true) , f_PrettyPre13), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle14 = new MaterialTitle , $setInnerHTML(f_MaterialTitle14.header.element, 'Float') , $setText_5(f_MaterialTitle14.paragraph, \"Quick Floats - Quickly float things by adding float='RIGHT , LEFT, or NONE' to any material components.\") , f_MaterialTitle14), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre15 = new PrettyPre , $setHTML(f_PrettyPre15, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialPanel float=\"LEFT\"/&gt; &lt;m:MaterialPanel float=\"RIGHT\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre15.element, 'lang-xml', true) , setStyleName(f_PrettyPre15.element, 'z-depth-1', true) , f_PrettyPre15), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML(f_MaterialTitle16.header.element, 'hideOn') , $setText_5(f_MaterialTitle16.paragraph, \"We provide easy to use classes to hide content on specific screen sizes. Just add hideOn='HIDE_ON_SMALL...' to any material components;\") , f_MaterialTitle16), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre17 = new PrettyPre , $setHTML(f_PrettyPre17, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialPanel hideOn=\"HIDE_ON_LARGE\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre17.element, 'lang-xml', true) , setStyleName(f_PrettyPre17.element, 'z-depth-1', true) , f_PrettyPre17), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle18 = new MaterialTitle , $setInnerHTML(f_MaterialTitle18.header.element, 'showOn') , $setText_5(f_MaterialTitle18.paragraph, \"We provide easy to use classes to show content on specific screen sizes. Just add showOn='SHOW_ON_LARGE...' to any material components;\") , $setShowOn(f_MaterialTitle18, ($clinit_ShowOn() , SHOW_ON_LARGE)) , f_MaterialTitle18), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre19 = new PrettyPre , $setHTML(f_PrettyPre19, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialPanel showOn=\"SHOW_ON_MED_DOWN\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre19.element, 'lang-xml', true) , setStyleName(f_PrettyPre19.element, 'z-depth-1', true) , f_PrettyPre19), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML(f_MaterialTitle20.header.element, 'Formatting') , $setText_5(f_MaterialTitle20.paragraph, 'These classes help format various content on your site.') , f_MaterialTitle20), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle21 = new MaterialTitle , $setText_5(f_MaterialTitle21.paragraph, 'Truncation - To truncate long lines of text in an ellipsis, add the class truncate to the tag which contains the text. See an exaple below of a header being truncated inside a card.') , f_MaterialTitle21), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialPanel22 = new MaterialPanel , $add_12(f_MaterialPanel22, (f_MaterialLabel23 = new MaterialLabel , setStyleName(f_MaterialLabel23.element, 'truncate', true) , $setInnerHTML(f_MaterialLabel23.element, 'This is an extremely long title that will be truncated') , $setFontSize_0(f_MaterialLabel23.fontSizeMixin, '2.5em') , f_MaterialLabel23)) , setStyleName(f_MaterialPanel22.element, 'HMPMMUB-s-d', true) , $setShadow((!f_MaterialPanel22.shadowMixin && (f_MaterialPanel22.shadowMixin = new ShadowMixin(f_MaterialPanel22)) , f_MaterialPanel22.shadowMixin), 1) , f_MaterialPanel22), $get_0(this$static.domId16Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre24 = new PrettyPre , $setHTML(f_PrettyPre24, (sb_4 = new StringBuilder , sb_4.string += '\\u2003&lt;m:MaterialPanel shadow=\"1\"&gt; &lt;m:MaterialLabel text=\"This is an extremely long title that will be truncated\" addStyleNames=\"truncate\" fontSize=\"2.5em\"/&gt; &lt;/m:MaterialPanel&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , setStyleName(f_PrettyPre24.element, 'lang-xml', true) , setStyleName(f_PrettyPre24.element, 'z-depth-1', true) , f_PrettyPre24), $get_0(this$static.domId17Element));\n  return f_HTMLPanel1;\n}\n\nfunction HelperView_BinderImpl$Widgets(){\n  this.style_0 = (new HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_18);\n  $ensureInjected_23(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId17Element = new LazyDomElement(this.domId17);\n}\n\ndefineClass(1071, 1, {}, HelperView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl/Widgets', 1071);\nfunction HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1327, 1, {}, HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_18;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1327);\nfunction $ensureInjected_23(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.HMPMMUB-s-b{height:200px;background:#e9e9e9}.HMPMMUB-s-c{width:100%}.HMPMMUB-s-a{height:auto;margin-top:10px;background:#e9e9e9}.HMPMMUB-s-d{width:50%;padding:10px}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1328, 1, {}, HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_31(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1328);\nfunction $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_18 = new HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html7_4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <table class='striped'> <thead> <tr> <th><\\/th> <th>Screen Range<\\/th> <\\/tr> <\\/thead> <tbody> <tr> <td><code class='language-markup'>HIDE_ON_SMALL<\\/code><\\/td> <td>Hidden for Mobile Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_SMALL_DOWN<\\/code><\\/td> <td>Hidden for Mobile Only and Below<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED<\\/code><\\/td> <td>Hidden for Tablet Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED_DOWN<\\/code><\\/td> <td>Hidden for Tablet and Below<\\/td>  <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED_UP<\\/code><\\/td> <td>Hidden for Tablet and Above<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_LARGE<\\/code><\\/td> <td>Hidden for Desktop Only<\\/td> <\\/tr> <\\/tbody> <\\/table> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <table class='striped'> <thead> <tr> <th><\\/th> <th>Screen Range<\\/th> <\\/tr> <\\/thead> <tbody> <tr> <td><code class='language-markup'>SHOW_ON_SMALL<\\/code><\\/td> <td>Shown for Mobile Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_LARGE<\\/code><\\/td> <td>Shown for Large Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED<\\/code><\\/td> <td>Shown for Tablet Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED_UP<\\/code><\\/td> <td>Shown for Tablet and Above<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED_DOWN<\\/code><\\/td> <td>Shown for Tablet and Below<\\/td> <\\/tr> <\\/tbody> <\\/table> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg17));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$) {\n    result = new HelperPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$) {\n    result = new HelperView(new HelperView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$;\n}\n\ndefineClass(547, 1, $intern_58);\n_.onSuccess_0 = function onSuccess_28(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(29);\n\n//# sourceURL=gwtmaterialdemo-29.js\n")
