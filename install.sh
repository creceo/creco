# If you again do this script, then run this.
# sudo apt-get purge -y nodejs mysql-client mysql-server mysql-common
#
#

sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

OUTPUT="$(npm config get prefix)"
echo "$OUTPUT"

if [ "$OUTPUT" == "/usr/local" ]; then
	OUTPUT="$(sudo chown -R $USER /usr/local)"
else
	OUTPUT="$(mkdir ~/npm-global-modules)"
	OUTPUT="$(npm config set prefix '~/npm-global-modules')"
	OUTPUT="$(echo 'export PATH=~/npm-global-modules/bin:\'$PATH >> ~/.profile )"
	OUTPUT="$(source ~/.profile)"
fi

sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $1"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $1"
sudo apt-get install -y mysql-client mysql-server mysql-common

sudo npm install --save express sequelize mysql fs sequelize-cli sequelize-auto

sequelize init:config --force

mysql -u root -p$1< init.sql

sequelize init:models --force

sequelize-auto -o "./project/models" -d free_board -h localhost -u root -p 3306 -x $1 -e mysql

