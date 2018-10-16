<?php
namespace PageObjects\LoginDashboard;
/**
 * Class LoginDashboard
 * @package PageObjects\LoginDashboard
 */
class LoginDashboard
{
    /** @var string add URL */
    public static $URL = "/";
    /** @var string username */
    public static $username = "input[name=user]";
    /** @var string password */
    public static $password = ".login-password-input";
    /** @var string login button */
    public static $logIn = "type='submit'";
}