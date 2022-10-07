import Handlebars from 'handlebars/runtime.js';
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html>\n    <head></head>\n    <body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/header"),depth0,{"name":"structure/header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <h1>This is a thing that is being built.</h1>\n\n        <p>\n            <strong>Your name:</strong> "
    + alias3(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":48}}}) : helper)))
    + "\n        </p>\n\n        "
    + alias3((lookupProperty(helpers,"asyncTest")||(depth0 && lookupProperty(depth0,"asyncTest"))||alias2).call(alias1,{"name":"asyncTest","hash":{"age":49,"name":"Tester 2"},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":44}}}))
    + "\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/footer"),depth0,{"name":"structure/footer","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </body>\n</html>\n";
},"usePartial":true,"useData":true});
