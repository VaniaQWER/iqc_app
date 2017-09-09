export default {
  SELECT_FORMULA_LIST: `/formulaController/selectFormulaList`, //查询质量管理列表
  SELECT_SCOPE_LIST: `/deptInfoController/searchSelectScopeList`, //查询医院列表
  SELECT_FORMULA_DETAIL: `/formulaDetailController/selectFormulaDetail`,//查询指标信息详情
  
  //用户模块
  SEARCH_USER_LIST :`/user/findAllUserList`,//查询用户列表
  RESET_PASSWORD: `/user/resetUserPwd`,//重置密码
  
  //机构
  SEARCH_ORGS: `/orgController/findOrgs`,//查询机构
  SEARCH_ORGS_LIST: `/orgController/findAllOrgList`, //查询所有机构
  ADD_ORG: `/orgController/addUpdateOrgInfo`,//新增更新机构

  //获取省市区级联菜单
  CITY: `/js/City.json`,
}