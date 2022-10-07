import Handlebars from 'handlebars/runtime.js';
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['structure/footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    Footer component\n</footer>\n";
},"useData":true});
Handlebars.partials['structure/header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n    What a cool header!\n    "
    + container.escapeExpression((lookupProperty(helpers,"asyncTest")||(depth0 && lookupProperty(depth0,"asyncTest"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asyncTest","hash":{"age":33,"name":"Header"},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":38}}}))
    + "\n</header>\n\n";
},"useData":true});
