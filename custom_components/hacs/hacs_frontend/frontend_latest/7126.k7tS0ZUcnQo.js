export const id=7126;export const ids=[7126];export const modules={77126:(o,r,a)=>{a.r(r),a.d(r,{EditorState:()=>l.$t,EditorView:()=>n.Lz,autocompletion:()=>m.yU,crosshairCursor:()=>n.HJ,defaultKeymap:()=>e.pw,drawSelection:()=>n.VH,haSyntaxHighlighting:()=>h,haTheme:()=>u,highlightActiveLine:()=>n.dz,highlightSelectionMatches:()=>p.gN,highlightingFor:()=>t.GY,history:()=>e.b6,historyKeymap:()=>e.cL,keymap:()=>n.w4,langCompartment:()=>s,langs:()=>g,lineNumbers:()=>n.$K,linewrapCompartment:()=>v,readonlyCompartment:()=>x,rectangularSelection:()=>n.D4,searchKeymap:()=>p.Eo,tabKeyBindings:()=>b,tags:()=>d._A});var e=a(35842),t=a(83782),c=a(12764),i=a(68297),l=a(71070),n=a(37934),d=a(76083),m=a(30829),p=a(31804);const g={jinja2:t.Tg.define(c.n),yaml:t.Tg.define(i.o)},s=new l.xx,x=new l.xx,v=new l.xx,b=[{key:"Tab",run:e.UY},{key:"Shift-Tab",run:e.Mg}],u=n.Lz.theme({"&":{color:"var(--primary-text-color)",backgroundColor:"var(--code-editor-background-color, var(--mdc-text-field-fill-color, whitesmoke))",borderRadius:"var(--mdc-shape-small, 4px) var(--mdc-shape-small, 4px) 0px 0px",caretColor:"var(--secondary-text-color)",height:"var(--code-mirror-height, auto)",maxHeight:"var(--code-mirror-max-height, unset)"},"&.cm-editor.cm-focused":{outline:"none"},"&.cm-focused .cm-cursor":{borderLeftColor:"var(--secondary-text-color)"},".cm-selectionBackground, ::selection":{backgroundColor:"rgba(var(--rgb-primary-color), 0.1)"},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(var(--rgb-primary-color), 0.2)"},".cm-activeLine":{backgroundColor:"rgba(var(--rgb-secondary-text-color), 0.1)"},".cm-scroller":{outline:"none"},".cm-content":{caretColor:"var(--secondary-text-color)",paddingTop:"16px",paddingBottom:"16px"},".cm-panels":{backgroundColor:"var(--primary-background-color)",color:"var(--primary-text-color)"},".cm-panels.top":{borderBottom:"1px solid var(--divider-color)"},".cm-panels.bottom":{borderTop:"1px solid var(--divider-color)"},".cm-button":{border:"1px solid var(--primary-color)",padding:"0px 16px",textTransform:"uppercase",margin:"4px",background:"none",color:"var(--primary-color)",fontFamily:"var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif))",fontSize:"var(--mdc-typography-button-font-size, 0.875rem)",height:"36px",fontWeight:"var(--mdc-typography-button-font-weight, 500)",borderRadius:"4px",letterSpacing:"var(--mdc-typography-button-letter-spacing, 0.0892857em)"},".cm-textfield":{padding:"4px 0px 5px",borderRadius:"0",fontSize:"16px",color:"var(--primary-text-color)",border:"0",background:"none",fontFamily:"Roboto",borderBottom:"1px solid var(--secondary-text-color)",margin:"4px 4px 0","& ::placeholder":{color:"var(--secondary-text-color)"},"&:focus":{outline:"none",borderBottom:"2px solid var(--primary-color)",paddingBottom:"4px"}},".cm-tooltip":{color:"var(--primary-text-color)",backgroundColor:"var(--code-editor-background-color, var(--card-background-color))",border:"1px solid var(--divider-color)",borderRadius:"var(--mdc-shape-medium, 4px)",boxShadow:"0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"},"& .cm-tooltip.cm-tooltip-autocomplete > ul > li":{padding:"4px 8px"},"& .cm-tooltip-autocomplete ul li[aria-selected]":{background:"var(--primary-color)",color:"var(--text-primary-color)"},".cm-completionIcon":{display:"none"},".cm-completionDetail":{fontFamily:"Roboto",color:"var(--secondary-text-color)"},"li[aria-selected] .cm-completionDetail":{color:"var(--text-primary-color)"},"& .cm-completionInfo.cm-completionInfo-right":{left:"calc(100% + 4px)"},"& .cm-tooltip.cm-completionInfo":{padding:"4px 8px",marginTop:"-5px"},".cm-selectionMatch":{backgroundColor:"rgba(var(--rgb-primary-color), 0.1)"},".cm-searchMatch":{backgroundColor:"rgba(var(--rgb-accent-color), .2)",outline:"1px solid rgba(var(--rgb-accent-color), .4)"},".cm-searchMatch.selected":{backgroundColor:"rgba(var(--rgb-accent-color), .4)",outline:"1px solid var(--accent-color)"},".cm-gutters":{backgroundColor:"var(--code-editor-gutter-color, var(--secondary-background-color, whitesmoke))",color:"var(--paper-dialog-color, var(--secondary-text-color))",border:"none",borderRight:"1px solid var(--secondary-text-color)",paddingRight:"1px"},"&.cm-focused .cm-gutters":{borderRight:"2px solid var(--primary-color)",paddingRight:"0"},".cm-gutterElement.lineNumber":{color:"inherit"}}),y=t.cr.define([{tag:d._A.keyword,color:"var(--codemirror-keyword, #6262FF)"},{tag:[d._A.name,d._A.deleted,d._A.character,d._A.propertyName,d._A.macroName],color:"var(--codemirror-property, #905)"},{tag:[d._A.function(d._A.variableName),d._A.labelName],color:"var(--codemirror-variable, #07a)"},{tag:[d._A.color,d._A.constant(d._A.name),d._A.standard(d._A.name)],color:"var(--codemirror-qualifier, #690)"},{tag:[d._A.definition(d._A.name),d._A.separator],color:"var(--codemirror-def, #8DA6CE)"},{tag:[d._A.typeName,d._A.className,d._A.number,d._A.changed,d._A.annotation,d._A.modifier,d._A.self,d._A.namespace],color:"var(--codemirror-number, #ca7841)"},{tag:[d._A.operator,d._A.operatorKeyword,d._A.url,d._A.escape,d._A.regexp,d._A.link,d._A.special(d._A.string)],color:"var(--codemirror-operator, #cda869)"},{tag:d._A.comment,color:"var(--codemirror-comment, #777)"},{tag:d._A.meta,color:"var(--codemirror-meta, var(--primary-text-color))"},{tag:d._A.strong,fontWeight:"bold"},{tag:d._A.emphasis,fontStyle:"italic"},{tag:d._A.link,color:"var(--primary-color)",textDecoration:"underline"},{tag:d._A.heading,fontWeight:"bold"},{tag:d._A.atom,color:"var(--codemirror-atom, #F90)"},{tag:d._A.bool,color:"var(--codemirror-atom, #F90)"},{tag:d._A.special(d._A.variableName),color:"var(--codemirror-variable-2, #690)"},{tag:d._A.processingInstruction,color:"var(--secondary-text-color)"},{tag:d._A.string,color:"var(--codemirror-string, #07a)"},{tag:d._A.inserted,color:"var(--codemirror-string2, #07a)"},{tag:d._A.invalid,color:"var(--error-color)"}]),h=(0,t.y9)(y)}};
//# sourceMappingURL=7126.k7tS0ZUcnQo.js.map