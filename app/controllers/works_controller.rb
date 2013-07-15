class WorksController < InheritedResources::Base
  def index
    @works = Work.find(:all, :order => 'order_work_by')
  end
  def show
    @work = Work.find(params[:id])
  end
  def covers
    @works = Work.find(:all, :conditions => {:category => 'cover'}, :order => 'order_work_by')
    render :index
  end
  def poster
    @works = Work.find(:all, :conditions => {:category => 'poster'}, :order => 'order_work_by')
    render :index
  end
  def identity
    @works = Work.find(:all, :conditions => {:category => 'identity'}, :order => 'order_work_by')
    render :index
  end
  def random
    @works = Work.find(:all, :conditions => {:category => 'random'}, :order => 'order_work_by')
    render :index
  end
end
