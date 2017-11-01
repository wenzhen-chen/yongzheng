<?php
/**
 * Created by PhpStorm.
 * User: suwen
 * Date: 2017/10/18
 * Time: 22:06
 */

namespace backend\models;


class Auth extends BaseModel
{
    public static function tableName()
    {
        return "{{%auth}}";
    }

    public function rules()
    {
        return [
            ['auth_pid','safe'],
            ['auth_name', 'required', 'message' => '权限名不能为空'],
            ['auth_m', 'required', 'message' => '模块名不能为空'],
            ['auth_c', 'required', 'message' => '控制器名不能为空'],
            ['auth_a', 'required', 'message' => '方法名不能为空']
        ];
    }

    public function getAuthsNameByAll(){
        return self::find()->select(['auth_id','auth_name'])->all();
    }

    public function add($data){
        if($this->load($data,'')&&$this->validate()){
            $this->create_time = time();//创建时间
            if ($this->save(false)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public function getAuthsByPager($offset,$limit){
        return self::find()->offset($offset)->limit($limit)->all();
    }
    /************************************* 递归相关方法 *************************************/
    /**
     * 递归获取权限树
     * 
     */
	public function getTree()
	{
        $result = self::find()->asArray()->all();
		return $this->_reSort($result);
    }
    
    private function _reSort($data, $auth_pid=0, $level=0, $isClear=TRUE)
	{
		static $ret = array();
		if($isClear)
            $ret = array();
		foreach ($data as $k => $v)
		{
			if($v['auth_pid'] == $auth_pid)
			{
				$v['level'] = $level;
				$ret[] = $v;
				$this->_reSort($data, $v['auth_id'], $level+1, FALSE);
			}
		}
		return $ret;
    }
    
    public function getChildren($auth_id=0)
	{
		$data = self::find()->asArray()->all();
		return $this->_children($data, $auth_id);
    }
    
	private function _children($data, $parent_id=0, $isClear=TRUE)
	{
		static $ret = array();
		if($isClear)
			$ret = array();
		foreach ($data as $k => $v)
		{
			if($v['auth_pid'] == $parent_id)
			{
				$ret[] = $v['auth_id'];
				$this->_children($data, $v['auth_id'], FALSE);
			}
		}
		return $ret;
	}

    /** 设置权限等级格式
     * 
     */
    public function setPrefix($data, $p = "|-----")
    {
        $tree = [];
        $num = 1;
        $prefix = [0 => 1];
        while($val = current($data)) {
            $key = key($data);
            if ($key > 0) {
                if ($data[$key - 1]['auth_pid'] != $val['auth_pid']) {
                    $num ++;
                }
            }
            if (array_key_exists($val['auth_pid'], $prefix)) {
                $num = $prefix[$val['auth_pid']];
            }
            $val['auth_name'] = str_repeat($p, $num).$val['auth_name'];
            $prefix[$val['auth_pid']] = $num;
            $tree[] = $val;
            next($data);
        }
        return $tree;
    }

    public function getOptions()
    {
        $data = $this->getData();
        $tree = $this->getTree($data);
        $tree = $this->setPrefix($tree);
        $options = ['添加顶级分类'];
        foreach($tree as $cate) {
            $options[$cate['cateid']] = $cate['title'];
        }
        return $options;
    }

    public function getTreeList()
    {
        $data = $this->getData();
        $tree = $this->getTree($data);
        return $tree = $this->setPrefix($tree);
    }

    /**获取权限树菜单
     * 
     */
    public static function getMenu()
    {
        $top = self::find()->where('auth_pid = :pid', [":pid" => 0])->orderby('create_time asc')->asArray()->all();
        $data = [];
        foreach((array)$top as $k=>$auth) {
            $auth['children'] = self::find()->where("auth_pid = :pid", [":pid" => $auth['auth_id']])->asArray()->all();
            $data[$k] = $auth;
        }
        return $data;
    }

    public function getAllTree(){
        $result = self::find()->asArray()->all();
    }

}