<?php
/**
 * Created by PhpStorm.
 * User: suwen
 * Date: 2017/10/5
 * Time: 20:58
 */

namespace pc\modules\info\controllers;


use pc\controllers\BaseController;
use pc\modules\info\logic\CommentLogic;




/** 信息评论控制器
 * Site controller
 */
class CommentController extends BaseController{
    public function init()
    {

        parent::init(); // TODO: Change the autogenerated stub
    }

    public function actionIndex()
    {
        CommentLogic::search();
    }
}