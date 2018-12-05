'use strict';

const Superouter = require('superouter');

exports.Route = Superouter.type('route', {
    Index: '/',
    Article: '/article/:slug',
    Login: '/login',
    Register: '/register',
    Settings: '/settings',
    ProfileIndex: '/profile/:username',
    ProfileFavorites: '/profile/:username/favorites'
});

exports.baseOf = exports.Route.fold({
    Index: () => '/',
    Article: () => '/article',
    Login: () => '/login',
    Register: () => '/register',
    Settings: () => '/settings',
    ProfileIndex: () => '/profile',
    ProfileFavorites: () => '/profile/favorites'
});
