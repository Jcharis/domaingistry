#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');
program.version('0.0.1');


// DATA
var new_domain = ['app','site','online','xyz','tech','shop','blog','space','live','life','website','news','ninja','solutions','expert','services','media','rocks','company','guru','club','today','agency','technology','tips','center','link','click','ltd','win','work']
var common_domain = ['com','edu','net','org','site','co','io','ai','app','ca','uk','ua','us','ru','ch']
var extra_domain =["asia","africa","us","me","biz","info","name","mobi","cc","tv","ly","it","to","eu","ch","online"]
var prefix_domain = ['a','i','e','the','my','me','we','top','best','get','co','nu','up','new','live','bestof','meta','just','99','101','insta','try','hit','go','re','dr','mr','bit','net','hot','beta','you','our','x','buy','for','pro','ez','on','v','hd','max','digi','free','very','all','easy','cool','air','next','find','uber']
var suffix_domain = ["online.com","world.com","io.com","me.com","you.com","up.com","new.com","blog.com","web.com","hd.com","hq.com","tip.com","tips.com","guru.com","link.com","sumo.com","mob.com","lab.com","labs.com","list.com","info.com","jar.com","egg.com","site.com","app.com","apps.com","net.com","inc.com","247.com","360.com","24x7.com","corp.com","page.com","llc.com","now.com","all.com","box.com","base.com","zone.com","zoom.com","bit.com","bits.com","byte.com","bros.com","cart.com","sale.com","shop.com","store.com","free.com","soft.com","101.com","center.com","pro.com","pros.com","co.com","space.com","hub.com","spot.com","ware.com","talk.com","place.com","kit.com","pad.com","tool.com","bot.com","bots.com","bee.com","doc.com",".com","al.com","ity.com","iput.com","ally.com","ality.com","alness.com","ipital.com"]

// CLI
 // Functions For Generating Domain Names
function generateCommonDomains(name){
var new_name = name.split(" ").join("");
 var new_list = common_domain.map(function(d){return `${new_name}.${d}`});
 console.log(chalk.white.bgBlue('Common Domain Names'))
 console.log(new_list)
}

function generateNewDomains(name){
var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 console.log(chalk.white.bgBlue('New Domain Names'))
 console.log(new_list)
}

function generateSuffixDomains(name){
var new_name = name.split(" ").join("");
 var new_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 console.log(chalk.white.bgBlue('Suffixed Domain Names'))
 console.log(new_list)
}

function generatePrefixDomains(name){
var new_name = name.split(" ").join("");
 var new_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
console.log(chalk.white.bgBlue('Prefixed Domain Names'))
 console.log(new_list)
}

function generateExtraDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 console.log(chalk.white.bgBlue('Extra Domain Names'))
 console.log(new_list)
}

function generateAllDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
 var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 var all_list = {'common domains':common_list,
 'extra domains':extra_list,
 'new domains':new_list,
 'prefix domains':prefix_list,
 'suffix domains':suffix_list}
 console.log(chalk.white.bgBlue.bold('All Possible Domain Names'))
 console.log(all_list)
}

function generateAndSaveDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
 var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 var all_list = {'common domains':common_list,
 'extra domains':extra_list,
 'new domains':new_list,
 'prefix domains':prefix_list,
 'suffix domains':suffix_list}
 console.log(chalk.white.bgBlue.bold('All Possible Domain Names'))
 var filename = new_name + '_domain_names' + '.json'
 fs.writeFile(filename, JSON.stringify(all_list),'utf8', function (err) {
  if (err) throw err;
  console.log('Saved! to file');
});
}

function generateDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
 var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 var all_list = {'common domains':common_list,
 'extra domains':extra_list,
 'new domains':new_list,
 'prefix domains':prefix_list,
 'suffix domains':suffix_list}
 console.log(chalk.white.bgBlue.bold('Showing Common Domain Names:: '),chalk.white.bgRed.bold(new_name))
 console.log(common_list)
 var filename = new_name + '_domain_names' + '.json'
 fs.writeFile(filename, JSON.stringify(all_list),'utf8', function (err) {
  if (err) throw err;
  console.log('Saved! All Possible Domain Names to file',chalk.white.bgRed(filename));
});


}

// Commands

program
.command('generate <name>')
.description('Get Common Domain Names and Save to A JSON File')
.alias('g')
.action((name)=>generateDomains(name))

program
.command('get-common <name>')
.description('Get Common Domain Names[eg example.com]')
.alias('gc')
.action((name)=>generateCommonDomains(name))

program
.command('get-new <name>')
.description('Get New Domain Names [eg example.io or example.ai]')
.alias('gn')
.action((name)=>generateNewDomains(name))

program
.command('get-extra <name>')
.description('Get Extra Domain Names [eg example.tv ]')
.alias('ge')
.action((name)=>generateExtraDomains(name))

program
.command('get-suffix <name>')
.description('Get Suffixed Domain Names [eg examplely.com,examplebest.org ]')
.alias('gs')
.action((name)=>generateSuffixDomains(name))

program
.command('get-prefix <name>')
.description('Get Prefixed Domain Names [eg topexample.com,bestexample.org ]')
.alias('gp')
.action((name)=>generatePrefixDomains(name))


program
.command('get-all <name>')
.description('Get All Domain Names')
.alias('ga')
.action((name)=>generateAllDomains(name))


program
.command('generate-n-save <name>')
.description('Generate and Save List of Domain Names To A JSON File')
.alias('gns')
.action((name)=>generateAndSaveDomains(name))

program.parse(process.argv);

 // Package
class Domain{
	constructor(name,category){
		this.name = name;
		this.category = category;
	}

	generate(){
	var new_name = this.name.split(" ").join("");
	 
	 if (this.category == 'common') {
	 	var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
	 	return common_list;
	 } else if (this.category == 'new'){
	 	var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
	 	return new_list;

	 }
	 else if (this.category == 'extra'){
	 	var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
	 	return extra_list;

	 }
	 else if (this.category == 'prefix'){
	 	var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
	 	return prefix_list;

	 }
	 else if (this.category == 'suffix'){
	 	 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
	 	return suffix_list;

	 }

	 else {
	 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
	 return common_list;
	}
}
	 // Functions For Generating Domain Names
	  getCommon(){
	 var new_name = this.name.split(" ").join("");
	  var new_list = common_domain.map(function(d){return `${new_name}.${d}`});
	  return new_list;
	 }

	  getNew(){
	 var new_name = this.name.split(" ").join("");
	  var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
	  return new_list;
	 }

	  getSuffix(){
	 var new_name = this.name.split(" ").join("");
	  var new_list = suffix_domain.map(function(d){return `${new_name}${d}`});
	  return new_list;
	 }

	  getPrefix(){
	 var new_name = this.name.split(" ").join("");
	  var new_list = prefix_domain.map(function(d){return `${d}${new_name}.com`})
	  return new_list;
	 }

	 getExtra(){
	 	var new_name = this.name.split(" ").join("");
	  var new_list = extra_domain.map(function(d){return `${new_name}.${d}`});
	  return new_list;
	 }

	  getAll(){
	 	var new_name = this.name.split(" ").join("");
	  var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
	  var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
	  var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
	  var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
	  var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
	  var all_list = {'common domains':common_list,
	  'extra domains':extra_list,
	  'new domains':new_list,
	  'prefix domains':prefix_list,
	  'suffix domains':suffix_list}
	  return all_list;
	 }

	  to_json(){
	  var new_name = this.name.split(" ").join("");
	  var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
	  var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
	  var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
	  var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
	  var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
	  var all_list = {'common domains':common_list,
	  'extra domains':extra_list,
	  'new domains':new_list,
	  'prefix domains':prefix_list,
	  'suffix domains':suffix_list}
	  return common_list;
	  var filename = new_name + '_domain_names' + '.json'
	  fs.writeFile(filename, JSON.stringify(all_list),'utf8', function (err) {
	   if (err) throw err;
	   console.log('Saved! Domain Names to ::',filename);
	 });


	 }
 
}

module.exports = Domain;


