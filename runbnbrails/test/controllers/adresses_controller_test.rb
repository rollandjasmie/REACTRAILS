require 'test_helper'

class AdressesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get adresses_show_url
    assert_response :success
  end

  test "should get update" do
    get adresses_update_url
    assert_response :success
  end

  test "should get delete" do
    get adresses_delete_url
    assert_response :success
  end

end
