window.oc = window.oc || {};
oc.cmd = oc.cmd || [];

oc.cmd.push(function() {

	oc.require('React', '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js', function(){
		oc.require('ReactDOM', '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js', function(){
			ReactDOM.render(
			  React.createElement('h1', null, 'Hello World!'),
			  document.getElementById('root')
			);
		});
	});
});