(this.webpackJsonpprescription_writer=this.webpackJsonpprescription_writer||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var s=n(10),a=n(11),i=n(16),o=n(15),r=n(0),l=n.n(r),c=n(38),u=n.n(c);n(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(21),d=n(22),h=(n(187),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return 0===this.props.suggestions.length?null:l.a.createElement("div",{className:"suggestionBox"},this.props.word,l.a.createElement("ul",null,this.props.suggestions.map((function(t,n){return l.a.createElement("li",{key:t,className:n===e.props.selected?"highlight":null},t)}))))}}]),n}(r.Component)),m=function(){function e(){Object(s.a)(this,e)}return Object(a.a)(e,null,[{key:"provideSuggestion",value:function(e){var t=[],n=e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&");if(n.length>0){var s=new RegExp(n,"i");t=this.dict.filter((function(e){return s.test(e)}))}return t}}]),e}();m.dict=["apple","ball","cat","dog","elephant","fish","goat","hello","icecream","jungle","lion","mouse","north"];var p=m,f=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={editorState:d.EditorState.createEmpty(),lastWord:"suggestions",suggestions:[],suggestionSelected:0},a.onChange=a.onChange.bind(Object(g.a)(a)),a.handleKeyCommand=a.handleKeyCommand.bind(Object(g.a)(a)),a.myKeyBindingFn=a.myKeyBindingFn.bind(Object(g.a)(a)),a.setLastWord=a.setLastWordAndSuggestions.bind(Object(g.a)(a)),a}return Object(a.a)(n,[{key:"onChange",value:function(e){this.setState({editorState:e},this.setLastWordAndSuggestions)}},{key:"handleKeyCommand",value:function(e,t){if(console.log(e),"suggest-write"===e){var n=this.state.editorState.getCurrentContent(),s=this.state.editorState.getSelection(),a=s.getFocusOffset()-this.state.lastWord.length,i=s.merge({anchorOffset:a}),o=d.Modifier.replaceText(n,i,this.state.suggestions[this.state.suggestionSelected]),r=d.EditorState.push(this.state.editorState,o,"insert-fragment");return this.onChange(r),"handled"}if("suggest-up"===e){var l=this.state.suggestionSelected;return l=(l-1+this.state.suggestions.length)%this.state.suggestions.length,this.setState({suggestionSelected:l}),"handled"}if("suggest-down"===e){var c=this.state.suggestionSelected;return c=(c+1)%this.state.suggestions.length,this.setState({suggestionSelected:c}),"handled"}var u=d.RichUtils.handleKeyCommand(t,e);return u?(this.onChange(u),"handled"):"not-handled"}},{key:"myKeyBindingFn",value:function(e){return console.log(e.keyCode),9===e.keyCode&&this.state.suggestions.length>this.state.suggestionSelected?"suggest-write":38===e.keyCode&&this.state.suggestions.length>1?"suggest-up":40===e.keyCode&&this.state.suggestions.length>1?"suggest-down":Object(d.getDefaultKeyBinding)(e)}},{key:"setLastWordAndSuggestions",value:function(){var e="",t=this.state.editorState.getSelection();if(t.getAnchorKey()===t.getFocusKey()&&t.getAnchorOffset()===t.getFocusOffset()){var n=this.state.editorState.getCurrentContent().getBlockForKey(t.getAnchorKey()).getText().slice(0,t.getAnchorOffset()).split(/(\s+)/);n.length>0&&(e=n[n.length-1])}e!==this.state.lastWord&&this.setState({lastWord:e,suggestions:p.provideSuggestion(e),suggestionSelected:0})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.Editor,{editorState:this.state.editorState,onChange:this.onChange,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.myKeyBindingFn,placeholder:"Type here"}),l.a.createElement(h,{word:this.state.lastWord,suggestions:this.state.suggestions,selected:this.state.suggestionSelected}))}}]),n}(l.a.Component),y=(n(188),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"headerContainer"},l.a.createElement("span",{className:"inputContainer"},"Name: \xa0 \xa0",l.a.createElement("input",{type:"text",className:"inputArea"})),l.a.createElement("br",null),"Age: \xa0 \xa0",l.a.createElement("input",{type:"text",className:"inputArea"}),"\xa0 \xa0 \xa0 \xa0 Sex: \xa0 \xa0",l.a.createElement("input",{type:"text",className:"inputArea"})," ",l.a.createElement("br",null),"Address: \xa0 \xa0",l.a.createElement("input",{type:"text",className:"inputArea"}))}}]),n}(r.Component)),v=(n(189),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement(y,null),l.a.createElement("div",{className:"columnContainer"},l.a.createElement("div",{className:"column"},l.a.createElement(f,null)),l.a.createElement("div",{className:"column"},l.a.createElement(f,null))))}}]),n}(l.a.Component));u.a.render(l.a.createElement(v,null),document.getElementById("root"))},87:function(e,t,n){e.exports=n(190)}},[[87,1,2]]]);
//# sourceMappingURL=main.2f466ab3.chunk.js.map