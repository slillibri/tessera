ds.models.jumbotron_singlestat = function(data) {
  "use strict";

  var base
    , self = {};

  base = ds.models.singlestat(data).set_type('jumbotron_singlestat');

  d3.rebind(self, base,
            'set_interactive',
            'set_css_class', 'set_element_id', 'set_height', 'set_style',
            'set_title', 'set_units', 'set_format', 'set_index', 'set_transform', 'toJSON');
  ds.rebind_properties(self, base,
                       'item_type', 'css_class', 'element_id', 'height', 'style',
                       'query_name', 'title', 'units', 'format', 'index', 'transform', 'render');

  return self;
}
