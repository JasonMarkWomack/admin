
var UserObj = {
    checkPass: function(guess) {
        return this.password === guess;
    }
}

var AdminUser = Object.create(UserObj);

AdminUser.checkAdmin = function() {
    console.log('I\'m an admin!');
}

AdminUser.password = 'superSecret';

// AdminUser.checkAdmin();
// AdminUser.checkPass('foo')

var Brett = Object.create(AdminUser);

Brett.password = 'fooburger';

Brett.checkAdmin();
Brett.checkPass('fooburger');

Array.prototype.addFoo = function() {
    this.push('foo')
    return this;
}

var result = [].addFoo();

result.addFoo();

result;
