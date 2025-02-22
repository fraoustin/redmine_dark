# Wiki Notes plugin for Redmine
# Copyright (C) 2010 Daniel Seifert
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


def init_redmine_dark
  require_dependency Rails.root + "plugins/redmine_dark/lib/dark_application_hooks.rb"
end

if Rails::VERSION::MAJOR >= 6
  Rails.application.config.after_initialize do
    init_redmine_dark
  end
elsif Rails::VERSION::MAJOR >= 5
  ActiveSupport::Reloader.to_prepare do
    init_redmine_dark
  end
elsif Rails::VERSION::MAJOR >= 3
  ActionDispatch::Callbacks.to_prepare do
    init_redmine_dark
  end
else
  Dispatcher.to_prepare :redmine_tags do
    init_redmine_dark
  end
end

require 'redmine'
Redmine::Plugin.register :redmine_dark do
    name 'Dark Mode'
    author 'fraoustin'
    description 'Adds dark mode theme'
    version '1.1.0'
    url 'https://github.com/fraoustin/redmine_dark'
    author_url 'https://github.com/fraoustin'
    requires_redmine :version_or_higher => '2.0.0'
end
