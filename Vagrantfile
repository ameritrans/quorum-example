Vagrant.configure(2) do |config|
  	config.vm.box = "ubuntu/xenial64"
	config.vm.provision :shell, path: "vagrant/bootstrap.sh"
  	#config.vm.provision :shell, path: "vagrant/bootstrap.sh", run: 'always'
  
	config.vm.network "public_network", ip: "192.168.1.107"

	config.vm.network "forwarded_port", guest: 22000, host: 52000
  	config.vm.network "forwarded_port", guest: 22001, host: 52001
  	config.vm.network "forwarded_port", guest: 22002, host: 52002
  	config.vm.network "forwarded_port", guest: 22003, host: 52003
  	config.vm.network "forwarded_port", guest: 22004, host: 52004
	
	config.vm.network "forwarded_port", guest: 8545, host: 8545	

	config.vm.synced_folder "examples/5nodesRTGS", "/home/vagrant/quorum-examples/5nodesRTGS", type: "rsync",
    rsync__exclude: [".git/", ".gitignore"]

  	config.vm.provider "virtualbox" do |v|
    	v.memory = 4096
  	end
end
