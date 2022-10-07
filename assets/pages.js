import Handlebars from 'handlebars/runtime.js';
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html>\n    <head>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/htmlhead"),depth0,{"name":"structure/htmlhead","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <title>Cloudflare Workers with Handlebars</title>\n\n    </head>\n    <body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/header"),depth0,{"name":"structure/header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n\n                    <div style=\"text-align: center; margin-bottom: 30px;\">\n                        <div style=\"display: inline-block; width: 300px;\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"logos/cloudflare"),depth0,{"name":"logos/cloudflare","data":data,"indent":"                            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n\n                    <h3>This template is rendered by Handlebars in a Cloudflare Worker</h3>\n\n                    <p>\n                        <strong>Your name:</strong> "
    + alias3(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":24,"column":52},"end":{"line":24,"column":60}}}) : helper)))
    + "\n                    </p>\n\n                    <pre>"
    + alias3((lookupProperty(helpers,"asyncTest")||(depth0 && lookupProperty(depth0,"asyncTest"))||alias2).call(alias1,{"name":"asyncTest","hash":{"age":49,"name":"Tester 2"},"data":data,"loc":{"start":{"line":27,"column":25},"end":{"line":27,"column":61}}}))
    + "</pre>\n\n                </div>\n            </div>\n        </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/footer"),depth0,{"name":"structure/footer","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </body>\n</html>\n";
},"usePartial":true,"useData":true});
