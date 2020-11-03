require 'test_helper'

class EquipementControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get equipement_show_url
    assert_response :success
  end

  test "should get create" do
    get equipement_create_url
    assert_response :success
  end

  test "should get update" do
    get equipement_update_url
    assert_response :success
  end

end
