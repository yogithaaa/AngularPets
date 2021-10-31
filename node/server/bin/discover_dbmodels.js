'use strict';

const loopback = require('loopback');
const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdirp = promisify(require('mkdirp'));
const args = require('minimist')(process.argv.slice(2));
// const DATASOURCE_NAME = 'persianempire';
const dataSourceConfig = require('../datasources.json');
const db1 = new loopback.DataSource(dataSourceConfig[dataSource]);
var createIfNotExist = require("create-if-not-exist");
var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');
var dataSource = app.dataSources.openwifitask;
const lower = args.t
const cap_Fir_Let_ = lower.charAt(0).toUpperCase() + lower.substr(1);
discover().then(
  success => {
    console.log('\n')
    console.log('# table ->' + args.t + ' from # database ->' + args.d + ' has been loaded succesfully..!!')
    process.exit()
  },
  error => {
    console.error('\n UNHANDLED ERROR:\n\n', error);
    process.exit(1);
  }
);

async function discover() {
  const options = {
    relations: true
  };
  const dbtable = await db1.discoverSchemas(args.t, options);
  await mkdirp('common/models');
  const key = args.d + '.' + args.t
  dbtable[key].properties.id.required = false;
  await writeFile('common/models/' + cap_Fir_Let_ + '.json', JSON.stringify(dbtable[key], null, 2));
  const configJson = await readFile('server/model-config.json', 'utf-8');
  const config = JSON.parse(configJson);
  config[cap_Fir_Let_] = {
    dataSource: dataSource,
    public: true
  };
  await writeFile(
    'server/model-config.json',
    JSON.stringify(config, null, 2)
  );
  var model_JS_file = path.join(outputPath + '/' + cap_Fir_Let_ + '.js');

  await createIfNotExist(
    model_JS_file,
    "'use strict';module.exports=function(" + cap_Fir_Let_ + ") {};", 'utf8'
  );
}
