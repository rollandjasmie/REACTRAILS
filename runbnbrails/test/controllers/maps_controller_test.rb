require 'test_helper'

class MapsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get maps_show_url
    assert_response :success
  end

  test "should get update" do
    get maps_update_url
    assert_response :success
  end

  test "should get delete" do
    get maps_delete_url
    assert_response :success
  end

end
