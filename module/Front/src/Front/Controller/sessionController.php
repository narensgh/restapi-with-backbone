public function sessiondataAction()
    {
        $userdata = $this->sessionData();
        return new JsonModel(array("userdata"=>$userdata));
    }
    public function setsessiondataAction()
    {
        $pageId = $this->params()->fromquery('pageId', null);
        if($_SESSION['frontline'] && $pageId)
        {
            $_SESSION['frontline']['pageId'] = $pageId; 
        }
        $userdata = $this->sessionData();
        return new JsonModel(array("userdata"=>$userdata));
    }
    private function sessionData()
    {
        if($_SESSION['frontline'])
        {
            $userdata =array(
                'username' => $_SESSION['frontline']['username'],
                'peopleId' => $_SESSION['frontline']['peopleId'],
                'pageId'   => $_SESSION['frontline']['pageId']
             );
        }
        return $userdata;
    }