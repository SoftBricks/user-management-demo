FlowRouter.route('/', {
	action: function(params) {
		FlowRouter.go('/users');
	}
});

FlowRouter.route('/users', {
	action: function(params) {
		FlowLayout.render('layout', {
			top: "userListToolbar",
			main: "userList",
			aside: 'menu'
		});
	}
});

FlowRouter.route('/users/:userId', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('user', params.userId));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: "userDetailToolbar",
			main: "userDetails",
			aside: 'menu'
		});
	}
});

FlowRouter.route('/addUser', {
	subscriptions: function(params, queryParams) {
		this.register('users', Meteor.subscribe('users', queryParams.limit));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: "addUserToolbar",
			main: "addUser",
			aside: 'menu'
		});
	}
});