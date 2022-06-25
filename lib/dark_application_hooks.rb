require 'redmine'
class DarkApplicationHooks < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context = {})
    # beware of http://www.redmine.org/issues/3935
    return javascript_include_tag('dark.js', :plugin => 'redmine_dark') +
    stylesheet_link_tag("dark.css", :plugin => "redmine_dark", :media => "all")
  end
end
