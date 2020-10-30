require 'test_helper'

class ConditionsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get conditions_show_url
    assert_response :success
  end

  test "should get upadte" do
    get conditions_upadte_url
    assert_response :success
  end

  test "should get delete" do
    get conditions_delete_url
    assert_response :success
  end

end
