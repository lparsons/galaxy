define(["utils/utils","mvc/ui/ui-misc","mvc/ui/ui-tabs"],function(a,b,c){var d=Backbone.View.extend({events:{"click .ui-thumbnails-item":"_onclick","dblclick .ui-thumbnails-item":"_ondblclick"},initialize:function(a){this.model=a.model||new Backbone.Model(a),this.collection=new Backbone.Collection(this.model.get("items")),this.tabs=new c.View({}),this.setElement(this.tabs.$el.addClass("ui-thumbnails")),this.render(),this.listenTo(this.model,"change",this.render,this),this.listenTo(this.collection,"change",this.render,this)},render:function(){this.first=null,this.tabs.delAll(),this._renderDefault(),this._renderList()},_renderDefault:function(){var b=this,c=20,d=$("<div/>").addClass("ui-thumbnails-grid");this.collection.each(function(a){if(-1!==a.get("keywords").indexOf("default")){var e=a.get("title");d.append($(b._templateThumbnailItem({id:a.id,title:e.length<c?e:e.substr(0,c)+"...",title_icon:a.get("title_icon"),url:a.get("url")})).tooltip({title:a.get("description"),placement:"bottom"}))}}),d.children().length>0&&this.tabs.add({id:a.uid(),title:b.model.get("title_default"),$el:d})},_renderList:function(){var b=this;if(this.collection.length>0){this.first=this.first||this.collection.first().id;var c=$("<div/>").addClass("ui-thumbnails-grid");this.collection.each(function(a){c.append(b._templateRegularItem(a.attributes))}),this.tabs.add({id:a.uid(),title:"List of available visualizations",$el:c})}},value:function(a){if(void 0!==a){a="__first"==a?this.first:a;var b=this.$(".ui-thumbnail-current").attr("value");this.$(".ui-thumbnail-current").removeClass("ui-thumbnail-current"),this.$('[value="'+a+'"]').addClass("ui-thumbnail-current");var c=this.$(".ui-thumbnail-current").attr("value"),d=this.model.get("onchange");c!=b&&d&&d(c)}return this.$(".ui-thumbnail-current").attr("value")},_onclick:function(a){this.value($(a.target).closest(".ui-thumbnails-item").attr("value"))},_ondblclick:function(){this.model.get("ondblclick")&&this.model.get("ondblclick")(this.value())},_templateThumbnailItem:function(a){return'<div class="ui-thumbnails-item ui-thumbnails-item-float" value="'+a.id+'"><img class="ui-thumbnails-image" src="'+a.url+'"><div class="ui-thumbnails-title ui-form-info"><span class="fa '+a.title_icon+'"/>'+a.title+"</div><div>"},_templateRegularItem:function(a){return'<div class="ui-thumbnails-item" value="'+a.id+'"><table><tr><td><img class="ui-thumbnails-image" src="'+a.url+'"></td><td><div class="ui-thumbnails-description-title ui-form-info">'+a.title+'</div><div class="ui-thumbnails-description-text ui-form-info">'+a.description+"</div></td></tr><div>"}});return{View:d}});
//# sourceMappingURL=../../../maps/mvc/ui/ui-thumbnails.js.map