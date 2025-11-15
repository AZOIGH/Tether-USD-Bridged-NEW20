<img width="1888" height="912" alt="image" src="https://github.com/user-attachments/assets/c9250186-845f-49bd-8554-88689da03b72" />

Tron is a Laravel package for work with cryptocurrency Tron, with the support TRC-20 tokens.It allows you to generate HD wallets using mnemonic phrase, validate addresses, get addresses balances and resources, preview and send TRX/TRC-20 tokens. You can automate the acceptance and withdrawal of cryptocurrency in your application.

Requirements
The following versions of PHP are supported by this version.

PHP 8.1 and older
Laravel 10 or older
PHP Extensions: Decimal, GMP, BCMath, CType.
Installation
You can install the package via composer:

composer require it-healer/laravel-tron
After you can run installer using command:

php artisan tron:install
And run migrations:

php artisan migrate
Register Service Provider and Facade in app, edit config/app.php:

'providers' => ServiceProvider::defaultProviders()->merge([
    ...,
    \ItHealer\LaravelTron\TronServiceProvider::class,
])->toArray(),

'aliases' => Facade::defaultAliases()->merge([
    ...,
    'Tron' => \ItHealer\LaravelTron\Facades\Tron::class,
])->toArray(),
For Laravel 10 you edit file app/Console/Kernel in method schedule(Schedule $schedule) add:

$schedule->command('tron:sync')
    ->everyMinute()
    ->runInBackground();
or for Laravel 11+ add this content to routes/console.php:

use Illuminate\Support\Facades\Schedule;

Schedule::command('tron:sync')
    ->everyMinute()
    ->runInBackground();
How use?
Firstly register an account on the TronGrid website and get an API key.
Using the following code, create a node through which the library will work:
$apiKey = "..."; // API Key from TronGrid.io
Tron::createTronGridNode($apiKey, 'node_name');
Now you can create Tron Wallet using code:
$mnemonic = Tron::mnemonicGenerate();
echo 'Mnemonic: '.implode(' ', $mnemonic);

$wallet = Tron::createWallet('wallet_name', $mnemonic);
Create primary Tron Address in your Wallet using code:
$address = Tron::createAddress($wallet, 'primary_address_name');

echo 'Primary Address: '.$address->address;
Now you can send TRX using this code:
$to = 'receiver tron address';
$amount = 1;

$transfer = Tron::transfer($address, $to, $amount);

echo 'TXID: '.$transfer->txid;
If you want work with TRC-20
For example: Tether USDT
You must create TronTRC20 model using this code:
$contractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

$trc20Token = TronTRC20::create($contractAddress);
For transfer Tether USDT TRC-20 for another address you can use this code:
$to = 'receiver tron address';
$amount = 1;

$transferTRC20 = Tron::transferTRC20($address, $to, $amount);

echo 'TXID: '.$transferTRC20->txid;
Commands
Synchronizing everything

php artisan tron:sync
Node synchronization

php artisan tron:sync-node NODE_ID
Wallet synchronization

php artisan tron:sync-wallet WALLET_ID
Address synchronization

php artisan tron:sync-address ADDRESS_ID
Create Tron Node. Before you need register account in https://trongrid.io and generate API Key.

php artisan tron:new-node
Create Tron Wallet.

php artisan tron:new-wallet
Generate Tron Address.

php artisan tron:new-address
Import watch only address.

php artisan tron:import-address
Create TRC-20 Token

php artisan tron:new-trc20
Support
Telegram: @biodynamist
WhatsApp: +905516294716
Web: it-healer.com
Changelog
Please see CHANGELOG for more information on what has changed recently.

Credits
IT-HEALER
License
The MIT License (MIT). Please see License File for more information.
